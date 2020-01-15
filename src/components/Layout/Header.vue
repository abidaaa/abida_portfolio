<template>
    <header class="header">
        <div class="navb">
            <router-link to="/work" class="work link">WORK</router-link>
            <router-link to="/editing" class="editing link">EDITING</router-link>
            <router-link to="/" class="logo-link"><img class="logo" src="../../../images/logo.png" alt="logo"></router-link>
            <router-link to="/about" class="about link">ABOUT ME</router-link>
            <router-link to="/contact" class="contact link">CONTACT</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.header {
    background: white;
    text-align: center;
    padding: 20px;
}
.header a{
    color: black;
    margin: 20px;
    letter-spacing: 3px;
    text-decoration: none;
}
.logo {
    width: 65px;
    position: relative;
    bottom: 20px;
    border: 2px solid black;
    border-radius: 50%;
    -webkit-transition: border 0.2s; /* For Safari 3.1 to 6.0 */
    transition: border 0.2s;
}
.navb {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template: "work editing logo about contact"
}
.logo-link {
    grid-area: logo;
}
.work {
    grid-area: work;
}
.editing {
    grid-area: editing;
}
.about {
    grid-area: about;
}
.contact {
    grid-area: contact;
}
.header .link:hover{
    border-bottom: 3px black solid;
    -webkit-transition: border-bottom 0.2s; /* For Safari 3.1 to 6.0 */
    transition: border-bottom 0.2s;
}
.logo:hover {
    border: 4px solid black;
    border-radius: 50%;
}
@media only screen and (max-width: 600px) {
    .navb {
        grid-template: "logo logo"
                        "work editing"
                        "about contact";
    }
    .header .link:hover{
        border-bottom: 2px black solid;
    }
}
</style>