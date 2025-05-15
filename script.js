// Project data for each button
const projectData = {
    Frameoko: {
      title: "Frameoko",
      image: "assets/frameoko-turntable(low-res).mp4",
      description: `
        <p>A Shapeoko "frame" which can be parametrically resized for other machines besides the preconfigured Shapeoko 4. 
        With emphasis on an out of the box build using limited shop tools the CAM files are designed to be cut with the stock 0.25" 
        endmill included in the Shapeoko 4 bundle from Carbide. This is not a fixed parameter and you're welcome to cut it out whichever 
        way works best.</p>
      `,
      link: 'https://github.com/machine-blount/Frameoko',
      controlBg: 'assets/backgrounds/on-switch.jpg' // NEW FIELD
    },
    "Aux-kit": {
      title: "Aux-kit",
      image: "assets/favicon.png",
      description: `
        <p>An all in one auxiliary/supplementary solution for any electric-powered solar car teams competing in the National Solar Car Challenge. 
        In its current version It is designed as a Pi-HAT which connects to multiple expansion boards for quick iteration on separate parts of the system.</p>
      `,
      link: 'https://github.com/machine-blount/aux-kit',
      controlBg: 'assets/backgrounds/on-switch.jpg'
    },
    "Metal Work": {
      title: "Metal Work",
      image: "assets/metal-work.jpg",
      description: `
        <p>Description of the Metal Work project goes here. Add details about what the project is, 
        technologies used, and its purpose.</p>
      `,
      link: 'https://github.com/machine-blount/tab-generator',
      controlBg: 'assets/backgrounds/on-switch.jpg'
    },
    NuFLo: {
      title: "NuFLo",
      image: "assets/nuflo.jpg",
      description: `
        <p>Description of the NuFLo project goes here. Add details about what the project is, 
        technologies used, and its purpose.</p>
      `,
      link: 'https://github.com/CameronBuckley-studio/NuFlo',
      controlBg: 'assets/backgrounds/on-switch.jpg'
    }
  };
  
  let currentProjectKey = null;
  
  // Load project content when a label/control is clicked
  document.querySelectorAll(".label, .control").forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.dataset.key;
      loadContent(key);
    });
  });
  
  function loadContent(key) {
    const data = projectData[key];
    if (!data) return;
  
    currentProjectKey = key;
  
    // Update the description and image
    document.getElementById("content-title").textContent = data.title;
    document.getElementById("content-description").innerHTML = data.description;
    document.getElementById("content-image").src = data.image;

    // Reset all .control backgrounds to default (optional)
    document.querySelectorAll(".control").forEach(control => {
      control.style.backgroundImage = 'url("assets/backgrounds/off-switch-bg (2).jpg")';
    });
  
    // Set the background image of the clicked control
    const project = document.querySelector(`.project .control[data-key="${key}"]`);
    if (project && data.controlBg) {
      project.style.backgroundImage = `url("${data.controlBg}")`;
    }
  }
  
  
  // Open link on switch click
  document.getElementById("switch-1").addEventListener("click", () => {
    if (currentProjectKey && projectData[currentProjectKey]) {
      const link = projectData[currentProjectKey].link;
      window.open(link, "_blank");
    }
  });
  
  
  // Optional existing animation logic — kept intact
  document.addEventListener("DOMContentLoaded", () => {
    const cornerButtons = document.querySelectorAll(".corner-button");
    const landing = document.querySelector(".landing");
    const clickedButtons = new Set();
  
    function triggerFallAnimation() {
      landing.classList.add("fall");
    }
  
    const autoFallTimeout = setTimeout(triggerFallAnimation, 10500);
  
    cornerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        clickedButtons.add(button);
        button.style.opacity = "0.5";
        button.style.transform = "scale(0.8)";
  
        if (clickedButtons.size === 4) {
          clearTimeout(autoFallTimeout);
          landing.classList.add("fall");
        }
      });
    });
  });

  // Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

//button interactions
const buttons = document.querySelectorAll('.switch');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');

    // Reset all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // If the clicked one wasn't active, activate it
    if (!isActive) {
      button.classList.add('active');
    }
  });
});

//FORM HOTLOADING
let showingForm = false;

document.getElementById("switch-2").addEventListener("click", () => {
  const description = document.getElementById("content-description");

  if (showingForm) {
    // Restore previous project description (you may want to store it if needed)
    description.innerHTML = "";
    if (currentProjectKey && projectData[currentProjectKey]) {
      description.innerHTML = projectData[currentProjectKey].description;
    }
  } else {
    description.innerHTML = `
<form
  action="https://formspree.io/f/xanoadyy"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <button type="submit">Send</button>
</form>
    `;
  }

  showingForm = !showingForm;
});


  //WINDOW SCALING
  function updateScale() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
  
    const scaleX = vw / originalWidth;
    const scaleY = vh / originalHeight;
  
    const scale = Math.min(scaleX, scaleY, 1);
  
    // Calculate leftover space for centering scaled container
    const scaledWidth = originalWidth * scale;
    const scaledHeight = originalHeight * scale;
  
    // Calculate translate offsets to center visually in viewport
    const translateX = (vw - scaledWidth) / 2 / scale;
    const translateY = (vh - scaledHeight) / 2 / scale;
  
    // Apply scale + translate so container stays perfectly centered in viewport
    container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }