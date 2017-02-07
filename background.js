// The background script handles communication between the content script and the popup
// When the content script finished loading it pings the background for the initial state

var settings = {
	username: null,
	audioNotification: true
};

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {

	if (request.ping) {

		// Sending initial state to the content script
		sendResponse(settings);

	} else if (request.fromPopup) {

		// Sending popup settings state to the content script
		settings.username = request.username;
		settings.audioNotification = request.audioNotification;

		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, settings);
		});

	}

});
