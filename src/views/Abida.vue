<template>
    <div>
        <div class="center-img">
            <div class="img-text">
                <img class="me" src="./../../images/me.jpg" alt="Abida">
                <h1 class="text text1">H<span class="white">ERE'</span>S</h1>
                <h1 class="text text2">SO<span class="white">ME STU</span>FF</h1>
                <h1 class="text text3">AB<span class="white">OUT</span> ME</h1>
            </div>
        </div>
        <div class="intro">
            <h1>Hi, I’m Abdesslame Abouibrahim, a Junior Developer currently studying at 1337 Khouribga</h1>
        </div>
        <div class="info-wrap">
            <div class="informations" v-for="todo in todos" v-bind:key="todo.id">
                <div class="title-line">
                    <div class="line line-right"></div><h3 class="title">{{todo.title}}</h3><div class="line line-left"></div>
                </div>
                <p class="info">{{todo.desc}}</p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Layout/Footer';

export default {
    name: "About",
    components: {
    Footer,
    },
    data () {
    return {
      todos: [
          {
            id : 0,
            title: 'WHO I AM',
            desc: "I am a 22 years old student from Morocco, born in a small city called Settat, I study computer science at “1337 Khouribga”. I love video games, and I adore cinematography, these last two are the only hobbies I practice the most."
          },
          {
            id : 1,
            title: 'WHAT I DO',
            desc: "Most of the projects I have done consist of creating the basics of game engines like “Ray tracing”, “Ray casting”, “3D Wireframes”, Physics and rendering ... etc, I have created as well some websites and crud software applications before."
          },
          {
            id : 2,
            title: 'EDUCATION',
            desc: "I’v gotten my baccalaureate degree, and then I did 2 years in “ISTA” studying IT DEV, and took off one year and worked freelance in video editing and now I belong to the best school in Morocco studying computer science at 1337."
          }
      ]
    }
  },
}
</script>

<style scoped>

.center-img {
    display: flex;
    align-items: center;
    justify-content: center;
}
.white {
    color: white;
}
.img-text{
    text-align: center;
    position: relative;
    width: 100%;
    font-family: 'Kanit';
    display: flex;
    align-items: center;
    justify-content: center;
}
.me{
    max-width: 500px;
    width: 40vw;
    border-radius: 50%;
}
.text {
    position: absolute;
    letter-spacing: 3vw;
    font-size: 7.5vw;
    font-weight: 100;
}
.text1{
    bottom: 29vw;
}
.text2{
    bottom: 15vw;
}
.text3{
    bottom: 2vw;
}
.intro {
    max-width: 55vw;
    margin: 7vw auto;
    text-align: center;
}
.intro h1 {
    font-weight: 300;
    font-size: 4vw;
}
.title-line{
    position: relative;
    width: 23vw;
    margin: 0 auto;
}
.info-wrap{
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
}
.informations {
    position: relative;
    text-align: center;
    margin-top: 2vw;
    margin-bottom: 5vw;
    margin-left: 4vw;
    margin-right: 4vw;
}
.title{
    font-size: 3vw;
    font-weight: 400;
    letter-spacing: 0.2vw;
}
.info {
    font-size: 2.1vw;
    width: 20vw;
    font-weight: 100;
    margin: 0 auto;
}
.line{
    min-height: 1px;
    background: black;
    width: 2.1vw;
    height: 0.2vw;
}
.line-right {
    position: absolute;
    top: 2vw;
    right: 0;
}
.line-left {
    position: absolute;
    top: 2vw;
}
@media screen and (min-width: 1250px) {
    .text {
        font-size: 95px;
        width: 1000px;
        letter-spacing: 35px;
    }
    .text1{
        bottom: 351px;
    }
    .text2{
        bottom: 180px;
    }
    .text3{
        bottom: 20px;
    }
    .intro {
        margin: 70px auto;
        font-size: 50px;
    }
    .intro h1{
        font-size: 50px;
        max-width: 600px;
        margin: 50px auto;
    }
    .info {
        font-size: 26px;
        max-width: 260px;
    }
    .title {
        font-size: 35px;
    }
    .informations {
        max-width: 300px;
        margin-top: 20px;
        margin-bottom: 50px;
    }
    .title-line{
        width: 250px;
    } 
    .line {
        background: black;
        width: 30px;
        height: 2px;
    }
    .line-right {
        top: 22px;
    }
    .line-left {
        top: 22px;
    }
    .title{
    letter-spacing: 3px;
    }
}
@media only screen and (max-width: 800px) {
  .info-wrap{
        display: grid;
        grid-template-columns: auto;
    }
    .title {
        font-size: 6vw; 
    }
    .info {
        font-size: 4vw;
        width: 60vw;
        min-width: 200px;
        font-weight: 300px;
    }
    .line{
        min-height: 2px;
        background: black;
        width: 5vw;
        height: 0.2vw;
    }
    .line-right {
        top: 3.5vw;
    }
    .line-left {
        top: 3.5vw;
    }
    .title-line{
        position: relative;
        width: 40vw;
        margin: 0 auto;
    }
    .intro {
        max-width: 70vw;
    }
    .intro h1 {
        font-size: 5.3vw;
    }
}

@media only screen and (max-width: 600px) {
    .text {
        font-weight: 200;
    }
}

</style>