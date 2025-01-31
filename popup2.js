const projectArr = [
  {
    id: 0,
    title: 'Equity Bank Limited',
    details: ['EMPLOYMENT', 'Devops Engineer', "2024-Present"],
    image: 'img/equitybank.jpg',
    desktopImage: 'img/equitybank.jpg',
    description: 'Using Azure DevOps, I built and managed CI/CD pipelines to automate application builds, testing, and deployments. I developed scalable microservices and APIs in Java, enabling seamless data integration. Containerized applications were deployed with Docker and Kubernetes for high availability and scalability. I implemented Infrastructure as Code (IaC) using Terraform to streamline resource provisioning. Security measures, including vulnerability scanning and access controls, ensured compliance with corporate standards.',
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
    description: 'Developed robust backend and frontend systems using Java, TypeScript, Vue.js, React, Angular, and Spring Boot to support diverse business applications. Designed data-driven workflows to handle complex processing tasks, leveraging relational databases and cloud platforms. Collaborated with cross-functional teams to enhance system performance and scalability.',
    technologies: ['Angular', 'Spring Boot', 'React'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 2,
    title: 'GOOGLE PLUS CODE',
    details: ['EMPLOYMENT', 'Supervisopr', 2022-2023],
    image: 'img/pluscode.png',
    desktopImage: 'img/pluscode.png',
    description: 'From November 2021 to june 2023, I had the duty of educating enumerators and managing the digital addressing procedures for Kisumu County households as a Google Plus Code Trainer and Supervisor. Through this position, I was able to make sure that the addressing procedures were followed precisely and effectively as well as that the training was thorough and effective. I significantly improved the county`s digital addressing system, which helped to make it more accessible and organized for the citizens.',
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
    description: 'As a GIS professional, I successfully created geodatabases for Kobo’s humanitarian server and desktop applications. I also played a key role in the SEACAP initiative, which focuses on sustainable energy access and climate action, by analyzing and presenting spatial data. My expertise in geodatabase design and spatial data analysis has enabled me to contribute effectively to these initiatives, demonstrating my ability to use GIS technology for data management and visualization in critical projects.',
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
    description: 'In April 2023, I participated in the Makindu Town Planning project, where I was responsible for data collection and analysis to support urban planning efforts. My role involved gathering relevant spatial and statistical data, analyzing trends, and providing insights to enhance the planning process. This experience allowed me to apply my data analytics skills and contribute to the efficient development of Makindu Town.',
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
    description: 'I contributed to the Oyugis Local Land Use Development Plan (LPLUDP) as a data analyst and collector. My responsibilities included editing cadastral files and conducting data collection to ensure accuracy and up-to-date information. I played a key role in the development and implementation of the land use plan, leveraging attention to detail and a commitment to excellence to support the projects successful launch.',
    technologies: ['Qgis', 'Arcmap', 'ArcPro'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },
  {
    id: 6,
    title: 'Kisumu County Government:Planning and Climate Department',
    details: ['vOLUNTEER ', 'GIS Analy', 2020],
    image: 'img/climate2.jpg',
    desktopImage: 'img/climate1.jpg',
    description: 'Assistant Spatial Analyst for Kisumu Weather and Climate Change Analysis. Responsible for map production of Temperature (LST), Rainfall, Land Use, Land Cover, NDMI, NDVI, and NDBI. Conducted data collection on existing handwashing stations using Kobo Collect to assess proposed COVID-19 mitigation measures and mapped informal settlements. Additionally, mapped socio-economic data on existing facilities in Kisumus informal settlements for COVID-19 mitigation.',
    technologies: ['Qgis', 'Arcpy', 'Python'],
    live: 'https://pmaxy.github.io/setup-and-mobile-first/',
    source: 'https://github.com/pmaxy/setup-and-mobile-first',
  },

  {
    id: 7,
    title: 'Kisumu County Government:GIS Department',
    details: ['GIS ANALYST AND SOFTWARE DEVELOPER ', 'GIS Analyst', 2019],
    image: 'img/Kisumu county beach.jpg',
    desktopImage: 'img/Kisumu county beach.jpg',
    description: 'As a volunteer in the Kisumu County Governments GIS division, I contributed to several initiatives, including mapping gas stations and collecting data for land-use planning in Sondu and Katito markets. I also reviewed the GIS draft evaluation roll for Kisumu County and participated in labor market planning, ensuring accurate spatial data for informed decision-making.',
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
    <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1000" >
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


