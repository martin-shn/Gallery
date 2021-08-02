function openCanvas() {
    $('.guest-name').removeClass('is-invalid');
    $('.guest-email').removeClass('is-invalid');

    $('.guest-name').val('');
    $('.guest-email').val('');
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}
