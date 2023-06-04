const projectArr = [
  {
    id: 0,
    title: 'Kisumu County Government',
    details: ['vOLUNTEER ', 'GIS Analyst', 2019-2020],
    image: 'img/tonic1.svg',
    desktopImage: 'img/tonic1.svg',
    description: 'I worked on numerous initiatives as a volunteer in the Kisumu County government`s GIS division. I mapped the county`s gas stations and gathered information on the Sondu and Katito markets for land-use planning. In addition, I reviewed the GIS draft evaluation roll for Kisumu County and took part in labor market planning. Additionally, I aided in the analysis of climatic and weather changes and worked on geographical analytic projects with Transparency International. In addition, I helped UN-Habitat map socioeconomic information in Kisumu city`s informal settlements and collected data and made maps of the handwashing stations that are already present there for COVID-19 mitigation.',
    technologies: ['html', 'css', 'javaScript'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 1,
    title: 'Uhai Lake Forum ',
    details: ['EMPLOYMENT', 'ASS SPATIAL ANALYST', 2021],
    image: 'img/multistories1.svg',
    desktopImage: 'img/multistories1.svg',
    description: 'I have successfully created geodatabases for Kobo`s humanitarian server and desktop applications as a seasoned GIS professional. The SEACAP initiative, which focuses on access to sustainable energy and climate action, also relies heavily on the analysis and presentation of spatial data, and I have played a critical part in both of these endeavors. I have been able to contribute to these initiatives successfully according to my knowledge of geodatabase design and spatial data analysis, demonstrating my aptitude for using GIS technology for data management and visualization in support of important projects.',
    technologies: ['html', 'css', 'javaScript'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 2,
    title: 'GEOPLAN Consultant',
    details: ['EMPLOYMENT', 'Data collection Officer', 2021],
    image: 'img/tonic2.svg',
    desktopImage: 'img/tonic2.svg',
    description: 'I had the chance to contribute to the Oyugis Local Land Use Development Plan (LPLUDP) as a skilled data analyst and gatherer. Editing cadastral files and carrying out data collection tasks were among my duties. I was a key contributor to the creation and execution of the land use plan by guaranteeing accurate and current information. I helped the project get off the ground successfully by paying close attention to the little things and being dedicated to excellence.',
    technologies: ['html', 'css', 'javaScript'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 3,
    title: 'GOOGLE PLUS CODE',
    details: ['EMPLOYMENT', 'Supervisopr', 2022],
    image: 'img/multistories2.svg',
    desktopImage: 'img/multistories2.svg',
    description: 'From November 2021 to December 2022, I had the duty of educating enumerators and managing the digital addressing procedures for Kisumu County households as a Google Plus Code Trainer and Supervisor. Through this position, I was able to make sure that the addressing procedures were followed precisely and effectively as well as that the training was thorough and effective. I significantly improved the county`s digital addressing system, which helped to make it more accessible and organized for the citizens.',
    technologies: ['html', 'css', 'javaScript'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 4,
    title: 'Cyglobe Consultant',
    details: ['EMPLOYMENT', 'Data collection Officer', 2023],
    image: 'img/multistories2.svg',
    desktopImage: 'img/multistories2.svg',
    description: 'I engaged on Makindu Town Planning in April 2023, where I gathered and analyzed data. As part of my job, I had to acquire pertinent data and analyze it to help with town planning. Through this project, I was able to put my data analytic talents to use and help Makindu Town plan in an efficient way.',
    technologies: ['html', 'css', 'javaScript'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
];

const popup = document.querySelector('.popup_menu');
const worksSection = document.querySelector('.work');

let html = '';

projectArr.forEach((project) => {
  html += `
    <div>
			<div class="img"><img src="${project.image}" alt="Multistories symbol"></div>
			<div class="content_work">
				<h2>${project.title}</h2>
				<ul class="work-exp">
					<li>${project.details[0]}</li>
					<li><img src="img/circle.svg" alt="Dot symbol"></li>
					<li>${project.details[1]}</li>
					<li><img src="img/circle.svg" alt="Dot Symbol"></li>
					<li>${project.details[2]}</li>
				</ul>
				<p>${project.description}</p>
				<ul class="lang">
					<li><a href="">${project.technologies[0]}</a></li>
					<li><a href="">${project.technologies[1]}</a></li>
					<li><a href="">${project.technologies[2]}</a></li>
				</ul>

				<button type="button" data-modal="modal" class="btn project-buttons">See Project</button>
			</div>
		</div>`;
});

worksSection.innerHTML = html;

const projectButtons = document.querySelectorAll('.project-buttons');

for (let index = 0; index < projectButtons.length; index++) {
  projectButtons[index].addEventListener('click', () => {
    const title = popup.querySelector('.popup-title');
    const img = popup.querySelector('img');
    title.textContent = projectArr[index].title;

    img.src = projectArr[index].image;

    popup.classList.remove('d-none');
  });
}

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
  popup.classList.add('d-none');
});