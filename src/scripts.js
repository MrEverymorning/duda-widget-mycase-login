//Get MyCase JS
$.getScript('https://login.mycase.com/customer_websites/login_javascript.js').done(() => {
	console.log('External scripts loaded successfully.');
});

//Show Modal
function showModal() {
	$('#modal').addClass('show-modal');
	$('body').addClass('body-fix');
}

//Close Modal
function closeModal() {
	$('#modal').removeClass('show-modal');
	$('body').removeClass('body-fix');
}

//Show modal on contact us button click
$(document).on('click', '#mycase-login-btn', e => {
	e.preventDefault();
	showModal();
});

//Close modal
$(document).on('click', '#close-modal', e => {
	e.preventDefault();
	closeModal();
});

$(document).on('click', '.modal-overlay', () => {
	closeModal();
});
