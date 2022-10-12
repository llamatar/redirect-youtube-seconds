if (window.location.href.includes('/shorts/')) {
	window.location.href = window.location.href.replace('/shorts/','/watch?v=');
}
console.log('redirect-youtube-shorts extension loaded.');