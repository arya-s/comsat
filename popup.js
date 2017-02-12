browser.storage.local.get(['username', 'audioNotification']).then(function(items) {

	username.value = items.username;
	audio_notification.checked = items.audioNotification;

});

username.onblur = function () {
	browser.storage.local.set({username: username.value});
};

audio_notification.onclick = function () {
	browser.storage.local.set({audioNotification: audio_notification.checked});
};
