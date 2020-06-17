const bthRegister = document.getElementById("btn-register");

bthRegister.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (name.length !== 0 && password.length !== 0) {
        asyncRegister(name, password)
        bthRegister.style.background = "transparent";
    } else {
        bthRegister.style.background = "red";
        setTimeout(() => {
            bthRegister.style.background = "transparent";
        }, 2000);
    }
});

const asyncRegister = async (name, password) => {
    await fetch("http://localhost:2424/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, password})
        }
    ).then(res => {
        const successful = document.getElementById("successful");
        successful.style.display = "block";
        setTimeout(() => {
            successful.style.display = "none";
        }, 2000);
    })
        .catch(err => console.log(err))
};
