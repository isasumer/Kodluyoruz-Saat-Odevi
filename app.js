function askName() {
    var name = prompt("Adınız nedir?");
    document.querySelector("#myName").innerText = name;
}

function showTime() {
    let date = new date ()
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDay();

    switch (day) {
        case 1:
            day="Pazartesi";
            break;
        case 2:
            day="Salı";
            break;
        case 3:
            day="Çarşamba";
                break;
        case 4:
            day="Perşembe";
            break;
        case 5:
            day="Cuma"
            break;
        case 6:
            day="Pazartesi";
            break;
        case 7:
            day="Salı";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + day;
    document.querySelector("#myClock").innerText  = time;

    setTimeout (showTime);
}

askName();
showTime();