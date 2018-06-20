var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
/*
for (let i = 1; i <= 5; i++) {
	var newImage = document.createElement('img');
	newImage.setAttribute('src', `images/pic${i}.jpg`);
	thumbBar.appendChild(newImage);

	newImage.onclick = function () {
		displayedImage.setAttribute('src', `images/pic${i}.jpg`);
	}
}
*/


for (var i = 1; i <= 5; i++) {
	var newImage = document.createElement('img');
	newImage.setAttribute('src', `images/pic${i}.jpg`);
	thumbBar.appendChild(newImage);

	// err:
	/*
		newImage.onclick = function () {
	        alert( i )
		}
	*/

	newImage.onclick = (function (i) {
		return function () {
			//alert(i)
			displayedImage.setAttribute('src', `images/pic${i}.jpg`);
		}
	})(i)
}

/* Wiring up the Darken/Lighten button */


var num = 0 ;
btn.onclick = function () {
	num++;
	if(num%2===1){
		overlay.style.background ='rgba(0,0,0,0.5)';
		btn.innerHTML = 'Lighter'
	}else{
		overlay.style.background ='rgba(0,0,0,0)';
		btn.innerHTML = 'Darken'
	}
}