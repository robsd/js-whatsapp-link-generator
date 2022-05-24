countryCode = document.getElementById('country-code');
number = document.getElementById('number');
message = document.getElementById('message');
displayLink = document.getElementById('display-link');

function generateLink() {
	if (countryCode.value && number.value) {
		link = 'https://wa.me/' + countryCode.value + number.value;

		if (message.value) {
			link += '?text=' + encodeURIComponent(message.value);
		}

		displayLink.value = link;
	}
}