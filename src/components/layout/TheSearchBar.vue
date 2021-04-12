<template>
  <div class="search-box mb-4 pl-2">
    <div class="float-right">
      <input
        type="text"
        placeholder="Search anything"
        v-model="query"
        :class="open ? 'search-input open' : 'search-input'"
      />
      <a href="#" class="search-btn">
        <i class="fas fa-search"></i>
      </a>
    </div>
  </div>
</template>


<script>
// import _ from "lodash";
export default {
  data() {
    return {
      query: "",
    };
  },
  computed: {
    open() {
        console.log(!!this.query);
      return !!this.query;
    },
  },
  methods: {
    searchRecipes() {
      console.log(this.query);
      // this.$store.dispatch("SEARCH_PRODUCTS", this.query);
    },
  },
  // watch: {
  //   query: {
  //     handler: _.debounce(function() {
  //       this.searchRecipes();
  //     }, 1000)
  //   }
  // }
};
</script>

<style scoped>
.search-box {
  height: 60px;
  line-height: 40px;
  padding: 10px;
  border-radius: 60px;
}
.search-input {
  color: #353535;
  outline: none;
  border: none;
  line-height: 40px;
  width: 0px;
  margin-left: auto;
  font-size: 14px;
  transition: 0.7s ease;
}

.search-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #1565c0;
  padding: 12px;
  border-radius: 50%;
  float: right;
  color: #f4f4f4;
  transition: 0.4s ease;
}
.search-box:hover .search-input,
.search-input.open {
  width: 240px;
  margin: 0px 8px;
  border-bottom: 1px solid rgb(106, 115, 124);
}
.search-input:focus,
.search-input.open {
  width: 240px;
  margin: 0px 8px;
  border-bottom: 1px solid rgb(106, 115, 124);
}
.search-box:hover .search-btn,
.search-input.open ~ .search-btn {
  color: rgb(106, 115, 124);
  background: none;
}
.search-input:focus ~ .search-btn,
.search-input.open ~ .search-btn {
  color: rgb(106, 115, 124);
  background: none;
}

@media screen and (max-width: 476px) {
  .search-box:hover > .search-input {
    width: 80%;
  }
  .search-input:focus {
    width: 80%;
  }
}
</style>