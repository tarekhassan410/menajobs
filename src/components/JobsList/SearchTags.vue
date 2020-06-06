<template>
  <div id="buttons-container">
    <shared-button tag="Marketing" />
    <shared-button tag="Design" />
    <shared-button tag="Programming" />
  </div>
</template>

<script>
import SharedButton from "../Shared/Button";
export default {
  components: {
    SharedButton
  }
};
</script>

<style scoped>
#buttons-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>