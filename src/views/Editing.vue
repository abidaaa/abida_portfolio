<template>
    <div class="body">
        <h1>Coming Soon !</h1>
    </div>    
</template>

<script>
export default {
    name: "Editing"
}
</script>

<style scoped>
html {
    height: 100%;
    width: 100%;
}
.body{
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.body h1{
    font-size: 10vw;
}
@media only screen and (max-width: 600px) {
  .body {
    height: 50vh;
  }
}
</style>