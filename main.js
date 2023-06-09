const openNav = document.querySelector('#open-nav')
const closeNav = document.querySelector('#close-nav')
const listItems = document.querySelector('.list-items-mobile')

openNav.addEventListener('click', () => {
  listItems.classList.toggle('active')
})

closeNav.addEventListener('click', () => {
  listItems.classList.remove('active')
})


var scrollTrigger = 10;

window.onscroll = function headerInverted() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector("header").classList.add('inverted');
  } else {
    document.querySelector("header").classList.remove('inverted');
  }
};



//Costum Cursor
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursorinner.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursorinner.classList.remove('hover');
  });
})


 //Fading Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.fadeLeft')
const hiddenElements2 = document.querySelectorAll('.fadeRight')
const hiddenElements3 = document.querySelectorAll('.fadeUp')
hiddenElements.forEach((el) => observer.observe(el))
hiddenElements2.forEach((el) => observer.observe(el))
hiddenElements3.forEach((el) => observer.observe(el))


const listItemClicked = Array.from(document.querySelectorAll('.list-item'))

listItemClicked.forEach(item => item.addEventListener('click', ()=> {
  listItems.classList.remove('active')
}))




var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-120,0],
    easing: "easeOutExpo",
    duration: 1700,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 500000
  });

  var textWrapper = document.querySelector('.ml15');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
