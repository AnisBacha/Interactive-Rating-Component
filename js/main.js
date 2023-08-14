

const button = document.querySelector(".main__btn");
let choiceValue = 1;

const choice1 = document.querySelector(".main__label1");
const choice2 = document.querySelector(".main__label2");
const choice3 = document.querySelector(".main__label3");
const choice4 = document.querySelector(".main__label4");
const choice5 = document.querySelector(".main__label5");



const changeBgColor = () => {
    if(document.getElementById('firstChoice').checked == true){
        choice1.style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    else if(choice1.matches(':hover')){
        choice1.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
    else{
        choice1.style.backgroundColor = "hsl(214, 15%, 21%)";
    }
    
    if(document.getElementById('secondChoice').checked == true){
        choice2.style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    else if(choice2.matches(':hover')){
        choice2.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
    else{
        choice2.style.backgroundColor = "hsl(214, 15%, 21%)";
    }
    
    if(document.getElementById('thirdChoice').checked == true){
        choice3.style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    else if(choice3.matches(':hover')){
        choice3.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
    else{
        choice3.style.backgroundColor = "hsl(214, 15%, 21%)";
    }
    
    if(document.getElementById('fourthChoice').checked == true){
        choice4.style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    else if(choice4.matches(':hover')){
        choice4.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
    else{
        choice4.style.backgroundColor = "hsl(214, 15%, 21%)";
    }
    
    if(document.getElementById('fifthChoice').checked == true){
        choice5.style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    else if(choice5.matches(':hover')){
        choice5.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
    else{
        choice5.style.backgroundColor = "hsl(214, 15%, 21%)";
    }
}

let t=setInterval(changeBgColor,50);


button.addEventListener("click",(event) => {
    event.preventDefault();
    iniApp();
});


const iniApp = () => {
    var getSelectedValue = document.querySelector( 'input[name="rating"]:checked');   
    if(getSelectedValue != null) {   
        document.querySelector(".numberSelected").textContent = getSelectedValue.value;
        displayTyState();
    }

}

const displayTyState = () => {
    document.querySelector(".main__thankyoustate").style.display = "block";
    document.querySelector(".main__ratingstate").style.display = "none";
}