<template>
  <div class="step step-2" :class="status">
    <div class="step-content">
      <div class="step-icon"></div>
      <div class="step-titleline">
        <div class="step-number">2</div>
        <div class="step-title">Human agent access</div>
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
