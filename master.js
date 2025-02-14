

// Start Settings 
document.querySelector(".gear").onclick = function () {
   this.classList.toggle("fa-spin");

   document.querySelector(".settings").classList.toggle("open")
}

// switch color option
const colorLi = document.querySelectorAll(".color-list li");

// loop on all li
colorLi.forEach(li => {

   //click on every li 
   li.addEventListener("click", (e) => {

      //set color on root
      document.documentElement.style.setProperty("--main-color", e.currentTarget.dataset.color)

      //set color on local storage
      window.localStorage.setItem("color", e.currentTarget.dataset.color);

      handleActive(e);
   })
});

// check if there is an item in localstorage
if (window.localStorage.getItem("color") !== null) {
   // if yes , change the root value with it
   document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("color"));
   // if yes , loop on all li to remove active calss
   colorLi.forEach(element => {

      //remove class active from all active elements
      element.classList.remove("active");

      //add active class if dataset.color equal to localstorage
      if (element.dataset.color === window.localStorage.getItem("color")) {

         //add active class
         element.classList.add("active")
      }
   })
}


// switch background option
const backgroundOP = document.querySelectorAll(".option-box span");
let backgroundOption = true;

let backgroundInterval;
// loop on all span
backgroundOP.forEach(span => {

   //click on every span 
   span.addEventListener("click", (e) => {
      //loop on all elements
      handleActive(e)

      if (e.currentTarget.dataset.background === "yes") {

         backgroundOption = true;
         backgroundEngine();
      } else {

         backgroundOption = false;
         clearInterval(backgroundInterval)
      }
      //set background-option on local storage
      window.localStorage.setItem("background-option", e.currentTarget.dataset.background)
      handleActive(e)
   })
});

// check if there is an item in localstorage
if (window.localStorage.getItem("background-option") !== null) {
   if (window.localStorage.getItem("background-option") === "yes") {
      backgroundOption = true;
      backgroundEngine();
   } else {
      backgroundOption = false;
      clearInterval(backgroundInterval)
   }
   backgroundOP.forEach((element) => {
      element.classList.remove("active")
   })
   if (window.localStorage.getItem("background-option") === "yes") {
      document.querySelector(".option-box .yes").classList.add("active")
   }else {
      document.querySelector(".option-box .no").classList.add("active")
   }
}else {
   backgroundOption = true;
   backgroundEngine();
}

// End Settings 
// Start landingpage 
let landingPage = document.querySelector('.landing-page');

let imgsArray = ["landing1.jpg", "landing2.jpg", "landing3.jpg", "landing4.jpg"];




function backgroundEngine() {
   if (backgroundOption) {
      backgroundInterval = setInterval(() => {
         let randomNumber = Math.floor(Math.random() * imgsArray.length);
         landingPage.style.backgroundImage = `url('images/${imgsArray[randomNumber]}')`;
      }, 10000)
   }

}
// End Landingpage 

let mySkills = document.querySelector(".Skills");

window.onscroll = function() {

   // get skills offset Top
   let skillsOffsetTop = mySkills.offsetTop;
   
   // get skills offset Height
   let skillsOffsetHeight = mySkills.offsetHeight;
   
   console.log(skillsOffsetHeight)
   // get windows height

   let windowHeight = this.innerHeight;

   // get scrollVertically
   let windowScrollTop = this.pageYOffset;


   if (windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)) {
      let skills = document.querySelectorAll(".Skills .skill-progress .skill-box span");
      skills.forEach(span => {
         span.style.width = span.dataset.progress;
      });
   }
}

//Gallery Section 

let myGallery = document.querySelectorAll(".our-gallery .img-box img");

   myGallery.forEach(img => {
      img.addEventListener("click" , (e) => {
         //create overlay
         let overlay = document.createElement("div");
         overlay.className = "popup-overlay"
         document.body.appendChild(overlay);
         // create popup box

         let popupBox = document.createElement("div");
         popupBox.className = "popup-box";

         
         if(img.alt != null) {
            let popupHeader = document.createElement("h3");
            popupHeader.className = "popup-header"
            let popupHeaderText = document.createTextNode(img.alt);
            popupHeader.appendChild(popupHeaderText);
            popupBox.appendChild(popupHeader);
         }
         // create popup img
         let popupImage = document.createElement("img");
         popupImage.src = img.src;

         // append them 
         popupBox.appendChild(popupImage);
         document.body.appendChild(popupBox)

         // create close span

         let closeSpan = document.createElement('span');
         closeSpan.className = "close-span";
         let closeSpanText = document.createTextNode('X');

         closeSpan.appendChild(closeSpanText);

         popupBox.appendChild(closeSpan);

         closeSpan.onclick = function () {
            popupBox.remove();
            overlay.remove();
         }
   })

})

// clear all options

document.querySelector(".reset-option .reset-button").onclick = function () {
   localStorage.clear();
   window.location.reload();
}



// handleactive function 

function handleActive(ev) {
         //loop on all elements
         ev.currentTarget.parentElement.querySelectorAll('.active').forEach(element => {
            //remove active from all elements
            element.classList.remove("active");
         })
         // add active class to clicked li
         ev.currentTarget.classList.add("active")
}

document.querySelector(" nav .toggle-menu i").onclick = function () {
   document.querySelector("nav ul").classList.toggle("open");
}


