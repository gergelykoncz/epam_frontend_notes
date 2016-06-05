window.addEventListener('load', function (e) {
	e.first = 'attached';
});

window.addEventListener('load', function (e) {
	e.second = 'attached';
});

window.addEventListener('load', function (e) {
	e.third = 'attached';
});

window.addEventListener('load', function (e) {
	console.log(e.first, e.second, e.third, e.fourth);
});

window.addEventListener('load', function (e) {
	e.fourth = 'attached';
});

window.addEventListener('load', function (e) {
	console.log(e.first, e.second, e.third, e.fourth);
});