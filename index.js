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
const percentEl = document.querySelector('.percent');
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

//variables

let valueStrMemory = null;
let operatorMemory = null;



//Calculater Functions

const getValueAsStr = () => {

   const currentDisplayStr = displayEl.textContent;
     return currentDisplayStr.split(',').join('');

//const getValueAsStr = () => displayEl.textContent.split(',').join('');


const getValueAsNum = () => {
    return parseFloat (getValueAsStr());
}
};

const setStrAsValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.') {
       displayEl.textContent += '.';
       return;
    }
  const [numberStr, decimalStr] = valueStr.split('.'); //added numberStr here
  if (decimalStr) {
      displayEl.textContent = parseFloat(numberStr).toLocaleString() + '.' + decimalStr; }

      else {
           displayEl.textContent = parseFloat(numberStr).toLocaleString();
      }
};




const handleNumberClick = (numStr) => { //number keys handle
    const currentValueStr = getValueAsStr();
    
    if (currentValueStr ==='0') {
        setStrAsValue(numStr);
    } else {
        setStrAsValue(currentValueStr + numStr);
    }
};

const getValueAsNum = () => {

    return parseFloat(getValueAsStr());
}


//operator keys handle
const handleOperatorClick = (operator) => {   

    const currentValueStr = getValueAsStr();
    const currentValueNum = getValueAsNum();

     if (!valueStrMemory) {
         valueStrMemory = currentValueStr;
         operatorMemory = operator;
         setStrAsValue('0');
         return
     }

    valueStrMemory = performOperationStr();
    operatorMemory = operator;
    setStrAsValue('0');
 
};


//Calculater Event listeners - numbers and decimals
for (let i=0; i< numberElArray.length; i++) {

    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {

        handleNumberClick(i.toString());
    })
}

decimalEl.addEventListener('click', () => {

    const currentValueStr = getValueAsStr();
    
    if (!currentValueStr.includes ('.')) {
        setStrAsValue(currentValueStr + '.');

    }
})

//Calculater Event listeners - functions

acEl.addEventListener('click', () => {setStrAsValue('0'); 

valueStrMemory = null;
operatorMemory = null;

});



pmEl.addEventListener('click', () => { 
    const currentValueNum = getValueAsNum();
    const currentValueStr = getValueAsStr();

    if (currentValueStr === '-0') {
        setStrAsValue('0');
        return;
    }
    if (currentValueNum >= 0) {
        setStrAsValue ('-' + currentValueStr);
    } else { 
            setStrAsValue(currentValueStr.substring(1));
    }
});


percentEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100;
    setStrAsValue(newValueNum.toString());

    valueStrMemory = null;
    operatorMemory = null;

});


//Calculater Event listeners - operators

plusEl.addEventListener('click', () => {
    handleOperatorClick('plus');
});

minusEl.addEventListener('click', () => {
    handleOperatorClick('minus');
});

divideEl.addEventListener('click', () => {
    handleOperatorClick('divide');
});

multiplyEl.addEventListener('click', () => {
    handleOperatorClick('multiply');
});

equalsEl.addEventListener('click', () => {
    if (!valueStrMemory) {
        setStrAsValue(performOperationStr);
        
        valueStrMemory = null;
        operatorMemory = null;
    }


});

//Equals perform Function

const performOperationStr = () => {
 


    const currentValueNum = getValueAsNum();
    const valueNumMemory = parseFloat(valueStrMemory);
    
    let newValueNum;
    if (operatorMemory === 'plus') {
      newValueNum = valueStrMemory + currentValueNum;

    } else if (operatorMemory === 'minus') {
        newValueNum = valueNumMemory - currentValueNum;
    }

    else if (operatorMemory === 'multiply') {
       newValueNum = valueNumMemory - currentValueNum;
   }

   else if (operatorMemory === 'divide') {
       newValueNum = valueNumMemory - currentValueNum;
   }

return newValueNum.toString();


};


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

