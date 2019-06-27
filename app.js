function getName() {
    var name = prompt('what is your name?');
    alert('welcome' + ' ' + name);
}

function changePageColor() {
    var color = prompt('what color do you want this page to be?');
    document.body.style.background = color;
}

function changeFont() {
    var font = prompt('what font family do you want to have?')
    document.body.style.fontFamily = font;
}

function changeCSS(msg, cssProperty, val) {
    var answer = prompt(msg);
    document.body.style.cssProperty = val;
    confirm('Are you sure? Really?');
}

getName();
changePageColor();
changeFont();
changeCSS();