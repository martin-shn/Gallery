'use strict';
// console.log('Starting up');

$(document).ready(initPage);
// document.querySelector('.guest-email').addEventListener('focusout', function () {
//     document.querySelector('.guest-name').checkValidity();
// });

var gProjs = [];

function initPage() {
    createProjs();
    renderProjs();
    renderModals();
    $('.email-btn').on('click', function () {
        var isValid = true;
        $('.guest-name').removeClass('is-invalid');
        $('.guest-email').removeClass('is-invalid');
        var guestName = $('.guest-name').val();
        var guestEmail = $('.guest-email').val();
        var regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!guestName.trim()) {
            $('.guest-name').addClass('is-invalid');
            isValid = false;
        }
        if (!regex.test(guestEmail)) {
            $('.guest-email').addClass('is-invalid');
            isValid = false;
            //test
        }

        if (isValid) {
            var guestMsg = $('.guest-msg').val();
            window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${getMyEmail()}&su=New Portfoli Submit&body=Guest-name: ${guestName}%0A%0AGuest-Email: ${guestEmail}%0A%0AMSG:%0A${guestMsg.replaceAll(
                    '\n',
                    '%0A'
                )}`,
                '_blank'
            );
        }
    });
    $('.void-link').click(function (ev) {
        openCanvas();
        ev.preventDefault();
        ev.stopPropagation();
    });
}

function renderProjs() {
    //item
    var strHtml = gProjs
        .map(function (proj, idx) {
            var badgesStr = proj.labels
                .map(function (label) {
                    return `<span class="badge bg-warning">${label}</span>`;
                })
                .join(' ');
            return `<div class="col-md-4 col-sm-6 portfolio-item">
<a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx}">
<div class="portfolio-hover">
<div class="portfolio-hover-content">
<i class="fa fa-plus fa-3x"></i>
</div>
</div>
<img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="" />
</a>
<div class="portfolio-caption">
<h4>${proj.name}</h4>
<p class="text-muted">${proj.title}</p>
${badgesStr}
</div>
</div>`;
        })
        .join('');

    $('.my-portfolio-items').html(strHtml);
}

function renderModals() {
    var strHtml = gProjs
        .map(function (proj, idx) {
            return `<div class="portfolio-modal modal fade" id="portfolioModal${idx}" tabindex="-1" role="dialog"            aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="close-modal" data-dismiss="modal">
                                    <div class="lr">
                                        <div class="rl"></div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-8 mx-auto">
                                            <div class="modal-body">
                                                <!-- Project Details Go Here -->
                                                <h2>${proj.name}</h2>
                                                <p class="item-intro text-muted">
                                                    ${proj.title}
                                                </p>
                                                <img
                                                    class="img-fluid d-block mx-auto"
                                                    src="img/portfolio/${proj.id}.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    ${proj.desc}
                                                </p>
                                                <ul class="list-inline">
                                                    <li>Date: ${new Date(
                                                        proj.publishedAt
                                                    ).toLocaleString('gb')}</li>
                                                    <li>Client: Window</li>
                                                    <li>Category: Photography</li>
                                                </ul>
                                                <button
                                                    class="btn btn-primary"
                                                    data-dismiss="modal"
                                                    type="button"
                                                >
                                                    <i class="fa fa-times"></i>
                                                    Close Project
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>`;
        })
        .join('');
    $('.my-modals').html(strHtml);
}
