const cardSection = document.getElementById('portfolio');
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    document.getElementById('mySidebar').classList.remove('sidebar');
    document.getElementById('mySidebar').classList.add('menu-lists');
  }
});

function openNav() {
  document.getElementById('mySidebar').classList.add('sidebar');
  document.getElementById('mySidebar').classList.remove('menu-lists');
}

function closeNav() {
  document.getElementById('mySidebar').classList.remove('sidebar');
  document.getElementById('mySidebar').classList.add('menu-lists');
}
// openNav();
// closeNav();

const projects = [
  {
    id: 'Project1',
    title: 'Tonic',
    title1: 'Tonic',
    company: 'CANOPY',
    company1: 'CANOPY',
    icon: './Image/Counter.png',
    specialization: 'Back End Dev',
    specialization1: 'Back End Dev',
    year: '2015',
    year1: '2015',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rials',
      tech2: 'css',
      tech3: 'javaScript',
    },
    details: 'See project',
    imageMobile: './Image/SnapshootPortfolio1.png',
    imageDesktop: './Image/Nature.png',
    live: 'https://alishahsafdari.github.io/Protfolio/',
    source: 'https://github.com/AliShahSafdari/Protfolio',
  },
  {
    id: 'Project2',
    title: 'Multi-Post',
    title1: 'Multi-Post',
    company: 'CANOPY',
    company1: 'FACEBOOK',
    icon: './Image/Counter.png',
    specialization: 'B2ack End Dev',
    specialization1: 'Full Stack Dev',
    year: '2015',
    year1: '2015',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rials',
      tech2: 'css',
      tech3: 'javaScript',
    },
    details: 'See project',
    imageMobile: './Image/SnapshootPortfolio(3).png',
    imageDesktop: './Image/desktop1.png',
    live: 'https://alishahsafdari.github.io/Protfolio/',
    source: 'https://github.com/AliShahSafdari/Protfolio',
  },
  {
    id: 'Project3',
    title: 'Tonic',
    title1: 'Facebook 360',
    company: 'CANOPY',
    company1: 'FACEBOOK 360',
    icon: './Image/Counter.png',
    specialization: 'B2ack End Dev',
    specialization1: 'Full Stack Dev',
    year: '2015',
    year1: '2015',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rials',
      tech2: 'css',
      tech3: 'javaScript',
    },
    details: 'See project',
    imageMobile: './Image/Snapshoot Portfolio (2).png',
    imageDesktop: './Image/desktop2.png',
    live: 'https://alishahsafdari.github.io/Protfolio/',
    source: 'https://github.com/AliShahSafdari/Protfolio',
  },
  {
    id: 'Project4',
    title: 'Multi-Post<br>Stories',
    title1: 'Uber Navigation',
    company: 'CANOPY',
    company1: 'Uber',
    icon: './Image/Counter.png',
    specialization: 'Back End Dev',
    specialization1: 'Lead Developer',
    year: '2015',
    year1: '2018',
    description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      tech1: 'html',
      techE: 'Ruby on rials',
      tech2: 'css',
      tech3: 'javaScript',
    },
    details: 'See project',
    imageMobile: './Image/SnapshootPortfolio(5).png',
    imageDesktop: './Image/desktop3.png',
    live: 'https://alishahsafdari.github.io/Protfolio/',
    source: 'https://github.com/AliShahSafdari/Protfolio',
  },
];

