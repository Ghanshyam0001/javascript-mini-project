const getcolor = ()=>{
    // color is hexadesilam format we call hex code
    const randomNumber = Math.floor(Math.random() * 16777215); // rendom number to make hexadesimal code 16777215
    const randomcode = "#" +  randomNumber.toString(16);
    console.log(randomNumber,randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerText = randomcode;
    navigator.clipboard.writeText(randomcode )// jayare click kari je haxa code aave te noteped par ctr+v karvathi copy thay che
}
// event call when page lode code is run
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
// init call
setInterval(()=>{


getcolor()
},1000)