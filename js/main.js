'use strict';
// console.log('Starting up');

$(document).ready(initPage);
// document.querySelector('.guest-email').addEventListener('focusout', function () {
//     document.querySelector('.guest-name').checkValidity();
// });
const MYEMAIL = 'martinshn@gmail.com';
const DATA = [
    [
        'book-shop',
        'A book shop',
        'Books index with admin and user managment',
        "A login page checks your's role, entitles you different permissions in the site. A use of modals and getter/setter functions to add/update the books, with full attention to CRUDL",
        ['e-commerce', 'CRUDL', 'modal', 'security'],
    ],
    [
        'guess-me',
        'Guess Me Game',
        'Can you guess who am i?',
        'A vast use of bootstrap and jquery - brings a great game with self learning abilities',
        ['bootstrap', 'jquery'],
    ],
    [
        'mine-sweeper',
        'Mine Sweeper',
        'A fork for the nostalgic game',
        'Use of recursive function to reveal the empty fields, with lots of new features to the loved game',
        ['recursive', 'local storage'],
    ],
    [
        'pacman',
        'PacMan',
        'Hungry for some crumbs?',
        'The nostalgic game with some new added features',
        ['audio'],
    ],
];

var gProjs = [];

function initPage() {
    createProjs();
    renderProjs();
    renderModals();
    $('.email-btn').on('click', function () {
        var guestName = $('.guest-name').val();
        var guestEmail = $('.guest-email').val();
        var guestMsg = $('.guest-msg').val();
        window.location.assign(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${MYEMAIL}&su=New-Portfoli-Submit&body=Guest-name:${guestName}>>Guest-Email:${guestEmail}>>MSG:${guestMsg}`
        );
    });
    $('.void-link').click(function (ev) {
        openCanvas();
        ev.preventDefault();
        ev.stopPropagation();
    });
}

function createProjs() {
    gProjs = DATA.map(function (proj) {
        return {
            id: proj[0],
            name: proj[1],
            title: proj[2],
            desc: proj[3],
            url: `projs/${proj.id}`,
            publishedAt: Date.now(),
            labels: proj[4],
        };
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
