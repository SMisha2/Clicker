let count = 0;
let count2 = 0;
let timeLeft = 10;
let timerId;
let cps = 0;
let best_cps = 0;
let best_score = 0;
let timeFirst = 10;
let Games = 0;

const cpsDisplay = document.getElementById("cps");
const clickBtn = document.getElementById("clickbtn");
const timeDisplay = document.getElementById("time");
const countDisplay = document.getElementById("count");

const nP2 = document.getElementById("nP2"); 
const nM2 = document.getElementById("nM2"); 
const seconds = document.getElementById("seconds"); 
const sp1 = document.getElementById("startBtn"); 

function nPlus() {
    timeFirst = timeFirst + 1;
    timeLeft = timeFirst; 
    timeDisplay.textContent = timeLeft;
    
    if (seconds && timeFirst % 10 === 1 && timeFirst % 100 !== 11) {
        seconds.textContent = " секунду";
    } else if (seconds) {
        seconds.textContent = " секунд";
    }
}

function nMinus() {
    if (timeFirst <= 1) return; 
    timeFirst = timeFirst - 1;
    timeLeft = timeFirst; 
    timeDisplay.textContent = timeLeft;
    
    if (seconds && timeFirst % 10 === 1 && timeFirst % 100 !== 11) {
        seconds.textContent = " секунду";
    } else if (seconds) {
        seconds.textContent = " секунд";
    }
}

clickBtn.addEventListener("click", () => {
    count = count + 1;
    count2 = count2 + 1;
    countDisplay.textContent = count;
    Click(); 
});

function StartGame() {
    if (nP2) nP2.disabled = true;
    if (nM2) nM2.disabled = true;
    
    count = 0;
    cps = 0;
    cpsDisplay.textContent = cps;
    countDisplay.textContent = count;
    
    timeLeft = timeFirst; 
    timeDisplay.textContent = timeLeft;
    clickBtn.disabled = false;
    
    clearInterval(timerId); 
    
    timerId = setInterval(() => {
        timeLeft = timeLeft - 1;
        timeDisplay.textContent = timeLeft;
        
        const bestScoreDisplay = document.getElementById("best_score");
        if (count > best_score) {
            best_score = count;
        }
        if (bestScoreDisplay) bestScoreDisplay.textContent = best_score;
        
        const bestCpsDisplay = document.getElementById("best_cps");
        if (best_cps < cps) {
            best_cps = cps;
        }
        if (bestCpsDisplay) bestCpsDisplay.textContent = best_cps;
        
        if (best_cps >= 10 && best_cps < 15) Gradient1();
        else if (best_cps >= 15 && best_cps < 20) Red1();
        else if (best_cps >= 20) startShake1();
        
        if (best_score >= 80 && best_score < 110) Gradient2();
        else if (best_score >= 110 && best_score < 180) Red2();
        else if (best_score >= 180) startShake2();

        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            clickBtn.disabled = true;
            alert("Время вышло! Вы кликнули " + count + " раз.");
            
            timeLeft = timeFirst; 
            timeDisplay.textContent = timeLeft;
            
            if (nP2) nP2.disabled = false;
            if (nM2) nM2.disabled = false;
            
            Games = Games + 1;
            if (Games > 0 && sp1) {
                sp1.textContent = "Заново";
            }
        }
    }, 1000);
}

setInterval(() => {
    cps = count2;
    cpsDisplay.textContent = cps;
    count2 = 0; 
}, 1000);

function Gradient1() {
    const element2 = document.getElementById("shakeText");
    if (!element2) return;
    element2.classList.remove("best1");
    void element2.offsetWidth;
    element2.classList.add("best1");
}

function Gradient2() {
    const element2 = document.getElementById("beast");
    if (!element2) return;
    element2.classList.remove("best2");
    void element2.offsetWidth;
    element2.classList.add("best2");
}

function startShake1() {
    const element2 = document.getElementById("shakeText");
    if (!element2) return;
    element2.classList.remove("shaking1");
    void element2.offsetWidth;
    element2.classList.add("shaking1");
}

function startShake2() {
    const element2 = document.getElementById("beast");
    if (!element2) return;
    element2.classList.remove("shaking2");
    void element2.offsetWidth;
    element2.classList.add("shaking2");
}

function Click() {
    const element2 = document.getElementById("clickbtn");
    if (!element2) return;
    element2.classList.remove("click");
    void element2.offsetWidth;
    element2.classList.add("click");
}

function Red1() {
    const element2 = document.getElementById("shakeText");
    if (!element2) return;
    element2.classList.remove("red1");
    void element2.offsetWidth;
    element2.classList.add("red1");
}

function Red2() {
    const element2 = document.getElementById("beast");
    if (!element2) return;
    element2.classList.remove("red2");
    void element2.offsetWidth;
    element2.classList.add("red2");
}
