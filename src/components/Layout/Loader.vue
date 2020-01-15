<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "Loader",
  mounted: () => {
    /* eslint no-console: "off" */
    console.log("te")
    var loader = document.getElementsByClassName("loader");
    setTimeout(function() {
      loader[0].style.display = "none";
    }, 500);
  }
};
</script>

<style scoped>
.loader {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  background: white;
  opacity: 0;
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 1s;
  z-index: 9999;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* Standard syntax */
@keyframes example {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>