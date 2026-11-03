// Year + menu
document.addEventListener("DOMContentLoaded", () => {
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
const menuToggle = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav");
if (menuToggle && navLinks) {
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}
});

// FILTER - WORKS WITH YOUR HTML
function filterProjects(category, btn){
document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
if(btn) btn.classList.add('active');
document.querySelectorAll('.service-card').forEach(card=>{
card.style.display = (category==='all' || card.dataset.category===category) ? 'block' : 'none';
});
}

// ================= ALL 9 PROJECTS - JUST ADD PICTURES =================
const projectsData = {
'fountainbrook': {
title: "Fountainbrook Estate House",
desc: "4 Bedroom Modern Luxury • 320sqm • Sustainable Design",
client: "Mr Mateza Modisana",
duration: "8 Months",
budget: "R2.8M",
status: "Completed 2022",
images: ["images/fountainbrook-1.jpeg","images/fountainbrook-2.jpeg","images/fountainbrook-3.jpeg","images/fountainbrook-4.jpeg","images/fountainbrook-5.jpeg"],
video: ""
},
'projects': {
title: "Projects completed by Helix360",
desc: "3 Bedroom Family Home • Pool renovations • Painting & Tiling • 2 Shops Renovation • Roadworks • Retaining Walls • Kitchen Remodels",
client: "Various Clients",
duration: "3 years ago from 2026",
budget: "R1.5M - 4.5M",
status: "95% Live",
images: ["images/projects-1.jpeg","images/projects-2.jpeg","images/projects-3.jpeg","images/projects-4.jpeg","images/projects-5.jpeg","images/projects-6.jpeg"],
video: ""
},
'brits': {
title: "Brits CBD Shops",
desc: "2 Shops Renovation • Tiling, Glazing, Shopfront",
client: "Brits CBD",
duration: "2 Months",
budget: "R450k",
status: "Completed 2023",
images: ["images/brits-1.jpeg","images/brits-2.jpeg","images/brits-3.jpeg"],
video: ""
},
'majakaneng': {
title: "Majakaneng Access Road",
desc: "Road + Stormwater + Kerbs • 1.2km • Plant Hire",
client: "Majakaneng Community",
duration: "3 Months",
budget: "R1.1M",
status: "Completed",
images: ["images/majakaneng-1.jpeg","images/majakaneng-2.jpeg","images/majakaneng-3.jpeg"],
video: ""
},
'haartbeespoort': {
title: "Haartbeespoort Kitchen",
desc: "Full Kitchen Remodel • Fitted Units • Granite",
client: "Private - Haartbeespoort",
duration: "3 Weeks",
budget: "R180k",
status: "Completed 2024",
images: ["images/haartbeespoort-1.jpeg","images/haartbeespoort-2.jpeg","images/haartbeespoort-3.jpeg"],
video: ""
},
'seasonsgolf': {
title: "Seasons Golf Estate",
desc: "5 Bedroom Double Storey • Pool • Steel Works",
client: "Seasons Estate",
duration: "10 Months",
budget: "R3.2M",
status: "Completed 2023",
images: ["images/seasonsgolf-1.jpeg","images/seasonsgolf-2.jpeg","images/seasonsgolf-3.jpeg"],
video: ""
},
'bokfontein': {
title: "Bokfontein Bathroom",
desc: "2 Bathrooms + Toilet • Tiling, Plumbing, Waterproofing",
client: "Bokfontein",
duration: "2 Weeks",
budget: "R95k",
status: "On Track",
images: ["images/bokfontein-1.jpeg","images/bokfontein-2.jpeg","images/bokfontein-3.jpeg"],
video: ""
},
'gabion': {
title: "Gabion Retaining Walls",
desc: "150m Gabion + Earthworks • Erosion Control",
client: "Brits - Private",
duration: "1 Month",
budget: "R320k",
status: "Completed",
images: ["images/gabion-1.jpeg","images/gabion-2.jpeg","images/gabion-3.jpeg"],
video: ""
},
'seasons311': {
title: "Seasons Bushveld 311 - Modern Farmhouse",
desc: "Double Storey Luxury • Red Brick + Steel • 450sqm • Stand 311",
client: "Seasons 311 - Private",
duration: "Ongoing - 45% Complete",
budget: "R3.2M",
status: "45% Brickwork Complete",
images: ["images/seasonsbushveld-1.jpeg","images/seasonsbushveld-2.jpeg","images/seasonsbushveld-3.jpeg","images/seasonsbushveld-4.jpeg","images/seasonsbushveld-5.jpeg"],
video: ""
},
// ALIASES FOR OLD NUMBER CLICKS
'1': { title: "Fountainbrook Estate House", desc: "4 Bedroom Modern Luxury • 320sqm", client: "Mr Mateza Modisana", duration: "8 Months", budget: "R2.8M", status: "Completed 2022", images: ["images/fountainbrook-1.jpeg","images/fountainbrook-2.jpeg","images/fountainbrook-3.jpeg","images/fountainbrook-4.jpeg","images/fountainbrook-5.jpeg"], video: "" }
};