projects.forEach((project) => {
  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = `<div class="works-container fist-works-container">
   <img src="${project.imageMobile}" alt="Tonic-image" class="works-container-image must-ignor1">
   <img src="${project.imageDesktop}" alt="Nature-image" class="works-container-image must-ignor2">

   <div class="wapper-90">
       <div class="primarytext1">
           <h2 class="primarytext-title must-ignor1 ">${project.title}</h2>
           <h2 class="primarytext-title must-ignor2 ">${project.title1}</h2>
           <div class="frame">
               <span class="canopy must-ignor1">${project.company}</span>
               <span class="canopy must-ignor2">${project.company1}</span>
               <img src="${project.icon}" alt="circle-icon">
               <span class="num-text must-ignor1">${project.specialization}</span>
               <span class="num-text must-ignor2">${project.specialization1}</span>
               <img src="${project.icon}" alt="circle-icon">
               <span class="num-text must-ignor1 ">${project.year}</span>
               <span class="num-text must-ignor2">${project.year}</span>

           </div>
       </div>

       <p class="works-container-text">${project.description}</p>

       <ul class="primarytext3">
           <li class="lang">${project.technologies.tech1}</li>
           <li class="lang must-ignor2">${project.technologies.techE}</li>
           <li class="lang">${project.technologies.tech2}</li>
           <li class="lang JavaScript">${project.technologies.tech3}</li>
       </ul>

       <div class="primarytext4">
           <button class="project" id =${project.id}>${project.details}</button>
       </div>
   </div>
</div>`;
  cardSection.append(cardDiv);
});

const seeproject = document.querySelectorAll('.project');
const overlay = document.getElementById('overCover');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');
seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = projects.find((p) => p.id === id);
  popup.innerHTML = `
  <div class="titles">
   <div class="tile">
  <h2 class="primarytext-title must-ignor1">${pop.title}</h2>
  <h2 class="primarytext-title must-ignor2">${pop.title1}</h2>
   <button class="close">&times;</button>
    </div>
    <ul class="social-icons10">
    <li class="cano must-ignor1">${pop.company}</li>
    <li class="cano must-ignor2">${pop.company1}</li>
    <li class="must-ignor1" ><img src="${pop.icon}" alt="dot">&nbsp; ${pop.specialization}</li>
    <li class="must-ignor2" ><img src="${pop.icon}" alt="dot">&nbsp; ${pop.specialization}</li>
    <li class="must-ignor1" ><img src="${pop.icon}" alt="dot">&nbsp; ${pop.year}</li>
    <li class="must-ignor2" ><img src="${pop.icon}" alt="dot">&nbsp; ${pop.year}</li>
  </ul>
  
  <img src="${pop.imageMobile}" alt="Tonic-image" class="imageMobile must-ignor1">
  <img src="${pop.imageDesktop}" alt="Nature-image" class="imageDesktop must-ignor2">
  <div class="explain">
    <p class="tonic-text">
      ${pop.description1} 
      <br>
      <br>
      <span class="must-ignor2"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</span>
    </p>
    <ul class="primarytext33 techno">
      <li>${pop.technologies.tech1}</li>
      <li>${pop.technologies.tech2}</li>
      <li>${pop.technologies.tech3}</li> 
    </ul>
    <ul class="primarytext34 techno">
    <li class="not">Ruby</li>
    <li class="not">Boostrap</li>  
  </ul

        <hr class="invisable">
        <div class="btns">
          <button type="button" id="live" class="but">See live &nbsp; &nbsp;
            <img src="./Image/live.png" alt="live">
          </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
          <button type="button" id="source" class="but">See source &nbsp; &nbsp;
            <img src="./Image/github.svg" alt="source">
          </button>
        </div>
 </div>`;

  const live = document.getElementById('live');
  const source = document.getElementById('source');

  live.addEventListener('click', () => {
    document.location.href = pop.live;
  });

  source.addEventListener('click', () => {
    document.location.href = pop.source;
  });

  overlay.classList.toggle('active');
  popup.classList.toggle('active');
  over.classList.toggle('active');

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });
}));

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="fullname"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const errorMessage = document.getElementById('error');

form.addEventListener('submit', (event) => {
  const errorMessages = [];
  if (nameInput.value.trim() === '') {
    errorMessages.push('Name field is required');
  } else if (emailInput.value.trim() === '') {
    errorMessages.push('Email field is required');
  } else if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorMessages.push('Email must be in lowercase');
  } else if (messageInput.value.trim() === '') {
    errorMessages.push('Message field is required');
  }
  if (errorMessages.length > 0) {
    event.preventDefault();
    errorMessage.textContent = errorMessages.join('. ');
  } else {
    errorMessage.textContent = '';
  }
});
