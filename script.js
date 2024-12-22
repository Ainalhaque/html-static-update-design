// // script.js
// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.getElementById("menu-icon");
//   const sideMenu = document.getElementById("side-menu");
//   const spinner = document.getElementById("spinner");

//   menuIcon.addEventListener("click", () => {
//     sideMenu.classList.toggle("open");
//   });

//   document.body.addEventListener("click", (event) => {
//     if (!sideMenu.contains(event.target) && event.target !== menuIcon) {
//       sideMenu.classList.remove("open");
//     }
//   });

//   document.body.addEventListener("click", () => {
//     spinner.style.display = "flex";
//     setTimeout(() => {
//       spinner.style.display = "none";
//     }, 2000);
//   });
// });




/**
 * Sidebar start
 */


let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; // selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bi-list"); // Menu icon
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close"); // Toggle sidebar open/close

  // Toggle the icon
  if (sidebarBtn.classList.contains("bi-list")) {
    sidebarBtn.classList.remove("bi-list");
    sidebarBtn.classList.add("bi-x"); // Change to close icon
  } else {
    sidebarBtn.classList.remove("bi-x");
    sidebarBtn.classList.add("bi-list"); // Change back to menu icon
  }
});


/**
 * Sidebar end
 */



/**
 * 
 * profile dropdown start
 */


function closeOpenDropdowns(e) {
	let openDropdownEls = document.querySelectorAll("details.dropdown[open]");

	if (openDropdownEls.length > 0) {
		// If we're clicking anywhere but the summary element, close dropdowns
		if (e.target.parentElement.nodeName.toUpperCase() !== "SUMMARY") {
			openDropdownEls.forEach((dropdown) => {
				dropdown.removeAttribute("open");
			});
		}
	}
}

document.addEventListener("click", closeOpenDropdowns);


/**
 * 
 * profile dropdown end
 */
