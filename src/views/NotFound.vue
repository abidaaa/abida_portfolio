<template>
    <div class="body">
        <div>
            <h1>404</h1>
            <h1 class="nfound">NOT FOUND</h1>
        </div>
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
    font-family: 'Kanit';
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.body h1{
    font-size: 10vw;
}
.nfound{
    font-weight: 100;
}
@media only screen and (max-width: 600px) {
  .body {
    height: 50vh;
  }
}
</style>