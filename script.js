/*======================typing animation================= */
var typed = new Typed(".typing",{
    strings:["","Web Developer"," web Designer","Web Hosting Provider"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

//   const navLinks = document.querySelectorAll(".nav li a");

//   navLinks.forEach(link => {
//     link.addEventListener("click", function () {
//       // Remove 'active' from all
//       navLinks.forEach(nav => nav.classList.remove("active"));
//       // Add 'active' to clicked one
//       this.classList.add("active");
//     });
//   });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");

    function setActive(link) {
      navLinks.forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");
    }

    // Scroll-based active highlight
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });

    // Click-based active highlight
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        setActive(this);
      });
    });