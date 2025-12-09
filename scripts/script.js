
const menuToggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");

    
    function createCloseBtn() {
        if (!document.getElementById("close-btn")) {
            const closeBtn = document.createElement("span");
            closeBtn.id = "close-btn";
            closeBtn.textContent = "✕";
            closeBtn.style.cursor = "pointer";
            closeBtn.style.fontSize = "2rem";
            closeBtn.style.position = "absolute";
            closeBtn.style.top = "10px";
            closeBtn.style.right = "20px";
            closeBtn.style.zIndex = "1001";
            navList.prepend(closeBtn);

            closeBtn.addEventListener("click", () => {
                navList.classList.remove("active");
            });
        }
    }

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
      
        if (window.innerWidth <= 768 && navList.classList.contains("active")) {
            createCloseBtn();
        }
    });

    
    function cleanupCloseBtn() {
        const closeBtn = document.getElementById("close-btn");
        if (closeBtn && (!navList.classList.contains("active") || window.innerWidth > 768)) {
            closeBtn.remove();
        }
    }

    window.addEventListener("resize", cleanupCloseBtn);
    navList.addEventListener("transitionend", cleanupCloseBtn);