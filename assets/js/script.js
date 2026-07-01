


document.addEventListener("DOMContentLoaded", function () {

    const navbarCollapse = document.getElementById("navbarContent");
    const toggler = document.querySelector(".navbar-toggler");

    if (navbarCollapse && toggler) {

        const hamburger = toggler.querySelector(".navbar-toggler-icon");
        const closeIcon = toggler.querySelector(".close-icon");

        // Toggler click
        toggler.addEventListener("click", function (e) {

            e.preventDefault();

            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

            if (navbarCollapse.classList.contains("show")) {
                bsCollapse.hide();
            } else {
                bsCollapse.show();
            }
        });

        // Menu open
        navbarCollapse.addEventListener("shown.bs.collapse", function () {

            if (hamburger) hamburger.classList.add("d-none");
            if (closeIcon) closeIcon.classList.remove("d-none");

        });

        // Menu close
        navbarCollapse.addEventListener("hidden.bs.collapse", function () {

            if (closeIcon) closeIcon.classList.add("d-none");
            if (hamburger) hamburger.classList.remove("d-none");

            // Sab dropdown close
            document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
                menu.classList.remove("show");
            });

            document.querySelectorAll(".dropdown").forEach(function (dropdown) {
                dropdown.classList.remove("mobile-open");
            });

            document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
                toggle.classList.remove("show");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* Desktop Hover Dropdown */
    document.querySelectorAll(".dropdown").forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            if (window.innerWidth > 1199) {

                const toggle = item.querySelector(".dropdown-toggle");

                if (toggle) {
                    bootstrap.Dropdown
                        .getOrCreateInstance(toggle)
                        .show();
                }
            }
        });

        item.addEventListener("mouseleave", function () {

            if (window.innerWidth > 1199) {

                const toggle = item.querySelector(".dropdown-toggle");

                if (toggle) {
                    bootstrap.Dropdown
                        .getOrCreateInstance(toggle)
                        .hide();
                }
            }
        });
    });


    /* Mobile Accordion Dropdown */
    document.addEventListener("click", function (e) {

        const toggle = e.target.closest(".dropdown-toggle");

        if (!toggle || window.innerWidth > 1199) {
            return;
        }

        e.preventDefault();
        e.stopImmediatePropagation();

        const currentDropdown = toggle.closest(".dropdown");
        const currentMenu = currentDropdown ? currentDropdown.querySelector(".dropdown-menu") : null;

        if (!currentDropdown || !currentMenu) {
            return;
        }

        const isOpen = currentDropdown.classList.contains("mobile-open");

        document.querySelectorAll(".dropdown").forEach(function (dropdown) {
            dropdown.classList.remove("mobile-open");
        });

        document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
            menu.classList.remove("show");
        });

        document.querySelectorAll(".dropdown-toggle").forEach(function (item) {
            item.classList.remove("show");
            item.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
            currentDropdown.classList.add("mobile-open");
            currentMenu.classList.add("show");
            toggle.classList.add("show");
            toggle.setAttribute("aria-expanded", "true");
        }
    }, true);

});


document.addEventListener("DOMContentLoaded", function () {

    const navbarCollapse = document.getElementById("navbarContent");
    const socialRail = document.querySelector(".social-rail");

    if (!navbarCollapse || !socialRail) {
        return;
    }

    // Mobile menu open
    navbarCollapse.addEventListener("shown.bs.collapse", function () {

        if (window.innerWidth <= 1199) {
            socialRail.style.display = "none";
        }

    });

    // Mobile menu close (X click)
    navbarCollapse.addEventListener("hidden.bs.collapse", function () {

        if (window.innerWidth <= 1199) {
            socialRail.style.display = "";
        }

    });

});






    const video = document.getElementById("myVideo");
    const playBtn = document.querySelector(".play-btn");

    if (video && playBtn) {
    const icon = playBtn.querySelector("i");

    playBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
        } else {
            video.pause();
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
        }
    });

    video.addEventListener("ended", () => {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    });
    }

   
