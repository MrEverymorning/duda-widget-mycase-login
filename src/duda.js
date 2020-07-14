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

//Show Modal
function showModal() {
	$('#modal')
		.addClass('show-modal')
		.appendTo($('body'));
	disableBodyScroll(document.querySelector('#modal'));
}

//Close Modal
function closeModal() {
	$('#modal').removeClass('show-modal');
	enableBodyScroll(document.querySelector('#modal'));
}

//Show modal on contact us button click
$('#mycase-login-btn-link').on('click', e => {
	e.preventDefault();
	showModal();
});

//Close modal
$('#close-modal').on('click', e => {
	e.preventDefault();
	closeModal();
});

$('.modal-overlay').on('click', () => {
	closeModal();
});
