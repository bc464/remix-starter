const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".navigation");
const body = document.querySelector("body")
const lightTheme = document.querySelector(".light-theme")
const darkTheme = document.querySelector(".dark-theme");

btnNavEl.addEventListener("click", function(){
	
	navbarEl.classList.toggle("nav-open")
	
});

function changeTheme() {
	body.classList.toggle("dark");
}
darkTheme.addEventListener("click", changeTheme);
lightTheme.addEventListener("click", changeTheme);
