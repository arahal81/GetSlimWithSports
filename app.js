alert('Welcom to Git Slim With Sport Website');
var nickName = prompt('Please enter your nickName here');
while (nickName == '') {
    nickName = prompt('the nick name is empty Please enter your nickName again');
}

var fav = prompt('Hi ' + nickName + ', pls enter your favorit spot football or tennis or basketball');
while (fav !== 'football' && fav !== 'tennis' && fav !== 'basketball') {
    fav = prompt('please write only football or tennis or basketball !');
}
var img = '';
if (fav === "basketball") {
    img = '<img src="uplods/basketball1.jpg" />';
}
else if (fav === "football") {
    img = '<img src="uplods/football.jpg" />';
}
else {
    img = '<img src="uplods/tennis.jpg" />';
}
var imgCount = prompt('enter numper of images you needed!')
var sumImg = '';
for (var i = 0; i < imgCount; i++) {

    sumImg += img;

}
document.writeln('Your name: ' + nickName + '.' + '<br>');
document.writeln(sumImg);