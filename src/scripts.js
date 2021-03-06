//Duda Config
const data = {
	config: {
		loginButtonText: 'Client Login',
		firm_uuid: '<p class="rteBlock">8411ad35-a3ae-44d7-9a69-9637635f425a</p>'
	}
};

//START DUDA WIDGET

//Load NPM dependencies
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

getFirmUUID();

//Get Firm UUID
function getFirmUUID() {
	const firmUUID = data.config.firm_uuid.includes('<p class="rteBlock">') ? jQuery(data.config.firm_uuid).text() : data.config.firm_uuid;
	$.getScript('https://login.mycase.com/customer_websites/login_javascript.js').done(() => {
		$('#mycase-login-form').attr('data-firm-id', firmUUID);
	});
}

//Show modal function
function showModal() {
	$('#modal').addClass('show-modal').appendTo($('body'));
	disableBodyScroll(document.querySelector('#modal'));
}

//Close modal function
function closeModal() {
	$('#modal').removeClass('show-modal');
	enableBodyScroll(document.querySelector('#modal'));
}

//Show modal events
$(document).on('click', '#mycase-login-btn', e => {
	e.preventDefault();
	showModal();
});

//Close modal events
$(document).on('click', '#close-modal', e => {
	e.preventDefault();
	closeModal();
});

$(document).on('click', '.modal-overlay', () => {
	closeModal();
});

$(document).on('keyup', '#modal', e => {
	if (e.key === 'Escape') {
		closeModal();
	}
});
