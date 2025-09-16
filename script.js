// ----- SECTION NAVIGATION -----

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sectionId = button.getAttribute("data-section");

    // Toggle active class
    navButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Show/hide sections
    sections.forEach((section) => {
      section.style.display = section.id === sectionId ? "block" : "none";
    });

    // Switch data based on section
    if (sectionId === "first-section") {
      createCard(gunData);
    } else if (sectionId === "second-section") {
      createCard(chrData);
    }
  });
});

// ----- SETTINGS MODAL -----
const modal = document.getElementById("settings-modal-tcg");
const darkModeToggleModal = document.getElementById("darkModeToggleModal");

// Open/Close modal
function toggleTCGSettingsModal() {
  modal.classList.toggle("hidden");
  if (!modal.classList.contains("hidden")) {
    syncToggleWithDarkMode();
  }
}

// Sync toggle with current dark mode
function syncToggleWithDarkMode() {
  if (darkModeToggleModal) {
    darkModeToggleModal.checked = document.body.classList.contains("dark-mode");
  }
}

// Attach modal toggle to icon clicks

// Close modal with the × button

// Dark mode handling
const savedDarkMode = localStorage.getItem("darkMode") === "enabled";
if (savedDarkMode) {
  document.body.classList.add("dark-mode");
}
if (darkModeToggleModal) {
  darkModeToggleModal.checked = savedDarkMode;

  darkModeToggleModal.addEventListener("change", () => {
    if (darkModeToggleModal.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
}


let count = localStorage.getItem('visitorCount');
if (!count) {
    count = 0;
}

// Convert to number and increment
count = Number(count) + 1;

// Save the new count back to localStorage
localStorage.setItem('visitorCount', count);

// Show count on the page
document.getElementById('visitor-count').textContent = count;