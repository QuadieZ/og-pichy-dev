const sc = document.querySelector('section');
window.addEventListener('scroll',() => {
    let y = window.scrollY;
    sc.style.clipPath = "circle(" + y + "px at center)"
})

let ham = document.getElementById('ham')
let hamnav = document.getElementById('hamnav')
ham.onclick = () => {
    if (hamnav.style.display === '') {
        hamnav.style.display = 'block'
    } else {
        hamnav.style.display = ''
    }
}

let interDate = new Date("Nov 16, 2020").getTime()

let x = setInterval(() => {
    let now = new Date().getTime();
    let d = interDate - now;

    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((d % (1000 * 60)) / 1000);

    let timer = document.getElementById('timer')
    timer.innerHTML = days + " Days " + hours + " Hours " + minutes + " Mins " + seconds + " Secs " 
})

if (d < 0) {
    clearInterval(x);
    timer.innerHTML = "Good Luck on the interview :)";
  }
}, 1000);

let snd = new Audio("./assets/yay.mp3"); // buffers automatically when created
snd.play();

let easter = document.getElementById('easter')
easter.onclick = () => {
    snd.play();
}
