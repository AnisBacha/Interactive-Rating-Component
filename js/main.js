

const button = document.querySelector(".main__btn");

const input = document.querySelectorAll(".main__input");


const labels = document.querySelectorAll('.main__label');
let clickedIndex = -1;

function setLabelBackgroundColor(index, color) {
    labels[index].style.backgroundColor = color;
}

for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", (event) => {
        if (clickedIndex !== -1) {
            setLabelBackgroundColor(clickedIndex, "hsl(214, 15%, 21%)");
        }
        clickedIndex = i;
        setLabelBackgroundColor(i, "hsl(217, 12%, 63%)");
    });

    labels[i].addEventListener("mouseenter", (event) => {
        if (i !== clickedIndex) {
            setLabelBackgroundColor(i, "hsl(25, 97%, 53%)");
        }
    });

    labels[i].addEventListener("mouseleave", (event) => {
        if (i !== clickedIndex) {
            setLabelBackgroundColor(i, "hsl(214, 15%, 21%)");
        }
    });
}

// Overall, the above code ensures that only one label has a distinct background color (the clicked label) while handling the appropriate background color changes during hover and mouse leave events for the other labels.
// I had a long code that involves checking for all the states of the element hover, clicked, not clicked with each label individually.
// later I set the foundation of the code with for loops which achieved its wanted result but there was a lot of problems.
// I used Chatgpt to try and fix this problem, here's the chat that bring me to this beautiful code.
// https://chat.openai.com/share/6fc1af9d-a8a6-4ff2-b5a1-b8d959bc203e 



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