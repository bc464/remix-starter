const body = document.querySelector("body")
const lightTheme = document.querySelector(".light-theme")
const darkTheme = document.querySelector(".dark-theme");



function changeTheme() {
	
	body.classList.toggle("dark");
}
darkTheme.addEventListener("click", changeTheme);
lightTheme.addEventListener("click", changeTheme);

const bntNext = document.querySelectorAll(".next")
const previousBtn = document.querySelectorAll(".previous");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3")
let count = 1;

bntNext.forEach(myFunction)

function myFunction(item) {
	item.addEventListener("click", function(){
		count += 1;
		if(count == 2) {
			page1.style.display = "none"
			page2.style.display = "block"
		}
		else if(count == 3) {
			page2.style.display = "none"
			page3.style.display = "block"
		} 
	})
}
previousBtn.forEach(myFunction2)

function myFunction2(item) {
	item.addEventListener("click", function(){
		count -= 1;
		if(count == 2) {
			page3.style.display = "none"
			page2.style.display = "block"
		}
		else if(count == 1) {
			page2.style.display = "none"
			page1.style.display = "block"
		} 
	})
} 