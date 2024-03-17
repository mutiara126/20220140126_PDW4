const waktu = document.getElementById("waktu");

function dateTime() {
    const date = new Date();
    waktu.innerHTML = date;

}
setInterval(dateTime, 1000);
dateTime();