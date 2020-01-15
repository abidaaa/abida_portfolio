<template>
    <div class="wrapper">
        <div class="push"></div>
        <footer class="footer">
            <router-link class="button test" to="/contact">CONTACT ME</router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

.footer {
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 9vh;
}
.footer a{
    padding: 6px 15px;
    background: black;
    border: 1px white solid;
    color: white;
}
.footer a:hover{
    text-decoration: none;
    background: white;
    color: black;
    -webkit-transition: all 0.3s; /* For Safari 3.1 to 6.0 */
    transition: all 0.3s;
}

</style>