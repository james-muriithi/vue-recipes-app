<template>
  <div v-if="instructions && instructions.length > 0">
    <h3>Instructions</h3>
    <ol>
      <li v-for="instruction in instructions" :key="instruction.number">
        {{ instruction.step }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    instructions: {
      type: Object,
      required: true
    }
  },
  created() {
    console.log(this.instructions);
  }
};
</script>

<style scoped>
ol {
  text-align: left;
  padding-inline-start: 10px;
}
ol li {
  line-height: 28px;
  padding-bottom: 4px;
}
</style>
