<template>
    <div class="container">
        <div class="center-text">
            <h1 class="title">Get in touch</h1>
            <div class="line"></div>
            <h4><a class="email" href="mailto:aabouibr@student.1337.ma">abdesslame.abouibrahim@gmail.com</a></h4>
            <div class="social-media nav justify-content-center">
                <li class="nav-item"><a href="https://www.facebook.com/Abdo.D.Abida" target="blank" class="nav-link link"><img src="./../../images/fb.jpg" alt="facebook"></a></li>   
                <li class="nav-item"><a href="https://twitter.com/_Abidaa_" target="blank" class="nav-link link"><img src="./../../images/twitter.jpg" alt="twitter"></a></li>
                <li class="nav-item"><a href="https://github.com/abidaaa" target="blank" class="nav-link link"><img src="./../../images/github.jpg" alt="github"></a></li>
                <li class="nav-item"><a href="https://linkedin.com/in/abdesslame-abouibrahim-9882aa178" target="blank" class="nav-link link"><img src="./../../images/linkedin.jpg" alt="linkedin"></a></li>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Contact",
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
}
.center-text {
    text-align: center; 
}
.line {
    background: black;
    height: 35px;
    width: 1px;
    margin: 10px auto;
}
.title{
    font-weight: 300;
    font-size: 50px;
}
.email {
    color: black;
    font-weight: 300;
}
.email:hover {
    text-decoration: none;
}
.social-media {
    margin-top: 20px;
}
.social-media a{
    padding: 5px;
}
.social-media img{
    width: 40px;
    border: 1px black solid;
    border-radius: 50%;
    margin: 0;
}
.social-media img:hover{
    border: 2px black solid;
    -webkit-transition: border 0.1s; /* For Safari 3.1 to 6.0 */
    transition: border 0.1s;
}
@media only screen and (max-width: 600px) {
  .container {
    height: 50vh;
  }
}
</style>