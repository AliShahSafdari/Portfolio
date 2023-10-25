
const collRight = document.getElementsByClassName("fa-chevron-right");
let collDown = document.getElementsByClassName("fa-chevron-down");

for (let i = 0; i < collRight.length; i++) {
  collRight[i].addEventListener("click", function() {
    let content = this.parentElement.nextElementSibling;;
    for (let j = 0; j < collRight.length; j++) {
      if (collRight[j] !== this) {
        collRight[j].style.display = "block";
        collDown[j].style.display = "none";
        collRight[j].parentElement.nextElementSibling.classList.add("web-top1")
        collRight[j].parentElement.parentElement.classList.add("list-skills-li-border");

      }
    }
    if (!content.classList.contains("web-top1")) {
      this.style.display = "block"; // Display "right" arrow
      this.nextElementSibling.style.display = "none"; // Display "down" arrow
      content.classList.add("web-top1");
      this.parentElement.parentElement.classList.remove("list-skills-li-border");

    } else {
      content.classList.remove("web-top1");
      this.style.display = "none"; // Hide "right" arrow
      this.nextElementSibling.style.display = "block"; // Hide "down" arrow
      this.parentElement.parentElement.classList.remove("list-skills-li-border");
    }
   });
 }
 for(let k=0; k< collDown.length; k++){
  collDown[k].addEventListener("click", function() {
    collRight[k].style.display = "block";
    collDown[k].style.display = "none";
    collRight[k].parentElement.nextElementSibling.classList.add("web-top1");
    collRight[k].parentElement.parentElement.classList.add("list-skills-li-border");

  });
 }

collRight[0].style.display = "none";
collDown[0].style.display = "block";
collRight[0].parentElement.nextElementSibling.classList.remove("web-top1");
collRight[0].parentElement.parentElement.classList.remove("list-skills-li-border");

