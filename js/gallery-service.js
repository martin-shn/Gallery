const MYEMAIL = 'martinshn@gmail.com';
const DATA = [
    ['book-shop', 'A book shop', 'Books index with admin and user managment', "A login page checks your's role, entitles you different permissions in the site. A use of modals and getter/setter functions to add/update the books, with full attention to CRUDL", ['e-commerce', 'CRUDL', 'modal', 'security'], '2021,7,24'],
    ['guess-me', 'Guess Me Game', 'Can you guess who am i?', 'A vast use of bootstrap and jquery - brings a great game with self learning abilities', ['bootstrap', 'jquery'], '2021,7,24'],
    ['mine-sweeper', 'Mine Sweeper', 'A fork for the nostalgic game', 'Use of recursive function to reveal the empty fields, with lots of new features to the loved game', ['recursive', 'local storage'], '2021,7,24'],
    ['pacman', 'PacMan', 'Hungry for some crumbs?', 'The nostalgic game with some new added features', ['audio'], '2021,7,24'],
];

function getMyEmail() {
    return MYEMAIL;
}

function createProjs() {
    gProjs = DATA.map(function (proj) {
        return {
            id: proj[0],
            name: proj[1],
            title: proj[2],
            desc: proj[3],
            url: `projs/${proj.id}`,
            publishedAt: new Date(proj[5]),
            labels: proj[4],
        };
    });
}
