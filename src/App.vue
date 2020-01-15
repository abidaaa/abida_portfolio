<template>
  <div id="app">
    <Header />
    <vue-page-transition name="fade">
      <router-view/>
    </vue-page-transition>
  </div>
</template>
<script>
import Header from './components/Layout/Header';

export default {
    name:"app",
    components: {
    Header
  },
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    line-height: 1.4;
  }
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: white;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
