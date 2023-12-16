let form = document.querySelector("#form");
let tbody = document.querySelector("#tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let userName = document.querySelector("#username").value;
    let distance = document.querySelector("#distance").value;
    let dtnce = Number(distance);
    let result = document.querySelector("#result");

    if (userName === "") {
        result.value = "Plz enter userName";
        result.style.color = "red";
    }else if (!isNaN(userName)) {
        result.value = "Plz enter a valid userName";
        result.style.color = "red";
    }
    else if (isNaN(dtnce) || dtnce < 0) {
        result.value = "Plz enter a valid Distance in KM";
        result.style.color = "red";
    }else if (distance === "") {
        result.value = "Plz enter a Distance";
        result.style.color = "red";
    }
    else {
        result.value = "";

        if (dtnce <= 5) {
            result.value = "RS-15";
        }else if (dtnce > 5 && dtnce <= 10) {
            result.value = "RS-20";
        }else if (dtnce > 10 && dtnce <= 15) {
            result.value = "RS-25";
        }
        else if (dtnce > 15 && dtnce <= 20) {
            result.value = "RS-30";
        }
        else if (dtnce > 20 && dtnce <= 25) {
            result.value = "RS-35";
        }
        else if (dtnce > 25 && dtnce <= 30) {
            result.value = "RS-40";
        }
        else if (dtnce > 30 && dtnce <= 35) {
            result.value = "RS-45";
        }
        else if (dtnce > 35 && dtnce <= 40) {
            result.value = "RS-50";
        }
        else if (dtnce > 40) {
            result.value = "RS-55";
        }

        const insertRow = tbody.insertRow();
        insertRow.innerHTML = `
        <td>${userName}</td> 
        <td>${dtnce} KM</td> 
        <td>${result.value}</td>
        `;

        setTimeout (() => {
            form.reset();
        }, 3000);
    }
})