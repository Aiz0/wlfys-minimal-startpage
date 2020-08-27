/*
  Thanks to POWELL Kevin for his YouTube tutorial.
  https://www.youtube.com/watch?v=wodWDIdV9BY
*/


let lightTheme = localStorage.getItem('lightTheme');
const themeToggle = document.querySelector('#theme-toggle');

const enableLightTheme = () => {
	document.body.classList.add('lightTheme');
	localStorage.setItem('lightTheme', 'enabled');
}

const disableLightTheme = () => {
	document.body.classList.remove('lightTheme');
	localStorage.setItem('lightTheme', null);
}

if (lightTheme === 'enabled') {
	enableLightTheme();
}

themeToggle.addEventListener('click', () => {
	lightTheme = localStorage.getItem('lightTheme');
	if (lightTheme !== 'enabled') {
		enableLightTheme();
		console.log(lightTheme);
	} else {
		disableLightTheme();
		console.log(lightTheme);
	}
});
