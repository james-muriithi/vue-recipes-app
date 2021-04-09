<template>
  <header class="md-header py-1-half fixed">
    <div class="nav-left">
      <!-- <div class="nav-bar"><i class="material-icons">menu</i></div> -->
      <router-link to="/" class="brand">Recipe App</router-link>
    </div>
    <div class="nav-right">
      <div class="md-search-bar">
        <i class="material-icons search-icon">search</i>
        <div class="md-search-bar-input">
          <input class="md-input-text" type="text" placeholder="Search" />
          <div class="md-bar"></div>
          <i class="material-icons">close</i>
        </div>
      </div>
    </div>
    <div class="div nav-mobile-shadow"></div>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
.py-1-half {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 6px;
}
.brand {
  text-decoration: none;
}
.md-header.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}
.md-header {
  font-family: "Roboto", sans-serif;
  background-color: #1565c0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
}
.md-header .md-search-bar {
  display: flex;
  align-items: center;
  margin: 0 15px;
}
.md-header .md-search-bar.focus .md-search-bar-input {
  max-width: 999px;
}
.md-header .md-search-bar .search-icon {
  padding: 0 15px;
}
.md-header .md-search-bar i.material-icons {
  color: #fff;
}
.md-header .md-search-bar i.material-icons:hover {
  cursor: pointer;
}
.md-header .md-search-bar .md-search-bar-input {
  display: flex;
  align-items: center;
  position: relative;
  max-width: 0;
  overflow: hidden;
  transition: 0.4s ease;
}
.md-header .md-search-bar .md-search-bar-input input.md-input-text {
  border: none;
  font-size: 1em;
  outline: none;
  background-color: transparent;
  color: #fff;
  padding: 8px 0;
}
.md-header
  .md-search-bar
  .md-search-bar-input
  input.md-input-text::-webkit-input-placeholder {
  color: #fff;
}
.md-header
  .md-search-bar
  .md-search-bar-input
  input.md-input-text:focus
  + .md-bar:after {
  left: 0;
  width: 100%;
}
.md-header .md-search-bar .md-search-bar-input .md-bar {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 1px;
}
.md-header .md-search-bar .md-search-bar-input .md-bar:after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 50%;
  background-color: #fff;
  width: 0px;
  height: 2px;
  transition: 0.4s ease;
}
.md-header .nav-left,
.md-header .nav-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.md-header .nav-left a,
.md-header .nav-right a,
.md-header .nav-bar,
.md-header .brand {
  color: #fff;
}
.md-header .nav-bar:hover {
  cursor: pointer;
}
.md-header .nav-bar .material-icons {
  padding: 15px;
}
.md-header .brand {
  padding: 0 15px;
}
.md-header .nav-mobile {
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 20;
  background-color: #fff;
  width: 50%;
  height: 100%;
  transition: 0.4s ease;
}
.md-header .nav-mobile ul.nav-mobile-list {
  list-style: none;
}
.md-header .nav-mobile ul.nav-mobile-list li.divider {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.md-header .nav-mobile ul.nav-mobile-list li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 15px;
  color: rgba(0, 0, 0, 0.67);
}
.md-header .nav-mobile ul.nav-mobile-list li a:hover,
.md-header .nav-mobile ul.nav-mobile-list li a:focus {
  background-color: rgba(0, 0, 0, 0.1);
}
.md-header .nav-mobile ul.nav-mobile-list li a .material-icons {
  margin-right: 20px;
}
.md-header .nav-mobile-shadow {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s ease;
}
.md-header.active .nav-mobile {
  left: 0;
}
.md-header.active .nav-mobile-shadow {
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 393px) {
  .md-header .md-search-bar {
    margin-right: 8px;
  }
  .material-icons.search-icon {
    padding-right: 8px;
    padding-left: 8px;
  }
}
</style>
