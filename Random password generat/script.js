const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbolset = "!@#$%^&*()_+/"

// dataset is predifine function
const getrandomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}
// selectors
const passbox = document.getElementById("pass-box")
const totalInput = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



//  dataset="" means password is empty
const generatepassword = (password = "") => {
    if (upperInput.checked) {
        password += getrandomdata(upperset)
    }

    if (lowerInput.checked) {
        password += getrandomdata(lowerset)
    }

    if (numberInput.checked) {
        password += getrandomdata(numberset)
    }

    if (symbolInput.checked) {
        password += getrandomdata(symbolset)
    }
    if (password.length < totalInput.value) {
        return generatepassword(password)
    }

    passbox.innerText = truncateString(password, totalInput.value);
}
generatepassword();
document.getElementById("btn").addEventListener("click",
    function () {
        generatepassword();
    }
)
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}




