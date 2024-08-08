let homeScoreElement = document.getElementById("home-score");
let guestScoreElement = document.getElementById("guest-score");

let homeRealScore = 0
let guestRealScore = 0

function homeIncrement1(){
    homeRealScore += 1
    if(homeRealScore >= 10){
        homeScoreElement.textContent = homeRealScore
    }
    else{
        homeScoreElement.textContent = "0" + homeRealScore
    }
    highLightHigherScore()
}

function homeIncrement2(){
    homeRealScore += 2
    if(homeRealScore >= 10){
        homeScoreElement.textContent = homeRealScore
    }
    else{
        homeScoreElement.textContent = "0" + homeRealScore
    }
    highLightHigherScore()
}

function homeIncrement3(){
    homeRealScore += 3
    if(homeRealScore >= 10){
        homeScoreElement.textContent = homeRealScore
    }
    else{
        homeScoreElement.textContent = "0" + homeRealScore
    }
    highLightHigherScore()
}

function guestIncrement1(){
    guestRealScore += 1
    if (guestRealScore >= 10){
        guestScoreElement.textContent =  guestRealScore
    }
    else{
        guestScoreElement.textContent = "0" + guestRealScore
    }
    highLightHigherScore()
}

function guestIncrement2(){
    guestRealScore += 2
    if (guestRealScore >= 10){
        guestScoreElement.textContent =  guestRealScore
    }
    else{
        guestScoreElement.textContent = "0" + guestRealScore
    }
    highLightHigherScore()
}

function guestIncrement3(){
    guestRealScore += 3
    if (guestRealScore >= 10){
        guestScoreElement.textContent =  guestRealScore
    }
    else{
        guestScoreElement.textContent = "0" + guestRealScore
    }
    highLightHigherScore()
}

function reset(){

    homeScoreElement.classList.remove("highlight")
    guestScoreElement.classList.remove("highlight")

    homeScoreElement.textContent = "00"
    guestScoreElement.textContent = "00"
    homeRealScore = 0
    guestRealScore = 0
}

function highLightHigherScore(){

    homeScoreElement.classList.remove("highlight")
    guestScoreElement.classList.remove("highlight")

    if(homeRealScore>guestRealScore){
        homeScoreElement.classList.add("highlight")
    }
    else{
        guestScoreElement.classList.add("highlight")
    }
}