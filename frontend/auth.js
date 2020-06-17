const bthLogin = document.getElementById("btn-login");

bthLogin.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (name.length !== 0 && password.length !== 0) {
        asyncLogin(name, password);
        bthLogin.style.background = "transparent";
    } else {
        alert("Заполните все поля!");
        bthLogin.style.background = "red";
        setTimeout(() => {
            bthLogin.style.background = "transparent";
        }, 2000);
    }
});

const asyncLogin = async (name, password) => {
    await fetch("http://localhost:2424/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, password})
        }
    ).then(res => {
        res.json().then(i => {
            const successful = document.getElementById("successful");
            let arr = Object.keys(i);
            if (arr.length === 0) {
                alert("Неверные данные!")
            } else {
                successful.style.display = "block";
            }
        });

    })
        .catch(err => console.log(err))
};
