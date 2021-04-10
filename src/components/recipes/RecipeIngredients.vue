<template>
  <div v-if="ingredients && ingredients.length > 0">
    <h3>Ingredients</h3>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient">
        {{ ingredient.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  text-align: left;
  padding-inline-start: 10px !important;
}
ul li {
  position: relative;
  margin-top: 10px;
  padding-left: 25px;
  text-transform: capitalize;
}
li::before {
  font-family: "Font Awesome 5 Free";
  content: "\f058";
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-variant: normal;
  font-weight: 900;
  text-rendering: auto;
  line-height: 28px;
  font-size: 14px;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #1ec1b0;
}
</style>
