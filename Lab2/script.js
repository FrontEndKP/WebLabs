let selectedColor = false;
const tableElements = document.querySelectorAll("td");

function validate() {
    const name = document.forms["person"]["name"].value;
    const idCard = document.forms["person"]["idCard"].value;
    const faculty = document.forms["person"]["faculty"].value;
    const dateOfBirth = document.forms["person"]["dateOfBirth"].value;
    const address = document.forms["person"]["address"].value;

    let hasError = false;

    if (!/^[a-zA-Z]+(?: [a-zA-Z]\.[a-zA-Z]\.)?$/.test(name)) {
        document.getElementById("nameLabel").innerHTML = "ПІБ - must be in XXXXX X.X. format";
        hasError = true;
    } else {
        document.getElementById("nameLabel").innerHTML = "ПІБ";
    }
    if (!/[0-9]{6}/.test(idCard)) {
        document.getElementById("idLabel").innerHTML = "ID-картка - must be a number with at least 6 digits";
        hasError = true;
    } else {
        document.getElementById("idLabel").innerHTML = "ID-картка";
    }
    if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(dateOfBirth)) {
        document.getElementById("dateLabel").innerHTML = "Дата Народження - must be DD/MM/YYYY or DD-MM-YYYY";
        hasError = true;
    } else {
        document.getElementById("dateLabel").innerHTML = "Дата Народження";
    }
    if (!/^[a-zA-Z]+$/.test(faculty)) {
        document.getElementById("facultyLabel").innerHTML = "Факультет - must be XXXX";
        hasError = true;
    } else {
        document.getElementById("facultyLabel").innerHTML = "Факультет";
    }
    if (!/^[a-zA-Z]\.\s[a-zA-Z0-9]+$/.test(address)) {
        document.getElementById("addressLabel").innerHTML = "Адреса must be m. Kyiv";
        hasError = true;
    } else {
        document.getElementById("addressLabel").innerHTML = "Адреса";
    }

    if (!hasError) {
        alert("Form submitted successfully");
    } else {
        alert("Please fill in the form correctly");
    }
    return false;
}


function onHover(element) {
    element.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function onOut(element) {
    if (selectedColor) {
        usePickedColor(element);
        return;
    }
    element.style.backgroundColor = "";
    element.style.color = "";
}

function usePickedColor(element) {
    element.style.backgroundColor = document.getElementById("colorpicker").value;
    element.style.color = "black";
    selectedColor = true;
}

function changeDiagonalColor() {
    tableElements.forEach((value, key) => {
        if (key % 5 || !key || key == 35) {
            return;
        }

        value.style.backgroundColor = document.getElementById("colorpicker").value;
        value.style.color = "black";
    });
}