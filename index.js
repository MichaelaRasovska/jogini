'use strict';

console.log('funguju!');
//Header
const appElm = document.querySelector('#app');

const headerProps = {
  title: 'Jogíni',
  links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
};

const Header = (props) => {
  return `
  <header>
  <h1 class="site-title">${props.title}</h1>
  <nav>
          <a href="#">${props.links[0]}</a>
          <a href="#">${props.links[1]}</a>
          <a href="#">${props.links[2]}</a>
          <a href="#">${props.links[3]}</a>
          <a href="#">${props.links[4]}</a>
    </nav>
    </header>
    `;
};

appElm.innerHTML = Header(headerProps);

//Intro
const introProps = {
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
};

const Intro = (props) => {
  return ` 
  <div class="intro">
  <h2>${props.heading}</h2>
  <p>${props.text}</p>
  </div>`;
};

appElm.innerHTML += Intro(introProps);

//Pose
const poseProps = {
  src: 'img/yoga-pose.jpg',
};

const Pose = (props) => {
  return `<img class="pose" src=${props.src} />`;
};

appElm.innerHTML += Pose(poseProps);
