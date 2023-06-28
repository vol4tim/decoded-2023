<template>
  <div class="step step-3" :class="status">
    <div class="step-content">
      <div class="step-icon"></div>
      <div class="step-titleline">
        <div class="step-number">3</div>
        <div class="step-title">Mini Pupper 2 ROS2</div>
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
