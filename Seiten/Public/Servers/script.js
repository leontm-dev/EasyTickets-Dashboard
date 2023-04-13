const MAIN = "https://easytickets-dashboard.leontm-official.repl.co";
function addServer(name, icon, type, id) {
    let server = document.createElement("div");
    server.classList.add("server");
    let server_name = document.createElement("div");
    server_name.classList.add("server-name");
    server_name.innerText = name;
    let server_icon = document.createElement("img");
    server_icon.classList.add("server-img");
    server_icon.src = `https://cdn.discordapp.com/icons/${id}/${icon}.png`;
    server.appendChild(server_icon);
    server.appendChild(server_name);
    if (type === "1") {
        let dashboard = document.createElement("button");
        dashboard.classList.add("server-dashboard");
        dashboard.innerHTML = "Dashboard";
        dashboard.addEventListener("click", (ev) => {
            window.location.href = `${MAIN}/dashboard/servers/id=${id}`;
        });
        server.appendChild(dashboard);
    } else {
        let invite = document.createElement("button");
        invite.classList.add("server-invite");
        invite.innerHTML = "Invite";
        invite.addEventListener("click", (ev) => {
            window.location.href = `https://discord.com/api/oauth2/authorize?client_id=1094662577742696479&permissions=8&scope=bot%20applications.commands&guild_id=${id}`;
        });
        server.appendChild(invite);
    };
    document.getElementById("servers-list").appendChild(server);
};
window.onload = () => {
    document.getElementById("user-menu").style.display = "none";
    document.getElementById("user-menu-button").addEventListener("click", (ev) => {
        document.getElementById("user-menu").style.display = "unset";
    });
    document.getElementById("user-menu-close").addEventListener("click", (ev) => {
        document.getElementById("user-menu").style.display = "none";
    });
    if (localStorage.getItem("EasyTickets-User") != undefined) {
        let USER = JSON.parse(localStorage.getItem("EasyTickets-User"));
        document.getElementById("user-menu-button").src = `https://cdn.discordapp.com/avatars/${USER.id}/${USER.avatar}.png`;
        fetch("https://discord.com/api/v10/users/@me/guilds", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${USER.token}`
            }
        })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }
        })
        .then(data => {
            data.forEach(i => {
                if (i.owner || i.permission & 0x20) {
                    fetch(`${MAIN}/api/servers`, {
                        method: "GET"
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.servers.includes(i.id)) {
                            addServer(i.name, i.icon, "1", i.id);
                        } else {
                            addServer(i.name, i.icon, "2", i.id);
                        }
                    })
                }
            });
        })
    } else {
        alert("Kein Nutzer gefunden!");
        window.location.href = `${MAIN}`
    };
};