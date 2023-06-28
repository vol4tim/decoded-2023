<template>
  <div class="step step-4" :class="[status, color]">
    <div class="step-content">
      <div class="step-icon"></div>
      <div class="step-titleline">
        <div class="step-number">4</div>
        <div class="step-title">Status lamp</div>
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
    },
    color: {
      default: ""
    }
  }
};
</script>
