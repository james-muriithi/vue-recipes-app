<template>
  <div id="page-title" class="padding-tb-30px gradient-white">
    <div class="container text-left">
      <ol class="breadcrumb opacity-5">
        <li><a href="/">Home</a></li>
        <li class="active">Recipe</li>
      </ol>
      <h1 class="font-weight-300">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.padding-tb-30px {
  padding-top: 30px;
  padding-bottom: 30px;
}

.opacity-5 {
  opacity: 0.5 !important;
}

.breadcrumb {
  display: inherit;
  background: none;
  padding: 0px;
}
.breadcrumb li {
  display: inline-block;
  margin-right: 5px;
  margin-left: 0px;
  font-size: 13px;
}
.breadcrumb li > :after {
  font-family: "Font Awesome 5 Free";
  content: "\f105";
  font-weight: 900;
  display: inline-block;
  padding-left: 5px;
}
.breadcrumb li .svg-inline--fa {
  margin-left: 10px;
}

.font-weight-300 {
  font-weight: 300;
}

.h1 {
  font-weight: 500;
}
.h1,
h1 {
  font-size: 28px;
  line-height: 32px;
}
</style>
