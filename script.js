let nilai = 80

if (nilai >= 90 && nilai <=100) {
    console.log("Nilai A")
} else if (nilai >= 80) {
    console.log("Nilai B") 
} else if (nilai >= 70) {
    console.log("Nilai C")
} else if (nilai >= 0 && nilai ) {
    console.log("Nilai D")
} else {
    console.log("Mungkin anda salah input")
}

// for looping
for (i = 1; i >= 10; i++) {
    console.log(i);
}

function handleGetFormData(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    if (!name || !city || email || !zipCode || !status) {
        document.getElementById("warning").innerHTML = "input rewuired";
    }

    const user = {
        name,
        city,
        email,
        zipCode,
        status,
    }

    localStorage.setItem("dataUser", JSON.stringify (user));

    return {
        name,
        city,
        email,
        zipCode,
        status,
    };
}