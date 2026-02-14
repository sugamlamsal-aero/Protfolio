// THEME TOGGLE
const toggleButton = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleButton.textContent = "☀️";
}
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙";
    }
});

// NAV ACTIVE SWITCH WITH SMOOTH ACCENT
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-item");

function updateAccent() {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => link.classList.remove("active"));

    if (current) {
        const activeLink = document.querySelector(`.nav-item[href="#${current}"]`);
        activeLink.classList.add("active");

        // Update accent variable
        const targetSection = document.getElementById(current);
        const accent = getComputedStyle(targetSection).getPropertyValue("--section-accent");
        document.documentElement.style.setProperty("--accent", accent);
    }
}

window.addEventListener("scroll", updateAccent);
updateAccent(); // initial

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);

// CV MODAL
const cvButton = document.getElementById("cvButton");
const cvModal = document.getElementById("cvModal");
const cvClose = document.querySelector(".modal .close");

cvButton.addEventListener("click", () => cvModal.style.display = "block");
cvClose.addEventListener("click", () => cvModal.style.display = "none");
window.addEventListener("click", e => { if (e.target === cvModal) cvModal.style.display = "none"; });

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.querySelector(".nav-links").classList.toggle("active");

    // Animate hamburger icon
    hamburger.classList.toggle("open");
});

// Close menu on link click (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.querySelector(".nav-links").classList.contains("active")) {
            navMenu.querySelector(".nav-links").classList.remove("active");
            hamburger.classList.remove("open");
        }
    });
});

// Fade-in animation for hero bullets
window.addEventListener("load", () => {
    const bullets = document.querySelectorAll(".hero-highlights li");

    bullets.forEach((bullet, index) => {
        setTimeout(() => {
            bullet.classList.add("show");
        }, index * 200); // staggered animation
    });
});

function openProject(project) {
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("modalBody");

    if (project === "trishul") {
        body.innerHTML = `
            <h2>Project Trishul</h2>
            <p>Designed and launched two solid-propellant rockets reaching 2.6km and 1.8km apogee.</p>

            <h3>Report</h3>
            <a href="files/trishul-report.pdf" target="_blank">View Report (PDF)</a>

            <h3>Images</h3>
            <img src="images/trishul1.jpg" width="100%">
            <img src="images/trishul2.jpg" width="100%">

            <h3>Video</h3>
            <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/YOUR_VIDEO_LINK"
                frameborder="0" allowfullscreen>
            </iframe>
        `;
    }

    if (project === "sploosh") {
        body.innerHTML = `
            <h2>SPLOOSH Amphibian Aircraft</h2>
            <p>19-seater amphibian aircraft designed using XFLR5, OpenVSP, MATLAB, X-Plane.</p>

            <a href="files/sploosh-report.pdf" target="_blank">View Design Report</a>
        `;
    }

    if (project === "rocket-control") {
        body.innerHTML = `
            <h2>Active Fin-Controlled Rocket</h2>
            <p>PID-based real-time control system with IMU feedback and servo-actuated fins.</p>

            <a href="files/control-system-paper.pdf" target="_blank">Conference Paper</a>
        `;
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

function openCertificate(company) {
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("modalBody");

    if (company === "airbus") {
        body.innerHTML = `
            <h2>Airbus India Internship</h2>

            <div class="modal-buttons">
                <a href="files/airbus-certificate.pdf" target="_blank" class="modal-btn">
                    View Certificate
                </a>
            </div>

            <img src="images/airbus-certificate.jpg" width="100%">
        `;
    }

    if (company === "iitb") {
        body.innerHTML = `
            <h2>IIT Bombay Research Internship</h2>

            <div class="modal-buttons">
                <a href="files/iitb-certificate.pdf" target="_blank" class="modal-btn">
                    View Certificate
                </a>

                <a href="files/iitb-report.pdf" target="_blank" class="modal-btn secondary">
                    View Internship Report
                </a>
            </div>
        `;
    }

    if (company === "fossee") {
        body.innerHTML = `
            <h2>FOSSEE Project Internship</h2>

            <div class="modal-buttons">
                <a href="files/fossee-certificate.pdf" target="_blank" class="modal-btn">
                    View Certificate
                </a>

                <a href="files/fossee-report.pdf" target="_blank" class="modal-btn secondary">
                    View Internship Report
                </a>
            </div>
        `;
    }

    modal.style.display = "block";
}
