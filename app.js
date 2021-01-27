alert('Welcom to Git Slim With Sport Website');
var nickName = prompt('Please enter your nickName here');
nickName = prompt('the nick name is empty Please enter your nickName again');





var age = prompt('Hi ' + nickName + ',  Please enter your age here');
if (age < 18) {
    alert('website content is not appropriate for your age');

} else if (age > 60) {
    alert('website content is not appropriate for your age your age should be between 18> and < 60');
}
else {
    alert('Enjoy');
}
document.writeln('Your name: ' + nickName + '.');
document.writeln('Your Age : ' + age + '.');