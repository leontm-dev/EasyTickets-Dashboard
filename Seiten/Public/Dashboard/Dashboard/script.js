window.onload = () => {
    if (localStorage.getItem("EasyTickets-User") != null) {
        let ID = String(window.location.href).replace("http://localhost:2000/dashboard/servers/id=", "");
        fetch(`http://localhost:2000/api/servers/${ID}`, {
            method: "GET",
        })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            } else if (res.status == 404) {
                alert("Server konnte nicht gefunden werden!");
                window.location.href = "http://localhost:2000/dashboard/servers"
            }
        })
        .then(data => {
            console.log(data);
            document.getElementById("server-img").src = `https://cdn.discordapp.com/icons/${data.id}/${data.icon}.png`;
            document.getElementById("server-name").innerText = data.name;
            document.getElementById("server-member").innerText = `${data.member_count} Member`
        })
        .catch(err => {
            console.log(err);
        })
    } else {
        alert("Kein Nutzer gefunden!");
        window.location.href = "http://localhost:2000";
    }
}