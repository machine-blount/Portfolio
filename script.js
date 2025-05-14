// Project data for each button
const projectData = {
    Frameoko: {
      title: "Frameoko",
      image: "assets/frameoko-turntable(low-res).mp4", // Update with your actual image path
      description: `
              <h2>Frameoko</h2>
              <p>A Shapeoko "frame" which can be parametrically resized for other machines besides the preconfigured Shapeoko 4. 
              With emphasis on an out of the box build using limited shop tools the CAM files are designed to be cut with the stock 0.25" 
              endmill included in the Shapeoko 4 bundle from Carbide. This is not a fixed parameter and you're welcome to cut it out whichever 
              way works best. </p>
          `,
    },
    "Aux-kit": {
      title: "Aux-kit",
      image: "assets/favicon.png", // Update with your actual image path
      description: `
              <h2>Aux-kit</h2>
              <p>An all in one auxiliary/supplementary solution for any electric-powered solar car teams competing in the National Solar Car Challenge. 
              In its current version It is designed as a Pi-HAT which connects to multiple expansion boards for quick iteration on separate parts of the system.</p>
          `,
    },
    "Metal Work": {
      title: "Metal Work",
      image: "assets/metal-work.jpg", // Update with your actual image path
      description: `
              <h2>Metal Work</h2>
              <p>Description of the Metal Work project goes here. Add details about what the project is, 
              technologies used, and its purpose.</p>
          `,
    },
    NuFLo: {
      title: "NuFLo",
      image: "assets/nuflo.jpg", // Update with your actual image path
      description: `
              <h2>NuFLo</h2>
              <p>Description of the NuFLo project goes here. Add details about what the project is, 
              technologies used, and its purpose.</p>
          `,
    },
    item4: {
      title: "Title for Item 4",
      description: "This is the description for item 4.",
      image: "https://via.placeholder.com/300x200?text=Item+4",
    },
  };
  
  // Attach event listeners to all divs with class "clickable"
  document.querySelectorAll(".label, .control").forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.dataset.key;
      loadContent(key);
    });
  });
  
  function loadContent(key) {
    const data = projectData[key];
    if (!data) return;
  
    document.getElementById("content-title").textContent = data.title;
    document.getElementById("content-description").innerHTML = data.description;
    document.getElementById("content-image").src = data.image;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const cornerButtons = document.querySelectorAll(".corner-button");
    const landing = document.querySelector(".landing");
    const clickedButtons = new Set();
  
    // Function to trigger the fall animation
    function triggerFallAnimation() {
      landing.classList.add("fall");
    }
  
    // Set timeout for automatic animation to 10 seconds (10000ms)
    const autoFallTimeout = setTimeout(triggerFallAnimation, 10500);
  
    // Keep the manual corner button functionality
    cornerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        clickedButtons.add(button);
        button.style.opacity = "0.5";
        button.style.transform = "scale(0.8)";
  
        if (clickedButtons.size === 4) {
          // Clear the automatic timeout if user clicks all corners first
          clearTimeout(autoFallTimeout);
          landing.classList.add("fall");
        }
      });
    });
  });