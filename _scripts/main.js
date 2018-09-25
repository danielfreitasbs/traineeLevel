function toTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 800, 'linear');
}

function toAbout() {
    var posicao = $('#sectionOne').offset().top;

    $('html, body').animate({
        scrollTop: posicao
    }, 800, 'linear');
}

function toExperience() {
    var posicao = $('#sectionTwo').offset().top;

    $('html, body').animate({
        scrollTop: posicao
    }, 800, 'linear');
}

function toHability() {
    var posicao = $('#sectionThree').offset().top;

    $('html, body').animate({
        scrollTop: posicao
    }, 800, 'linear');
}

function toAwards() {
    var posicao = $('#sectionFour').offset().top;

    $('html, body').animate({
        scrollTop: posicao
    }, 800, 'linear');
}