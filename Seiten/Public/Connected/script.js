const MAIN = "https://easytickets-dashboard.leontm-official.repl.co";
window.onload = () => {
    if (String(window.location.href).includes("#token_type")) {
        let URL = String(window.location.href).replace(`${MAIN}/connected#`, "")
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
            console.log(resp)
            if (res.status == 200) {
                return res.json();
            }
        })
        .then(data => {
            let USER = JSON.parse(JSON.stringify(data));
            USER.token = params.get("access_token");
            localStorage.setItem("EasyTickets-User", JSON.stringify(USER));
            window.location.href = `${MAIN}/dashboard/servers`;
        })
        .catch(err => {
            console.log(err);
            window.location.href = `${MAIN}`;
        })
    } else {
        alert("Ein Fehler ist aufgetreten, klicken sie auf OK um zurück geleitet zu werden!");
        window.location.href = `${MAIN}`;
    };
};