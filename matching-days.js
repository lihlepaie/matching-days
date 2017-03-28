var Weekdays = document.getElementsByClassName('days')
var allDays = document.querySelectorAll('.days')


function myFunction() {
    for (var i = 0; i < Weekdays.length; i++) {
        allDays[i].classList.remove('style1');
        allDays[i].classList.remove('style2');
        allDays[i].classList.remove('style3');

        var dates = document.getElementById('getDay')
        var dates2 = document.getElementById('getdate')
        var input1 = new Date(dates.value)
        var input2 = new Date(dates2.value)
        var day1 = input1.getDay()
        var day2 = input2.getDay()

        if (day1 === day2) {
            allDays[day2].classList.add('style2');
        } else {
            allDays[day1].classList.add('style1');
            allDays[day2].classList.add('style3');
        }
    }
}
