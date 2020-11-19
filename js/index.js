// Your code goes here
// Unique Event Listener 1 & 2 :  Mouse Enter/Leave Enlarges Selected A Tag and it returns to normal when Mouse Leaves
const navResize = document.querySelectorAll(".nav-link");
navResize.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = "scale(2)";
        element.style.transition = "all 0.3s";
    })
})

navResize.forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.style.transform = "scale(1)"
    })
})


//Unique Event Listener 3: Changing Image to a new image
const busImage = document.querySelector('.bus-img');
busImage.addEventListener('dblclick', () => {
    busImage.src = "img/bus.gif";
})

//Unique Event Listern 4: Click Event, changes background of Footer
const colorChange = document.querySelector("footer");
colorChange.addEventListener('click', () => {
    colorChange.style.backgroundColor = "dodgerblue";
})



//Unique Event Listern 5: Scroll Event- when scrolling to the bottom it will alert with message

window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrolled === scrollable) {
        alert('You have reached the bottom!')
    }
})



//Unique Event Listern 6: focus will turn input field blue
const focus = document.querySelector("input");
focus.addEventListener('focus', (event) => {
    event.target.style.background = "dodgerblue";
})


//Unique Event Listern 7: Wheel scroll over the Lets go H4 tag causes it to grow
const wheelEvent = document.querySelectorAll(".lets-go");
wheelEvent.forEach(element => {
    element.addEventListener('wheel', () => {
        element.style.transform = "scale(1.5)";
        element.style.transition = "all 0.3s";
    })
});



//Unique Event Listern 8:  Mousing over home container turns background blue
const mouseOver = document.querySelector(".home .intro");
mouseOver.addEventListener('mouseover', (event) => {
    event.target.style.background = "dodgerblue";
});
// setTimeout(function() {
//     event.target.style.background = "";
//   }, 500);
// }, false);



//Unique Event Listern 9:  Mouse Leave
const mouseLeave = document.querySelector(".home .intro");
mouseLeave.addEventListener('mouseleave', (event) => {
    event.target.style.background = "";
});


//Unique Event Listern 10:  resizing the window displayed

window.addEventListener("resize", () => {
    const heightOutput = document.querySelector('#height');
    const widthOutput = document.querySelector('#width');

    function reportWindowSize() {
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
    }
    window.onresize = reportWindowSize;
})