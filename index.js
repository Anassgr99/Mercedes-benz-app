document.addEventListener("DOMContentLoaded", () => {
  // Navigation functionality (Page 2)
  const navItems = document.querySelectorAll("#page-2-top-nav li"); // Navigation items
  const carContainers = document.querySelectorAll(".page-2-cards"); // All car sections
  let currentCategory = null;

  function showCategory(type) {
    carContainers.forEach((container) => {
      container.style.display = "none";
    });

    let selectedContainer = document.getElementById(type);
    if (selectedContainer) {
      selectedContainer.style.display = "flex";
      setupCarousel(selectedContainer); // Initialize the slider for the selected category
    }
  }

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove "active-nav" class from all nav items
      navItems.forEach((nav) => nav.classList.remove("active-nav"));

      // Add "active-nav" class to the clicked item
      item.classList.add("active-nav");

      let type = item.textContent
        .trim()
        .normalize("NFD") // Normalize accented characters
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/\s+/g, "") // Remove spaces
        .replace(/[^a-zA-Z]/g, ""); // Remove non-letter characters

      if (currentCategory !== type) {
        currentCategory = type;
        showCategory(type);
      }
    });
  });

 

  // Setup Carousel Function
  function setupCarousel(container) {
    const cardContainer = container.querySelector(".page-2-cards-container");
    const cards = container.querySelectorAll(".page-2-card");
    const leftBtn = container.querySelector(".go-left");
    const rightBtn = container.querySelector(".go-right");
    const dotsContainer = container.querySelector(".dots-nav");

    if (!cardContainer || !leftBtn || !rightBtn || !dotsContainer) return;

    let currentIndex = 0;
    const visibleCards = 3;
    const totalCards = cards.length;
    const step = 100 / visibleCards;
    const totalSteps = totalCards - visibleCards + 1;

    // Clear existing dots

    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSteps; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");

      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
      });

      dotsContainer.appendChild(dot);
    }

    // Update carousel position and dots
    function updateCarousel() {
      const offset = -currentIndex * step;
      cardContainer.style.transform = `translateX(${offset}%)`;

      leftBtn.style.display = currentIndex === 0 ? "none" : "block";
      rightBtn.style.display =
        currentIndex >= totalCards - visibleCards ? "none" : "block";

      dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    // Event listeners for buttons
    rightBtn.addEventListener("click", () => {
      if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateCarousel();
      }
    });

    leftBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    // Initial carousel update
    updateCarousel();
  }

  // Page 2 Slider
  const container = document.querySelector(".page-2-cards-container");
  const cards = document.querySelectorAll(".page-2-card");
  const leftBtn = document.querySelector(".go-left");
  const rightBtn = document.querySelector(".go-right");
  const dotsContainer = document.querySelector(".dots-nav");

  if (!container || !leftBtn || !rightBtn || !dotsContainer) return;

  let currentIndex = 0;
  const visibleCards = 3;
  const totalCards = cards.length;
  const step = 100 / visibleCards;
  const totalSteps = totalCards - visibleCards + 1;

  // Update Page 2 carousel
  function updateCarousel() {
    const offset = -currentIndex * step;
    container.style.transform = `translateX(${offset}%)`;

    leftBtn.style.display = currentIndex === 0 ? "none" : "block";
    rightBtn.style.display =
      currentIndex >= totalCards - visibleCards ? "none" : "block";

    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Event listeners for Page 2 slider buttons
  rightBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      updateCarousel();
    }
  });

  leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // **Show the first category by default**
  if (carContainers.length > 0) {
    let firstType = navItems[0].textContent
      .trim()
      .replace(/\s+/g, "")
      .replace(/[^a-zA-Z]/g, "");
    currentCategory = firstType;
    showCategory(firstType);

    // Set the first nav item as active by default
    navItems[0].classList.add("active-nav");
  }

  updateCarousel();

  // Page 3 slider functionality
  const container2 = document.querySelector("#page-3-cards-container");
  const cards2 = document.querySelectorAll(".page-3-card");
  const leftBtn2 = document.querySelector("#go-left-p3");
  const rightBtn2 = document.querySelector("#go-right-p3");
  const dotsContainer2 = document.querySelector(".dots-nav-p3");

  if (!container2 || !leftBtn2 || !rightBtn2 || !dotsContainer2) return;

  let currentIndex2 = 0;
  const visibleCards2 = 3;
  const totalCards2 = cards2.length;
  const step2 = 100 / visibleCards2;
  const totalSteps2 = totalCards2 - visibleCards2 + 1;

  // Create dots for Page 3 slider
  for (let v = 0; v < totalSteps2; v++) {
    const dot2 = document.createElement("div");
    dot2.classList.add("dot-p3");
    if (v === 0) dot2.classList.add("active2");

    dot2.addEventListener("click", () => {
      currentIndex2 = v;
      updateCarousel2();
    });

    dotsContainer2.appendChild(dot2);
  }

  // Update Page 3 carousel
  function updateCarousel2() {
    const offset2 = -currentIndex2 * step2;
    container2.style.transform = `translateX(${offset2}%)`;

    leftBtn2.style.display = currentIndex2 === 0 ? "none" : "block";
    rightBtn2.style.display =
      currentIndex2 >= totalCards2 - visibleCards2 ? "none" : "block";

    document.querySelectorAll(".dot-p3").forEach((dot2, index2) => {
      dot2.classList.toggle("active2", index2 === currentIndex2);
    });
  }

  // Event listeners for Page 3 slider buttons
  rightBtn2.addEventListener("click", () => {
    if (currentIndex2 < totalCards2 - visibleCards2) {
      currentIndex2++;
      updateCarousel2();
    }
  });

  leftBtn2.addEventListener("click", () => {
    if (currentIndex2 > 0) {
      currentIndex2--;
      updateCarousel2();
    }
  });

  updateCarousel2();

  // Footer toggle functionality
  document
    .getElementById("toggle-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();

      let h1 = document.getElementById("toggled-text");
      h1.classList.toggle("show");
    });
});


 // page 2 nav small
 function toggleNav2(sectionId) {
  var cards = document.getElementById(sectionId);

  // If the clicked section is already visible, hide it
  if (cards.classList.contains("activeCards")) {
    cards.classList.remove("activeCards");
  } else {
    // Show the clicked section
    cards.classList.add("activeCards");
  }
}