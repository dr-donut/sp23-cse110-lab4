for(const property in statistics) {
	if(property.charAt(0) == 'r')
		console.log(statistics[property]);
	else if(property % 2 == 1)
		console.log(statistics[property]);
}
