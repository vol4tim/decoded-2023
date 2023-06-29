<template>
  <div class="col-2">
    <button
      @click="launch"
      :class="{ started: tx.process.value || statusStep1 !== '' }"
      :disabled="tx.process.value || statusStep1 !== ''"
    >
      Start
    </button>
    <div class="account">
      <robo-account-polkadot
        short
        extensionAllowShift
        extensionShowIcon
        selectable
      />
    </div>
    <step1 :status="statusStep1" />
    <step2 :status="statusStep2" />
    <step3 :status="statusStep3" />
    <step4 :status="statusStep4" :color="сolorStep4" />
    <status>{{ statusText }}</status>
  </div>
</template>

<script>
import config from "@/config";
import { useRobonomics } from "@/hooks/useRobonomics";
import { useSend } from "@/hooks/useSend";
import { utils } from "robonomics-interface";
import { ref } from "vue";
import { useStore } from "vuex";
import Status from "./Status.vue";
import Step1 from "./steps/Step1.vue";
import Step2 from "./steps/Step2.vue";
import Step3 from "./steps/Step3.vue";
import Step4 from "./steps/Step4.vue";

const status = {
  none: "",
  loading: "loading",
  ok: "ok",
  error: "error",
  red: "",
  green: "success"
};

function sleep(t) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, t);
  });
}

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Status
  },
  setup() {
    const robonomics = useRobonomics();
    const tx = useSend();
    const statusText = ref("Waiting for pressing 'Start' button");
    const statusStep1 = ref(status.none);
    const statusStep2 = ref(status.none);
    const statusStep3 = ref(status.none);
    const statusStep4 = ref(status.none);
    const сolorStep4 = ref(status.red);
    const store = useStore();

    const launch = async () => {
      statusText.value = "Tx launched by 'Start' button";
      statusStep1.value = status.loading;
      const call = robonomics.launch.send(config.manipulator, config.command);
      await tx.send(call, config.subscription);
      if (tx.error.value) {
        if (tx.error.value !== "Cancelled") {
          console.log(`Error: ${tx.error.value}`);
          statusText.value = tx.error.value;
          statusStep1.value = status.error;
        } else {
          console.log("Calcel");
          statusText.value = "Waiting for pressing 'Start' button";
          statusStep1.value = status.none;
        }
      } else {
        console.log("Launch sended");

        const unsubscribe = await robonomics.launch.on({}, (items) => {
          for (const item of items) {
            const parameter = utils.hexToCid(item.parameter);
            if (item.account === config.dog && item.robot === config.lamp) {
              statusStep2.value = status.ok;
              statusStep3.value = status.ok;
              statusStep4.value = status.ok;
              if (parameter === config.red) {
                statusText.value = "Status lamp got result of track, failed";
                сolorStep4.value = status.red;
              } else {
                statusText.value = "Status lamp got result of track, success";
                сolorStep4.value = status.green;
              }
              unsubscribe();
            }
          }
        });

        statusText.value = "Transaction sent";
        await sleep(1500);
        statusText.value = "MyCobot received request";
        statusStep1.value = status.ok;
        statusStep2.value = status.loading;

        await sleep(config.timeout.step1);

        statusText.value = "Human agent got access";

        await sleep(config.timeout.step2);

        statusText.value = "Human agent is manipulating Mini Pupper 2";

        statusStep2.value = status.ok;
        statusStep3.value = status.loading;

        await sleep(config.timeout.step3);

        statusStep3.value = status.ok;
        statusStep4.value = status.loading;

        // DEMO
        await robonomics.accountManager.setSender(config.dog, {
          type: "sr25519",
          extension: store.state.robonomicsUIvue.polkadot.extensionObj
        });
        const call = robonomics.launch.send(config.lamp, config.green);
        await tx.send(call, config.subscription);
        // DEMO
      }
    };

    return {
      launch,
      tx,
      statusText,
      statusStep1,
      statusStep2,
      statusStep3,
      statusStep4,
      сolorStep4
    };
  }
};
</script>
