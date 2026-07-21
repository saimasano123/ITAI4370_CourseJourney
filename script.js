/* =========================
 AI TELECOM JOURNEY JS
========================= */


/*
 Smooth scrolling navigation
*/

document.querySelectorAll("nav a").forEach(link => {


    link.addEventListener("click", function(e){


        e.preventDefault();


        document

        .querySelector(this.getAttribute("href"))

        .scrollIntoView({

            behavior:"smooth"

        });


    });


});





/*
 Scroll reveal animation
*/


const observer = new IntersectionObserver(entries => {


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


});



document.querySelectorAll(

".card,.module-card,.lab-card,.assignment-card,.timeline-item"

)

.forEach(element=>{


    element.classList.add("hidden");

    observer.observe(element);


});





/*
 Cyber Particle Background
*/


const particleContainer =

document.getElementById("particles");



for(let i=0;i<80;i++){


    let particle=document.createElement("span");


    particle.style.position="absolute";

    particle.style.width="3px";

    particle.style.height="3px";

    particle.style.background="#00ffff";

    particle.style.borderRadius="50%";

    particle.style.opacity=Math.random();


    particle.style.left=

    Math.random()*100+"%";


    particle.style.top=

    Math.random()*100+"%";


    particle.style.animation=

    `move ${5+Math.random()*10}s linear infinite`;



    particleContainer.appendChild(particle);


}





/*
 Add particle movement animation
*/


let style=document.createElement("style");


style.innerHTML=`

@keyframes move{


from{

transform:translateY(0);

}


to{

transform:translateY(-120vh);

}


}

`;


document.head.appendChild(style);






/*
 Module Card Modal
 Opens a detail modal populated from MODULES_DATA (modules-data.js)
*/

const moduleModal = document.getElementById("module-modal");
const modalPanel = moduleModal.querySelector(".modal-panel");
const modalCloseBtn = document.getElementById("modal-close");

let lastFocusedElement = null;

function buildResourceLinks(container, items, emptyText) {

    container.innerHTML = "";

    if (!items || items.length === 0) {
        const empty = document.createElement("span");
        empty.className = "modal-empty";
        empty.textContent = emptyText;
        container.appendChild(empty);
        return;
    }

    items.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url || "#";
        a.textContent = item.label;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        container.appendChild(a);
    });

}

function openModuleModal(moduleNumber) {

    const data = MODULES_DATA[moduleNumber];
    if (!data) return;

    lastFocusedElement = document.activeElement;

    document.getElementById("modal-eyebrow").textContent =
        `MOD ${String(moduleNumber).padStart(2, "0")} — TRANSMISSION LOG`;

    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-tagline").textContent = data.tagline || "";
    document.getElementById("modal-lecture").textContent = data.lecture || "";
    document.getElementById("modal-reflection").textContent = data.reflection || "";

    // Screenshots / evidence gallery
    const gallery = document.getElementById("modal-gallery");
    gallery.innerHTML = "";
    if (data.screenshots && data.screenshots.length > 0) {
        data.screenshots.forEach(shot => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = shot.src;
            img.alt = shot.caption || "";
            img.loading = "lazy";
            const caption = document.createElement("figcaption");
            caption.textContent = shot.caption || "";
            figure.appendChild(img);
            figure.appendChild(caption);
            gallery.appendChild(figure);
        });
    } else {
        const empty = document.createElement("span");
        empty.className = "modal-empty";
        empty.textContent = "No screenshots for this module.";
        gallery.appendChild(empty);
    }

    // Labs completed
    const labsList = document.getElementById("modal-labs");
    labsList.innerHTML = "";
    (data.labs || []).forEach(lab => {
        const li = document.createElement("li");
        li.textContent = lab;
        labsList.appendChild(li);
    });

    // Resources (PDF links etc.)
    buildResourceLinks(
        document.getElementById("modal-resources"),
        data.resources,
        "No resource links added yet."
    );

    // Code repository
    const repoContainer = document.getElementById("modal-repo");
    buildResourceLinks(
        repoContainer,
        data.repo ? [data.repo] : [],
        "No code repository for this module."
    );

    moduleModal.classList.add("open");
    moduleModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    modalCloseBtn.focus();

}

function closeModuleModal() {

    moduleModal.classList.remove("open");
    moduleModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

}

document.querySelectorAll(".module-card button")
.forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        const moduleNumber = button.getAttribute("data-module");
        openModuleModal(moduleNumber);
    });
});

// Timeline items double as the interactive module browser
document.querySelectorAll(".timeline-item[data-module]")
.forEach(item => {
    item.addEventListener("click", () => {
        openModuleModal(item.getAttribute("data-module"));
    });
    item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModuleModal(item.getAttribute("data-module"));
        }
    });
});

modalCloseBtn.addEventListener("click", closeModuleModal);

moduleModal.addEventListener("click", (e) => {
    if (e.target === moduleModal) {
        closeModuleModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && moduleModal.classList.contains("open")) {
        closeModuleModal();
    }
});





/*
 Dynamic glowing cursor effect
*/


document.addEventListener(

"mousemove",

(e)=>{


let glow=document.createElement("div");


glow.style.position="fixed";

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

glow.style.width="15px";

glow.style.height="15px";

glow.style.borderRadius="50%";

glow.style.background="#00ffff";

glow.style.pointerEvents="none";

glow.style.opacity=".4";


document.body.appendChild(glow);



setTimeout(()=>{


glow.remove();


},500);



}

);