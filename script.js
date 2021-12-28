let tipSelector = document.
querySelector('[data-range]');

let inputAmount = document.
getElementById('amount');

let resultDiv	= 	document.
querySelector('[data-result-div]');

// If input value is entered it will show the result div

function showResult() {
		if (inputAmount.value !== '' ) {
				resultDiv.classList.add('change');
		}
}

function hideResult() {
if (inputAmount.value == '' && tipSelector.value == 0) {
		resultDiv.classList.remove('change');
		}
}

inputAmount.addEventListener('focus', showResult)
inputAmount.addEventListener('blur', hideResult)

//As the value of tip selector change the result menu will show up and value will be visible on tip output;

tipSelector.addEventListener('change', () => {



let resultDiv	= 	document.
querySelector('[data-result-div]');

//To Hide result div so it won't show forever lol 
if (tipSelector.value == 0 && inputAmount.value == 0) {
		resultDiv.classList.remove('change');
} else {
		resultDiv.classList.add('change');
}

let tipSelectorOutput = document.
querySelector('.range-output');

tipSelectorOutput.textContent = `${tipSelector.value}%`;

//calculating tip from amount value

let tip = inputAmount.value * (tipSelector.value/100)
	
//These elements are inside the result div

document.querySelector('.amount').innerHTML = `Amount: ${inputAmount.value}$`

document.querySelector('.calculated-tip').textContent = `Tip: ${tip.toFixed(2)}`

let finalAmount = Number(inputAmount.value) + Number(tip);

document.querySelector('.final-amount').textContent = `Final Amount: ${finalAmount.toFixed(2)}$`
		
})


//document.querySelector('.final-amount').textContent = "Final Amount:" + Number(inputAmount.value) + Number(tip); + "$"