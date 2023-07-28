const hamburger = document.querySelector('.btn');
const navMenu = document.querySelector('.menu-sec');
// const worksSection = document.getElementById('card-1');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.menu-sec').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projects = [
  {
    image: 'image/Snapshoot Portfolio7.png',
    name: 'Tonic',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description:
     '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'image/Snapshoot Portfolio4.png',
    name: 'Tonic',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description:
     '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'image/Snapshoot Portfolio.png',
    name: 'Tonic',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description:
     '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'image/Snapshoot Portfolio2.png',
    name: 'Tonic',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description:
     '  A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
];

let template = '';
//  PROJECT ITEM
projects.forEach((project, index) => {
  // ADDING LOOP IN DETAILS PART
  let details = '';
  project.details.forEach((detail) => {
    details += `<li>${detail}</li>`;
  });
  // ANDDING LOOP IN TECHNOLOGIES
  let technologies = '';
  project.technologies.forEach((technology) => {
    technologies += `<li>${technology}</li>`;
  });
  // WRITING HTML
  const code = `
  <div class="projects container">
  <div class="overflow">
          <img class="project-img" src="${project.image}" alt="" />
        </div>        
        <div class="project-detail">
          <h3 class="tertiary-heading">${project.name}</h3>
          <ul class="project-details">
            ${details}
          </ul>
          <p class="project-description">
            ${project.description}
          </p>
          <ul class="project-lang">
            ${technologies}
          </ul>
          <button class="btn" id="see-project-${index}">See project</button>
        </div>
        </div>
  `;
  template += code;
});
projects.innerHTML = template;