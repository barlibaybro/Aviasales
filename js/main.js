result.innerHTML = 0;
function getValue() {
	const adult = document.getElementById("adult");
	const kids = document.getElementById("kids");
	const price1 = 40000 //mng, day 5h-17h
	const price2 = 45000 //evening 18h-22h
	const price3 = 35000 //night 23h-4h
	const dtime = document.getElementById("dtime");
	if ((parseInt(adult.value) == 0) && (parseInt(kids.value) == 0)) {
		result.innerHTML = 0;
		alert("Please select the number of passengers!")
	}
	else if (parseInt(adult.value) == 0) {
		result.innerHTML = 0;
		alert("Children cannot fly without an adult, add at least 1 adult!")
	}
	else if ((parseInt(dtime.value) >= 5) && (parseInt(dtime.value) <= 17)) {
		result.innerHTML = price1 * (parseInt(adult.value) + 0.5 * parseInt(kids.value));
	}
	else if ((parseInt(dtime.value) >= 18) && (parseInt(dtime.value)) <= 22) {
		result.innerHTML = price2 * (parseInt(adult.value) + 0.5 * parseInt(kids.value));
	}
	else {
		result.innerHTML = price3 * (parseInt(adult.value) + 0.5 * parseInt(kids.value));
	}
}
