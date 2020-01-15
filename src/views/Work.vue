<template>
  <div id="Home">
    <div class="projects-title">
      <h1 class="p-text">Projects</h1>
    </div>
    <div class="projects-wrapper">
      <div class="project" v-for="todo in todos" v-bind:key="todo.id" :style="todo.bg">
        <div class="wrappper">
          <a class="url" target="_blank" :href="todo.url">
            <div class="wrap-info">
              <img class="image-project" :src="todo.image" :alt="todo.title">
              <h3 class="title-project" :style="todo.text">{{todo.title}}</h3>
              <p class="summary" :style="todo.text">{{todo.summary}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Layout/Footer';

export default {
  name: 'Work',
  components: {
    Footer,
  },
    data () {
    return {
      todos: [
          {
            id : 0,
            image: "./project_images/fdf.png",
            title: "FDF",
            bg: "background: white",
            text: "color: black",
            summary: "This project is about creating a simplified 3D graphic representation of a relief landscape.",
            url: "https://github.com/abidaaa/fdf" 
          },
          {
            id : 1,
            image: './project_images/fractol.png',
            title: "Fract'ol",
            bg: "background: black",
            text: "color: white",
            summary: "This project is meant to create graphically beautiful fractals.",
            url: "https://github.com/abidaaa/fract-ol" 
          },
          {
            id : 2,
            image: './project_images/wolf3d.png',
            title: "Wolf3D",
            bg: "background: black",
            text: "color: white",
            summary: "This project is inspired by the world-famous eponymous 90’s game, which was the first FPS ever. It enabled me to explore Ray-casting. My goal was to make a dynamic view inside a maze, in which the player has to find his way.",
            url: "https://github.com/abidaaa/wolf3d" 
          },
          {
            id : 3,
            image: './project_images/rt.png',
            title: "RT",
            bg: "background: white",
            text: "color: black",
            summary: " This project is nothing but a climax of amazing computer-generated images using Raytracing",
            url: "https://github.com/abidaaa/RT" 
          },
      ]
    }
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
    font-family: 'Oswald', Helvetica, Arial, sans-serif;
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
.projects-title {
  margin: 6vw;
}
.p-text {
  text-align: center;
  font-size: 12vw;
  font-weight: 100;
  font-family: 'Kanit'
}
.projects-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto !important;
}
.wrap-info {
  text-align: center;
  width: 100%;
  cursor: pointer;
}
.wrappper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project {
  width: 100%;
  height: 25vw;
}
.image-project {
  width: 8vw;
}
.title-project {
  font-size: 2vw;
}
.summary {
  opacity: 0;
  font-size: 1.5vw;
}
.wrap-info:hover p{
  opacity: 1;
  -webkit-transition: opacity 0.5s; /* For Safari 3.1 to 6.0 */
  transition: opacity 0.5s;
}
.url:hover {
  text-decoration: none;
}
@media screen and (min-width: 1250px) {
  .projects-title {
  margin: 80px;
  }
  .p-text {
    font-size: 150px;
  }
  .project {
  height: 20vw;
  }
}
@media only screen and (max-width: 600px) {
  .projects-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: auto;
    margin: 0 auto !important;
    border: 1px red
  }

  .project {
  height: 40vw;
  }
  .image-project {
    width: 15vw;
  }
  .title-project {
    font-size: 4vw;
  }
  .summary {
    font-size: 3vw;
    opacity: 1;
  }
  .p-text {
    font-size: 15vw;
  }
}
</style>

