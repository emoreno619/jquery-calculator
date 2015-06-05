var values = [];
var opVal = -1;
var aValue = "0";

$(function(){
	
	displayValue(aValue);
	
	$("span").click( function(event){
	
		var pressedButton = $(this);

		if ($(this).hasClass("operator")){
		
			if (pressedButton.html() == 'x'){

				opVal = 0;
				if(aValue != "0")
					values.push(aValue);
				aValue = "0"
				console.log(values)
				if (values.length == 2)
					multiply(values);
			}
			else if (pressedButton.html() == '-'){

				opVal = 1;
				if(aValue != "0")
					values.push(aValue);
				aValue = "0"

				if (values.length == 2)
					subtract(values);
			}
			else if (pressedButton.html() == '+'){
	
				opVal = 2;
				if(aValue != "0")
					values.push(aValue);
				aValue = "0"

				if (values.length == 2)
					add(values);
			}
			else if (pressedButton.html() == '='){
				if (values.length < 2)
					values.push(aValue)
				equals(values);
			}
			else if (pressedButton.html() == 'C'){
	
				clear(values);
			}	
			else{

				opVal = 3;
				if(aValue != "0")
					values.push(aValue);
				aValue = "0"
				 console.log(values)
				if (values.length == 2)
					divide(values);
			}
				
		} else {
				if(aValue == "0"){
					aValue = "";
					aValue += pressedButton.html();
					displayValue(aValue)
				} else {
					displayValue($('#screen').html() + pressedButton.html())
					aValue += pressedButton.html();
				}
		}
	})

	function displayValue(value){
			$('#screen').html(value);
	}

	function arrClean(valuesArr){
		valuesArr.splice(0,2)
		opVal = -1;
	}

	function add(valuesArr){
		aValue = parseInt(valuesArr[0]) + parseInt(valuesArr[1])
		arrClean(valuesArr)
		displayValue(aValue)
	}

	function subtract(valuesArr){
		aValue = valuesArr[0] - valuesArr[1]
		displayValue(aValue)
		arrClean(valuesArr)
	}

	function multiply(valuesArr){
		aValue = valuesArr[0] * valuesArr[1]
		displayValue(aValue)
		arrClean(valuesArr)
	}

	function divide(valuesArr){
		aValue = valuesArr[0] / valuesArr[1]
		displayValue(aValue)
		arrClean(valuesArr)
	}

	function clear(valuesArr){
		aValue = "0";
		displayValue(aValue)
		arrClean(valuesArr)
	}

	function equals(valuesArr){
		var result = 0;
		if (opVal == 0)
			multiply(valuesArr);
		else if (opVal == 1)
			subtract(valuesArr);
		else if (opVal == 2)
			add(valuesArr);
		else if (opVal == 3)
			divide(valuesArr);
		else
			displayValue(valuesArr[0]);
		arrClean(valuesArr)
	}
})