<template>
  <teleport to="body">
    <the-header></the-header>
  </teleport>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader
  },
  created() {
    this.$store.dispatch("loadFavouriteRecipes");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,800%7CPoppins:100,200,300i,300,400,700,400i,500%7CDancing+Script:700");
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
.padding-lr-30px {
  padding-left: 30px;
  padding-right: 30px;
}
.padding-lr-20px {
  padding-left: 20px;
  padding-right: 20px;
}
.padding-tb-20px {
  padding-top: 20px;
  padding-bottom: 20px;
}
.margin-bottom-20px {
  margin-bottom: 20px;
}

.margin-bottom-40px {
  margin-bottom: 40px;
}

.margin-top-10px {
  margin-top: 10px;
}

.text-red {
  color: #e91e63 !important;
}
</style>
