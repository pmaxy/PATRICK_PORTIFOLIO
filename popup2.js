const projectArr = [
  {
    id: 0,
    title: 'Equity Bank Limited',
    details: ['EMPLOYMENT', 'Devops Engineer', "2024-Present"],
    image: 'img/equitybank.jpg',
    desktopImage: 'img/equitybank.jpg',
    description: 'Using Azure DevOps, I created and managed CI/CD pipelines that automated application builds, testing, and deployments. Developed scalable microservices and APIs in Java, allowing for easy integration of various data sources.Containerized apps were deployed using Docker and Kubernetes to ensure high availability and scalability across several environments.Infrastructure as Code (IaC) was implemented using Terraform, which streamlined resource provisioning. Pipelines are secured with vulnerability screening and access controls to ensure compliance with corporate requirements.',
    technologies: ['Azure Devops', 'Docker', 'Kubernetes'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 1,
    title: 'E&M Technologies',
    details: ['EMPLOYMENT', 'Software Developer', 2023-2024],
    image: 'img/em.webp',
    desktopImage: 'img/em.webp',
    description: 'Developed strong backend systems utilizing Java and Spring Boot to support a wide range of business applications.Created data-driven workflows to manage complicated processing tasks, using relational databases and cloud platforms.Collaboration with cross-functional teams improved system performance and scalability.',
    technologies: ['Angular', 'Spring Boot', 'React'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 2,
    title: 'GOOGLE PLUS CODE',
    details: ['EMPLOYMENT', 'Supervisopr', 2022],
    image: 'img/pluscode.png',
    desktopImage: 'img/pluscode.png',
    description: 'From November 2021 to December 2022, I had the duty of educating enumerators and managing the digital addressing procedures for Kisumu County households as a Google Plus Code Trainer and Supervisor. Through this position, I was able to make sure that the addressing procedures were followed precisely and effectively as well as that the training was thorough and effective. I significantly improved the county`s digital addressing system, which helped to make it more accessible and organized for the citizens.',
    technologies: ['Arcpy', 'Python', 'ArcPro'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  }, 
  {
    id: 3,
    title: 'Uhai Lake Forum ',
    details: ['EMPLOYMENT', 'ASS SPATIAL ANALYST', 2021],
    image: 'img/uhai.jpg',
    desktopImage: 'img/uhai.jpg',
    description: 'I have successfully created geodatabases for Kobo`s humanitarian server and desktop applications as a seasoned GIS professional. The SEACAP initiative, which focuses on access to sustainable energy and climate action, also relies heavily on the analysis and presentation of spatial data, and I have played a critical part in both of these endeavors. I have been able to contribute to these initiatives successfully according to my knowledge of geodatabase design and spatial data analysis, demonstrating my aptitude for using GIS technology for data management and visualization in support of important projects.',
    technologies: ['Spss', 'ArcPro', 'Excel'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },


  {
    id: 4,
    title: 'Cyglobe Consultant',
    details: ['EMPLOYMENT', 'Data collection Officer', 2023],
    image: 'img/cyglobe.jpg',
    desktopImage: 'img/cyglobe.jpg',
    description: 'I engaged on Makindu Town Planning in April 2023, where I gathered and analyzed data. As part of my job, I had to acquire pertinent data and analyze it to help with town planning. Through this project, I was able to put my data analytic talents to use and help Makindu Town plan in an efficient way.',
    technologies: ['Autocad', 'Archicad', 'Qgis'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 5,
    title: 'GEOPLAN Consultant',
    details: ['EMPLOYMENT', 'Data collection Officer', 2021],
    image: 'img/GeoPlan_Logo.png',
    desktopImage: 'img/GeoPlan_Logo.png',
    description: 'I had the chance to contribute to the Oyugis Local Land Use Development Plan (LPLUDP) as a skilled data analyst and gatherer. Editing cadastral files and carrying out data collection tasks were among my duties. I was a key contributor to the creation and execution of the land use plan by guaranteeing accurate and current information. I helped the project get off the ground successfully by paying close attention to the little things and being dedicated to excellence.',
    technologies: ['Qgis', 'Arcmap', 'ArcPro'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 6,
    title: 'Kisumu County Government',
    details: ['vOLUNTEER ', 'GIS Analyst', 2019-2020],
    image: 'img/Kisumu county beach.jpg',
    desktopImage: 'img/Kisumu county beach.jpg',
    description: 'I worked on numerous initiatives as a volunteer in the Kisumu County government`s GIS division. I mapped the county`s gas stations and gathered information on the Sondu and Katito markets for land-use planning. In addition, I reviewed the GIS draft evaluation roll for Kisumu County and took part in labor market planning. Additionally, I aided in the analysis of climatic and weather changes and worked on geographical analytic projects with Transparency International. In addition, I helped UN-Habitat map socioeconomic information in Kisumu city`s informal settlements and collected data and made maps of the handwashing stations that are already present there for COVID-19 mitigation.',
    technologies: ['Qgis', 'Arcpy', 'Python'],
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

var map = L.map('map',{
  center:[-1.155057636939555, 36.913954345335874],
  zoom:18,
  layers: USGS_USImagery
});
  

var osm=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '@openStreetMap',
  maxZoom: 18,
});

var darkMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 21,
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

var USGS_USImagery = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});


// Add a marker to the map
L.marker([-1.155057636939555, 36.913954345335874]).addTo(map)
 .bindPopup('A sample marker.');

 var marker=L.marker([-1.155057636939555, 36.913954345335874]).addTo(map);
 marker.bindPopup('<b>Patrick Wanjiru the Developer<b/>')

 
var baseMaps={
  'OpenStreetMap':osm,
  'DarkMap':darkMap,
  'EsriImagery':Esri_WorldImagery,
  'USGSImagery':USGS_USImagery,
  'OpenTopoMap':OpenTopoMap
}

var overLayMaps={
  'Location':marker,
}

L.control.layers(baseMaps, overLayMaps, {collapsed: false}).addTo(map);


