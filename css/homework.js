
function min(num1, num2) {
	if (num1 > num2) {
		return num2;
	}
		
	else if (num2 > num1) {
		return num1;
	}

	else {
		return "no!"; 
	}
}
min (4,15)




var str = "";
while (str.length < 7) {
	str = str + "#";
	console.log(str);
}
