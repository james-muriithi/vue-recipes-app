<template>
  <h3>Ingredients</h3>
  <ul>
    <li><strong>16 oz</strong> rotini noodles</li>
    <li><strong>24 oz</strong> spaghetti sauce (prego traditional)</li>
    <li><strong>1/2 lb</strong> ground beef</li>
    <li><strong>15 oz</strong> ricotta cheese</li>
    <li><strong>14 oz</strong> mozzarella shredded</li>
    <li><strong>1 can</strong> sliced olives</li>
    <li><strong>1 packages</strong> pepperoni slices</li>
  </ul>
</template>

<style scoped>
ul{
    list-style: none;
    text-align: left;
}
ul li{
  position: relative;
  margin-top: 10px;
  padding-left: 25px;
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