// ================= MODAL - FIXED CLOSE + GALLERY =================
let currentGallery = [];
let currentIdx = 0;

function openProject(key, idx = 0){
const k = String(key).toLowerCase();
const data = projectsData[k];
if(!data){ console.log("Not found:", key); return; }

currentGallery = data.images || [data.image];
currentIdx = idx;

document.getElementById('modalTitle').innerText = data.title || '';
document.getElementById('modalDesc').innerText = data.desc || '';
document.getElementById('modalClient').innerText = data.client || '';
document.getElementById('modalDuration').innerText = data.duration || '';
document.getElementById('modalBudget').innerText = data.budget || '';
document.getElementById('modalStatus').innerText = data.status || '';

const img = document.getElementById('modalImage');
img.src = currentGallery[currentIdx];
img.style.display = 'block';
img.onerror = function(){ this.src = 'images/fountainbrook-1.jpeg'; };

const counter = document.getElementById('imageCounter');
if(counter) counter.innerText = (currentIdx+1)+' / '+currentGallery.length;

const video = document.getElementById('modalVideo');
const source = document.getElementById('videoSource');
if(video && source){
if(data.video){ source.src = data.video; video.load(); video.style.display = 'block'; }
else { video.style.display = 'none'; }
}

document.getElementById('projectModal').style.display = 'flex';
document.body.style.overflow = 'hidden';
}

function showImage(i){
if(!currentGallery.length) return;
if(i < 0) i = currentGallery.length-1;
if(i >= currentGallery.length) i = 0;
currentIdx = i;
document.getElementById('modalImage').src = currentGallery[currentIdx];
document.getElementById('imageCounter').innerText = (currentIdx+1)+' / '+currentGallery.length;
}
function nextImage(){ showImage(currentIdx+1); }
function prevImage(){ showImage(currentIdx-1); }
function closeModal(){
const modal = document.getElementById('projectModal');
if(modal) modal.style.display = 'none';
document.body.style.overflow = '';
const v = document.getElementById('modalVideo');
if(v) v.pause();
}

document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
document.addEventListener('click', e=>{
const modal = document.getElementById('projectModal');
if(e.target === modal) closeModal();
});

// Mobile menu
function toggleMenu(){
document.querySelector('.nav').classList.toggle('active');
}

// Gallery system for all tabs
const galleries = {
residential: ["images/residential-1.jpeg","images/residential-1.jpeg","images/residential-1.jpeg"],
plumbing: ["images/plumbing-1.jpeg"],
renovations: ["images/renovations-1.jpeg"],
design: ["images/design-1.jpg"],
civil: ["images/civil-1.jpg"],
finishing: ["images/finishing-1.jpeg"]
};

function openGallery(type){
const modal = document.getElementById('galleryModal');
const mainImg = document.getElementById('galleryMainImg');
const title = document.getElementById('galleryTitle');
const thumbs = document.getElementById('galleryThumbs');

if(!galleries[type]) return;
mainImg.src = galleries[type][0];
title.textContent = type.toUpperCase() + " - Helix 360 Work";
thumbs.innerHTML = galleries[type].map(src => `<img src="${src}" onclick="document.getElementById('galleryMainImg').src='${src}'" style="width:80px;height:60px;object-fit:cover;border-radius:6px;cursor:pointer;margin:4px">`).join('');
modal.style.display = 'flex';
}
function closeGallery(){
document.getElementById('galleryModal').style.display = 'none';
}
document.getElementById('year').textContent = new Date().getFullYear();