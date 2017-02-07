chrome.runtime.onInstalled.addListener(function (details) {

    if (details.reason === "install") {
    	localStorage.setItem('shieldbattery_audionotification', true);
    }

});

username.value = localStorage.getItem('shieldbattery_username') || '';
audio_notification.checked = JSON.parse(localStorage.getItem('shieldbattery_audionotification'));
notifyBackground();

username.onkeyup = function () {

	localStorage.setItem('shieldbattery_username', username.value.trim().toLowerCase());
	notifyBackground();

};

audio_notification.onclick = function () {

	localStorage.setItem('shieldbattery_audionotification', audio_notification.checked);
	notifyBackground();

};

function notifyBackground () {

	var data = {
		fromPopup: true,
		username: localStorage.getItem('shieldbattery_username'),
		audioNotification: localStorage.getItem('shieldbattery_audionotification')
	};

	// Send to background
	chrome.extension.sendMessage(data);

};
