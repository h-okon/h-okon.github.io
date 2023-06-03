// Fetch the JSON file and populate the sections with the content
fetch('content.json')
  .then(response => response.json())
  .then(data => {
    const { about, projects, experience } = data;

    // Populate the About Me section
    const aboutSection = document.getElementById('about');
    aboutSection.innerHTML = `
      <img src="${about.profilePicture}" alt="Profile Picture" class="profile-picture">
      <h2>${about.name}</h2>
      <p>${about.jobTitle}</p>
      <hr>
      <p>${about.bio}</p>
      <hr>
    `;

    
    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML = `
      <h2>🛠️ Projects</h2>
      <ul>
        ${projects.map(project => `<li style="margin-right: 2%"><b>${project.title}</b> <br><hr>  ${project.description} <br><br> <a style="color: white" target="_blank" href="${project.link}"> view on GitHub </a></li> <br>`).join('')}
      </ul>
    `;

    // Populate the experience section
    const experienceSection = document.getElementById('experience');
    experienceSection.innerHTML = `
      <h2>💼 Experience</h2>
      <ul>

        ${experience.map(experience => `
        <li class="experience-li">
        <span style="text-align: left;"> ${experience.company} | <b>${experience.title}</b></span>
        <span style="text-align: right;"> ${experience.date} </span>
        </li> <br><hr>`).join('')}
      </ul>
    `;
  })
  .catch(error => console.error('Error fetching JSON:', error));

function toggleSection(sectionId) {
  const sections = document.getElementsByClassName('section');
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id === sectionId) {
      sections[i].classList.add('visible');
    } else {
      sections[i].classList.remove('visible');
    }
  }

  const navBtns = document.getElementsByClassName('nav-btn');
  for (let i = 0; i < navBtns.length; i++) {
    if (navBtns[i].getAttribute('onclick').includes(sectionId)) {
      navBtns[i].classList.add('active');
    } else {
      navBtns[i].classList.remove('active');
    }
  }
}

document.querySelector('.header-name').addEventListener('click', function(e) {
  window.location.href = '/';
}, false);

document.querySelector('.header-profile-picture').addEventListener('click', function(e) {
  window.location.href = '/';
}, false);
