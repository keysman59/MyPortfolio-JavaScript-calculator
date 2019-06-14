function digit(num1) {

	var result;

	if(document.getElementById('op').value) {
		result = document.getElementById('n2').value;
		document.getElementById('n2').value = ''+result+num1;//conv(result,num1);

	} else {
		result = document.getElementById('n1').value;
		document.getElementById('n1').value = ''+result+num1;//conv(result,num1);
	}
}

function action(op1) {
	document.getElementById('op').value = op1;
}

function calculate() {
	var plus = "+";
	var minus = "-";
	var multiply = "*";
	var share = "/";
	var num1 = Number(document.getElementById('n1').value);
	var num2 = Number(document.getElementById('n2').value);
	if(plus == document.getElementById('op').value) {
		result =+ num1 +(+ num2);
	} else if (minus == document.getElementById('op').value) {
		result = num1 - num2;		
	} else if (multiply == document.getElementById('op').value) { 
		result = num1 * num2;		
	} else if (share == document.getElementById('op').value) { 
		result = num1 / num2;		
	}
	document.getElementById('eq').value = result;
}


function onmyinput() {

		console.log("g");
	var n1 = document.getElementById('n1');
	var n2 = document.getElementById('n2');
	var op = document.getElementById('op');


	if(-1 === "+-*/".indexOf(op.value.substr(-1))) {
		op.value = "";
	} else if((n1) && (n2) && (op)) {		
		op.value = op.value.substr(-1);
		calculate();
	}

}



let red1 = document.getElementById('colorred1');
let red2 = document.getElementById('colorred2');


let colorRed = function (event) {
	console.log(this);
	console.log(event);
	this.classList.add('hover');
	this.style.backgroundColor="red";
}

let colorRedout = function (event) {
	console.log(this);
	console.log(event);
	this.classList.remove('hover');
}

red2.onmouseover = colorRed;
red2.onmouseout = colorRedout;

red1.onmouseover = colorRed;
red1.onmouseout = colorRedout;


let elements = document.querySelectorAll('.hovered');

for (let i = 0; i < elements.lenght; i++) {
	elements[i].onmouseover=colorRed;
	elements[i].onmouseout=colorRed;
}








/*	let z = "";//String(a) + String(b);
	if(a) {
		z = String(a) + String(b);
		console.log("1:"+z);	
	} else {
		z = String(b);
		console.log("2:"+z);
	}
	return z;*/









/*function plus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1); // parseInt проверяет содержимое этого инпута, если есть возможность преобразования этого элемента в число, то преобразует.
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1+num2;

	//innerHTML
	document.getElementById('out').innerHTML = result;
}

function minus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1); // parseInt проверяет содержимое этого инпута, если есть возможность преобразования этого элемента в число, то преобразует.
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1-num2;

	//innerHTML
	document.getElementById('out').innerHTML = result;
}*/