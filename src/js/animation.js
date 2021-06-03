let test = document.getElementById("vader-enter-logo");

let left = document.getElementById("vader-left");
let right = document.getElementById("vader-right");

let v1 = document.getElementById("V-1");
let v2 = document.getElementById("V-2");
let v3 = document.getElementById("V-3");
let v4 = document.getElementById("V-4");
let v5 = document.getElementById("V-5");

let vflame2 = document.getElementById("vader-flame");

const translateX = "translate-x-32"
const translateY = "translate-y-32"
function openDoor() {

  vflame2.classList.add("scale-120");
  v1.classList.add(translateX);


  v2.classList.add(translateX);
  v2.classList.add(translateY);

  v3.classList.add(translateY);

  v4.classList.add(`-${translateX}`);
  v4.classList.add(translateY);


  v5.classList.add(`-${translateX}`);
  v5.classList.add(`-${translateY}`);

  document.getElementById("enter-text-event").classList.add("z-50");
}

function closeDoor() {
  vflame2.classList.remove("scale-120");
  v1.classList.remove(translateX);


  v2.classList.remove(translateX);
  v2.classList.remove(translateY);

  v3.classList.remove(translateY);

  v4.classList.remove(`-${translateX}`);
  v4.classList.remove(translateY);

  v5.classList.remove(`-${translateX}`);
  v5.classList.remove(`-${translateY}`);

  document.getElementById("enter-text-event").classList.remove("z-50");
}

test.addEventListener("mouseenter", function (event) {
  console.log("open door");
  openDoor();
}, false);

test.addEventListener("mouseleave", function (event) {
  console.log("close door");
  closeDoor();
}, false);

document.querySelector("#enter-text-event").addEventListener("click", enterClicked)


//SETTINGS CLICK EVENT
document.addEventListener('click', function (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('.swap-settings-btn')) return;
  // Don't follow the link
  event.preventDefault();
  // Log the clicked element in the console
  console.log("SETTINGS BTN CLICKED");
}, false);

function enterClicked() {
  let vaderportal = document.getElementById("vader-portal");
  let vetherportal = document.getElementById("vether-portal");
  let vflame = document.getElementById("vader-flame-2");

  slideDown(vaderportal, 1000);
  slideDown(vetherportal, 2000);
  slideDown(vflame, 3000);
  closeDoor();
  document.getElementById("enter-text-event").classList.add("hidden");
}

// ** FADE OUT FUNCTION **
function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

// ** FADE IN FUNCTION **
function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

/* SLIDE UP */
let slideUp = (target, duration = 500) => {

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

/* SLIDE DOWN */
let slideDown = (target, duration = 500) => {

  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'flex';
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

/* SLIDE TOGGLE */
var slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}
