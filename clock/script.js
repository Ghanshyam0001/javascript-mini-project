const endDate = "4 June 2023 1:20 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000; // minisecond to second
    console.log(diff)
    console.log(end, now)
    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);  // math.floor show ekzet number
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}
clock()

// 1 days 24 hours
// 1 hr 60 minutes
// 60 min = 3600 second
setInterval(() => {
    clock()
}, 1000)