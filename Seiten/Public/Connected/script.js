window.onload = () => {
    if (String(window.location.href).includes("#token_type")) {
        let URL = String(window.location.href).replace("http://localhost:2000/connected/#", "")
        let params = new URLSearchParams(URL);
        fetch("https://discord.com/api/v10/users/@me",
            {
                method: "GET",
                headers: {
                    Authorization: `${params.get("token_type")} ${params.get("access_token")}`
                }
            }
        )
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }
        })
        .then(data => {
            let USER = JSON.parse(JSON.stringify(data));
            USER.token = params.get("access_token");
            localStorage.setItem("EasyTickets-User", JSON.stringify(USER));
            window.location.href = "http://localhost:2000/dashboard/servers";
        })
        .catch(err => {
            alert(err);
            window.location.href = "http://localhost:2000";
        })
    } else {
        alert("Ein Fehler ist aufgetreten, klicken sie auf OK um zurück geleitet zu werden!");
        window.location.href = "http://localhost:2000";
    };
};