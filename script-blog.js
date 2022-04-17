
const body = document.querySelector("body")
const lightTheme = document.querySelector(".light-theme")
const darkTheme = document.querySelector(".dark-theme");



function changeTheme() {
	console.log("hello")
	body.classList.toggle("dark");
}
darkTheme.addEventListener("click", changeTheme);
lightTheme.addEventListener("click", changeTheme);