const testimonials = [

    {
        image: "assets/image/imagereview1.png",
        rating: "5.0",
        text: "Very good experience at this centre. The atmosphere is calm and motivating. The staff guided me at every step of my journey.",
        name: "Shurbhi Popandiya"
    },

    {
        image: "assets/image/imagereview2.png",
        rating: "5.0",
        text: "Excellent treatment and supportive staff. I regained confidence and found a new direction in life.",
        name: "Rajnish Giri"
    },

    {
        image: "assets/image/imagereview3.png",
        rating: "5.0",
        text: "The counselling sessions changed my life. The team truly cares about every patient.",
        name: "Anmol Sharma"
    },

    {
        image: "assets/image/imagereview4.png",
        rating: "5.0",
        text: "Divine Help Foundation gave me a second chance to live a healthy and sober life.",
        name: "Prashant Singh"
    }

];

let currentIndex = 0;

const image = document.getElementById("testimonial-img");
const rating = document.getElementById("testimonial-rating");
const text = document.getElementById("testimonial-text");
const name = document.getElementById("testimonial-name");

const stack1 = document.getElementById("stack1");
const stack2 = document.getElementById("stack2");
const stack3 = document.getElementById("stack3");

function changeTestimonial() {

    if (!image || !rating || !text || !name || !stack1 || !stack2 || !stack3) {
        return;
    }

    currentIndex++;

    if(currentIndex >= testimonials.length){
        currentIndex = 0;
    }

    const item = testimonials[currentIndex];

    /* Fade Out */

    image.style.opacity = "0";
    rating.style.opacity = "0";
    text.style.opacity = "0";
    name.style.opacity = "0";

    /* Stack Animation */

    stack1.classList.add("stack-animate-1");
    stack2.classList.add("stack-animate-2");
    stack3.classList.add("stack-animate-3");

    setTimeout(() => {

        image.src = item.image;
        rating.textContent = item.rating;
        text.textContent = item.text;
        name.textContent = item.name;

        /* Fade In */

        image.style.opacity = "1";
        rating.style.opacity = "1";
        text.style.opacity = "1";
        name.style.opacity = "1";

        stack1.classList.remove("stack-animate-1");
        stack2.classList.remove("stack-animate-2");
        stack3.classList.remove("stack-animate-3");

    }, 300);

}

/* Auto Change Every 4 Seconds */

if (image && rating && text && name && stack1 && stack2 && stack3) {
    setInterval(changeTestimonial, 4000);
}
document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");
        const toggle = item.querySelector(".faq-toggle");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            faqItems.forEach((faq) => {
                faq.classList.remove("active");

                const btn = faq.querySelector(".faq-toggle");
                btn.innerHTML = "+";
            });

            if (!isActive) {
                item.classList.add("active");
                toggle.innerHTML = "&minus;";
            }

        });

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        /* Name Validation */
        if (fullName === "") {
            alert("Please enter your full name.");
            return;
        }

        /* Phone Validation */
        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        /* Phone Format */
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
            alert("Please enter a valid 10 digit mobile number.");
            return;
        }

        /* Email Validation */
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        /* Message Validation */
        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        /* Success */
        alert("Form submitted successfully!");

        form.reset();

    });

});

/* ==========================
   FOOTER LINK ACTIVE EFFECT
========================== */

document.addEventListener("DOMContentLoaded", function () {

    const footerLinks = document.querySelectorAll(".footer-link");

    footerLinks.forEach(link => {

        link.addEventListener("click", function () {

            footerLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const aboutTabs = document.querySelectorAll(".about-tab-btn");
    const aboutPanels = document.querySelectorAll(".about-tab-panel");

    aboutTabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            const target = tab.getAttribute("data-about-tab");

            aboutTabs.forEach(function (item) {
                item.classList.remove("active");
            });

            aboutPanels.forEach(function (panel) {
                panel.classList.remove("active");
            });

            tab.classList.add("active");

            const activePanel = document.getElementById(target);
            if (activePanel) {
                activePanel.classList.add("active");
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".count-up");

    if (!counters.length) {
        return;
    }

    function animateCounter(counter) {
        const target = Number(counter.getAttribute("data-count")) || 0;
        const suffix = counter.getAttribute("data-suffix") || "";
        const duration = 1600;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(target * easedProgress);

            counter.textContent = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    const observer = new IntersectionObserver(function (entries, currentObserver) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.35
    });

    counters.forEach(function (counter) {
        observer.observe(counter);
    });

});
