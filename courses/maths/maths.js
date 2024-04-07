document.getElementById('enroll-btn').addEventListener('click', function() {
    alert('You have successfully enrolled in the Mathematics course!');
});


const url = 'https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30981798d1mshfb50ed1cedcdf79p12454cjsn3d55d4edfc54',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}