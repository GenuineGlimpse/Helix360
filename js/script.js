// Year + menu - FIXED: single handler, toggles .open only
document.addEventListener("DOMContentLoaded", () => {
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav");
if (menuToggle && navLinks) {
menuToggle.addEventListener("click", (e) => {
e.preventDefault();
e.stopPropagation();
const isOpen = navLinks.classList.toggle("open");
navLinks.classList.toggle("active", isOpen); // keep both in sync
menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
// Close menu when a link is tapped - iOS needs this
navLinks.querySelectorAll("a").forEach(a => {
a.addEventListener("click", () => {
navLinks.classList.remove("open", "active");
menuToggle.setAttribute("aria-expanded", "false");
});
});
// Tap outside closes menu
document.addEventListener("click", (e) => {
if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
navLinks.classList.remove("open", "active");
menuToggle.setAttribute("aria-expanded", "false");
}
});
}

// FIX: Filter buttons bound here, not inline onclick - works on iOS even if 'this' fails
document.querySelectorAll('.filter-btn').forEach(btn => {
btn.addEventListener('click', () => filterProjects(btn.dataset.filter, btn));
});
});

// Keep global for old inline calls
function toggleMenu(){
const nav = document.querySelector('.nav');
const btn = document.querySelector('.hamburger');
if(!nav) return;
const isOpen = nav.classList.toggle('open');
nav.classList.toggle('active', isOpen);
if(btn) btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

// FILTER - same logic as yours
function filterProjects(category, btn){
document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
if(btn) btn.classList.add('active');
document.querySelectorAll('.service-card').forEach(card=>{
card.style.display = (category==='all' || card.dataset.category===category) ? '' : 'none';
});
}

// ================= ALL PROJECTS - your data unchanged =================
const projectsData = {
'fountainbrook': { title: "Fountainbrook Estate House", desc: "4 Bedroom Modern Luxury • 320sqm • Sustainable Design", client: "Mr Mateza Modisana", duration: "8 Months", budget: "R2.8M", status: "Completed 2022", images: ["images/fountainbrook-1.jpeg","images/fountainbrook-2.jpeg","images/fountainbrook-3.jpeg","images/fountainbrook-4.jpeg","images/fountainbrook-5.jpeg"], video: "" },
'projects': { title: "Projects completed by Helix360", desc: "3 Bedroom Family Home • Pool renovations • Painting & Tiling • 2 Shops Renovation • Roadworks • Retaining Walls • Kitchen Remodels", client: "Various Clients", duration: "3 years ago from 2026", budget: "R1.5M - 4.5M", status: "95% Live", images: ["images/projects-1.jpeg","images/projects-2.jpeg","images/projects-3.jpeg","images/projects-4.jpeg","images/projects-5.jpeg","images/projects-6.jpeg"], video: "" },
'brits': { title: "Brits CBD Shops", desc: "2 Shops Renovation • Tiling, Glazing, Shopfront", client: "Brits CBD", duration: "2 Months", budget: "R450k", status: "Completed 2023", images: ["images/brits-1.jpeg","images/brits-2.jpeg","images/brits-3.jpeg"], video: "" },
'majakaneng': { title: "Majakaneng Access Road", desc: "Road + Stormwater + Kerbs • 1.2km • Plant Hire", client: "Majakaneng Community", duration: "3 Months", budget: "R1.1M", status: "Completed", images: ["images/majakaneng-1.jpeg","images/majakaneng-2.jpeg","images/majakaneng-3.jpeg"], video: "" },
'haartbeespoort': { title: "Haartbeespoort Kitchen", desc: "Full Kitchen Remodel • Fitted Units • Granite", client: "Private - Haartbeespoort", duration: "3 Weeks", budget: "R180k", status: "Completed 2024", images: ["images/haartbeespoort-1.jpeg","images/haartbeespoort-2.jpeg","images/haartbeespoort-3.jpeg"], video: "" },
'seasonsgolf': { title: "Seasons Golf Estate", desc: "5 Bedroom Double Storey • Pool • Steel Works", client: "Seasons Estate", duration: "10 Months", budget: "R3.2M", status: "Completed 2023", images: ["images/seasonsgolf-1.jpeg","images/seasonsgolf-2.jpeg","images/seasonsgolf-3.jpeg"], video: "" },
'bokfontein': { title: "Bokfontein Bathroom", desc: "2 Bathrooms + Toilet • Tiling, Plumbing, Waterproofing", client: "Bokfontein", duration: "2 Weeks", budget: "R95k", status: "On Track", images: ["images/bokfontein-1.jpeg","images/bokfontein-2.jpeg","images/bokfontein-3.jpeg"], video: "" },
'gabion': { title: "Gabion Retaining Walls", desc: "150m Gabion + Earthworks • Erosion Control", client: "Brits - Private", duration: "1 Month", budget: "R320k", status: "Completed", images: ["images/gabion-1.jpeg","images/gabion-2.jpeg","images/gabion-3.jpeg"], video: "" },
'seasons311': { title: "Seasons Bushveld 311 - Modern Farmhouse", desc: "Double Storey Luxury • Red Brick + Steel • 450sqm • Stand 311", client: "Seasons 311 - Private", duration: "Ongoing - 45% Complete", budget: "R3.2M", status: "45% Brickwork Complete", images: ["images/seasonsbushveld-1.jpeg","images/seasonsbushveld-2.jpeg","images/seasonsbushveld-3.jpeg","images/seasonsbushveld-4.jpeg","images/seasonsbushveld-5.jpeg"], video: "" },
'1': { title: "Fountainbrook Estate House", desc: "4 Bedroom Modern Luxury • 320sqm", client: "Mr Mateza Modisana", duration: "8 Months", budget: "R2.8M", status: "Completed 2022", images: ["images/fountainbrook-1.jpeg","images/fountainbrook-2.jpeg","images/fountainbrook-3.jpeg","images/fountainbrook-4.jpeg","images/fountainbrook-5.jpeg"], video: "" }
};

// ================= MODAL =================
let currentGallery = [];
let currentIdx = 0;
let currentIndex = 0; // FIX: was missing, openGallery used it and crashed

function openProject(key, idx = 0){
const k = String(key).toLowerCase();
const data = projectsData[k];
if(!data){ console.log("Not found:", key); return; }
currentGallery = data.images || [];
currentIdx = idx;
currentIndex = idx;
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
currentIdx = i; currentIndex = i;
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

// Gallery system - FIXED keys to match your filters + currentIndex bug
const galleries = {
residential: ["images/residential-1.jpeg","images/residential-2.jpeg","images/residential-3.jpeg","images/residential-4.jpeg","images/residential-5.jpeg"],
commercial: ["images/brits-1.jpeg","images/brits-2.jpeg","images/brits-3.jpeg"],
civil: ["images/civil-1.jpg","images/civil-2.jpg","images/civil-3.jpg","images/civil-4.jpg","images/civil-5.jpg"],
renovation: ["images/renovations-1.jpeg","images/renovations-2.jpeg","images/renovations-3.jpeg","images/renovations-4.jpeg","images/renovations-5.jpeg"],
// keep your old keys as aliases so nothing breaks
plumbing: ["images/plumbing-1.jpeg","images/plumbing-2.jpeg","images/plumbing-3.jpeg"],
renovations: ["images/renovations-1.jpeg","images/renovations-2.jpeg","images/renovations-3.jpeg"],
design: ["images/design_1.jpg","images/design_2.jpg","images/design_3.jpg"],
finishing: ["images/finishing-1.jpeg","images/finishing-2.jpeg","images/finishing-3.jpeg"],
};
function openGallery(type){
if(!galleries[type]) return;
currentGallery = galleries[type];
currentIndex = 0; currentIdx = 0;
let modal = document.getElementById('galleryModal');
if(!modal){ modal = document.createElement('div'); modal.id = 'galleryModal'; document.body.appendChild(modal); }
modal.style.display = 'flex'; modal.style.position = 'fixed'; modal.style.top = '0'; modal.style.left = '0'; modal.style.width = '100%'; modal.style.height = '100%'; modal.style.background = 'rgba(0,0,0,0.9)'; modal.style.zIndex = '9999'; modal.style.justifyContent = 'center'; modal.style.alignItems = 'center'; modal.style.padding = '15px'; modal.style.boxSizing = 'border-box';
let thumbs = '';
for(let i=0; i<currentGallery.length; i++){
thumbs += '<img src="' + currentGallery[i] + '" onclick="showImg(' + i + ')" style="width:60px;height:45px;object-fit:cover;border-radius:5px;cursor:pointer;border:2px solid #ddd" alt="">';
}
modal.innerHTML =
'<div style="background:white;padding:15px;border-radius:12px;width:100%;max-width:600px;max-height:90vh;overflow:auto;position:relative">' +
'<span onclick="closeGallery()" style="position:absolute;right:12px;top:5px;font-size:30px;cursor:pointer;z-index:10">&times;</span>' +
'<h3 style="margin:0 0 10px 0;font-size:16px">' + type.toUpperCase() + ' - Helix 360 Work</h3>' +
'<div style="position:relative;text-align:center;background:#f5f5f5;border-radius:8px">' +
'<img id="galleryMainImg" src="' + currentGallery[0] + '" style="width:100%;height:320px;object-fit:cover;border-radius:8px;display:block" alt="">' +
'<button type="button" onclick="prevImg()" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);background:#000;color:#fff;border:none;width:40px;height:40px;border-radius:50%;font-size:20px;cursor:pointer;z-index:5">&#10094;</button>' +
'<button type="button" onclick="nextImg()" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:#000;color:#fff;border:none;width:40px;height:40px;border-radius:50%;font-size:20px;cursor:pointer;z-index:5">&#10095;</button>' +
'</div>' +
'<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px;justify-content:center">' + thumbs + '</div>' +
'<p style="text-align:center;font-size:12px;color:#666;margin:8px 0 0 0">Tap &lt; &gt; to see next photo</p>' +
'</div>';
document.body.style.overflow = 'hidden';
modal.onclick = function(e){ if(e.target === modal) closeGallery(); };
}
function showImg(i){ currentIndex = i; currentIdx = i; const el=document.getElementById('galleryMainImg'); if(el) el.src = currentGallery[i]; }
function nextImg(){ currentIndex = (currentIndex + 1) % currentGallery.length; const el=document.getElementById('galleryMainImg'); if(el) el.src = currentGallery[currentIndex]; }
function prevImg(){ currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length; const el=document.getElementById('galleryMainImg'); if(el) el.src = currentGallery[currentIndex]; }
function closeGallery(){ const m = document.getElementById('galleryModal'); if(m) m.style.display = 'none'; document.body.style.overflow = ''; }
