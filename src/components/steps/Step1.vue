<template>
  <div class="step step-1" :class="status">
    <div class="step-content">
      <div class="step-icon"></div>
      <div class="step-titleline">
        <div class="step-number">1</div>
        <div class="step-title">
          MyCobot 280 Jetson Nano 6 DOF Collaborative Robot
        </div>
      </div>
    </div>
    <div class="step-status">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      default: ""
    }
  }
};
</script>
