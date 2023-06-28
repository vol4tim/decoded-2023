<template>
  <Description />
  <MainPage v-if="isReady" />
</template>

<script>
import { fromUnit, round } from "@/utils/tools";
import { toRaw } from "vue";
import Description from "./components/Description.vue";
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    Description,
    MainPage
  },
  inject: ["RobonomicsProvider"],
  data() {
    return {
      isReady: this.RobonomicsProvider.isReady
    };
  },
  computed: {
    robonomics: function () {
      return toRaw(this.RobonomicsProvider.instance.value);
    }
  },
  watch: {
    isReady: function () {
      this.handlerAccount(this.$store.state.robonomicsUIvue.polkadot.address);
    },
    "$store.state.robonomicsUIvue.polkadot.extensionObj": function (value) {
      if (
        value.signer &&
        value.signer.signRaw &&
        this.$store.state.robonomicsUIvue.polkadot.address
      ) {
        this.handlerAccount(this.$store.state.robonomicsUIvue.polkadot.address);
      }
    },
    "$store.state.robonomicsUIvue.polkadot.address": {
      handler: function (value) {
        if (
          value &&
          this.$store.state.robonomicsUIvue.polkadot.extensionObj.signer &&
          this.$store.state.robonomicsUIvue.polkadot.extensionObj.signer.signRaw
        ) {
          this.handlerAccount(value);
        }
      },
      immediate: true
    }
  },
  methods: {
    async handlerAccount(address) {
      if (!this.isReady) {
        return;
      }
      if (this.unsubscribeBalance) {
        this.unsubscribeBalance();
      }
      const account = this.$store.state.robonomicsUIvue.polkadot.accounts.find(
        (item) => item.address === address
      );
      if (!account) {
        return;
      }
      await this.robonomics.accountManager.setSender(address, {
        type: account.type,
        extension: this.$store.state.robonomicsUIvue.polkadot.extensionObj
      });
      this.unsubscribeBalance = await this.robonomics.account.getBalance(
        address,
        (r) => {
          const transferable = r.free.sub(r.feeFrozen);
          this.$store.commit(
            "polkadot/setBalanceXRT",
            round(
              fromUnit(
                transferable,
                this.robonomics.api.registry.chainDecimals[0]
              ),
              4
            )
          );
        }
      );
    }
  }
};
</script>
