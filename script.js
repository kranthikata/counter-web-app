let counterValueElement = document.getElementById("counterValue");
let decrementButtonElement = document.getElementById("decreaseButton");
let incrementButtonElement = document.getElementById("increaseButton");
let resetButtonElement = document.getElementById("resetButton");

decrementButtonElement.onclick = function(){
    counterValueElement.classList.remove("increment","reset");
    counterValue = counterValueElement.textContent;
    currentValue = parseInt(counterValue);
    updatedValue = currentValue - 1;
    counterValueElement.textContent = updatedValue;
    if (parseInt(counterValueElement.textContent) < 0){
        counterValueElement.classList.add("decrement");
    }
    else if(parseInt(counterValueElement.textContent) > 0){
        counterValueElement.classList.add("increment");
        counterValueElement.classList.remove("reset","decrement");
    }
    else{
        counterValueElement.classList.add("reset");
        counterValueElement.classList.remove("increment","decrement");
    }
}

incrementButtonElement.onclick = function(){
    counterValue = counterValueElement.textContent;
    currentValue = parseInt(counterValue);
    updatedValue = currentValue + 1;
    counterValueElement.textContent = updatedValue;
    if (parseInt(counterValueElement.textContent) > 0){
        counterValueElement.classList.add("increment");
        counterValueElement.classList.remove("decrement","reset");
    }
    else if(parseInt(counterValueElement.textContent) < 0){
        counterValueElement.classList.add("decrement");
        counterValueElement.classList.remove("reset","increment");
    }
    else{
        counterValueElement.classList.add("reset");
        counterValueElement.classList.remove("increment","decrement");
    }
}

resetButtonElement.onclick = function(){
    counterValueElement.textContent = 0;
    counterValueElement.classList.add("reset")
    counterValueElement.classList.remove("decrement","increment");
}