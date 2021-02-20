//Calculator Elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');

const displayEl = document.querySelector('.display');
const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');

const divideEl = document.querySelector('.divide');
const multiplyEl = document.querySelector('.multiply');
const minusEl = document.querySelector('.minus');
const plusEl = document.querySelector('.plus');
const equalsEl = document.querySelector('.equals');
const percentageEl = document.querySelector('.percent');
const decimalEl = document.querySelector('.decimal');

const zeroEl = document.querySelector('.zero');
const oneEl = document.querySelector('.one');
const twoel = document.querySelector('.two')

const threeEl = document.querySelector('.three');
const fourEl = document.querySelector('.four');
const fiveEl = document.querySelector('.five');
const sixEl = document.querySelector('.six');

const sevenEl = document.querySelector('.seven');
const eightEl = document.querySelector('.eight');
const nineEl = document.querySelector('.nine');

const numberElArray = [zeroEl, oneEl, twoel, threeEl, fourEl, fiveEl, sixEl, sevenEl, eightEl, nineEl];


//Calculater Functions

const getValueAsStr = () => {

    const currentDisplayStr = displayEl.textContent;
    return currentDisplayStr.split(',').join('');
}

const handleNumberClick = (numStr) => {
    const currentDisplayStr = getValueAsStr();
    
    if (currentDisplayStr ==='0') {
        displayEl.textContent = numStr;
    } else {

displayEl.textContent = parseFloat(currentDisplayStr + numStr).toLocaleString();
}
};

const getValueAsNum = () => {

    return parseFloat(getValueAsStr());
}


//Calculater Event listeners
for (let i=0; i< numberElArray.length; i++) {

    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {

        handleNumberClick(i.toString());
    })

}

decimalEl.addEventListener('click', () => {

    const currentDisplayStr = getValueAsStr();
    
    if (!currentValueStr.includes ('.')) {
        displayEl.textContent = currentValueStr + '.';
    }
})

// Time set up

const updateTime = () => {
    const currentTime = new Date();
    
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    hourEl.textContent = currentHour;
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');
}

setInterval(updateTime, 1000);

updateTime();

