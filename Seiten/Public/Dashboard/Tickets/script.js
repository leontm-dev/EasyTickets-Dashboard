const MAIN = "https://easytickets-dashboard.leontm-official.repl.co";
let ID = String(window.location.href).replace(`${MAIN}/dashboard/servers/id=`, "");
window.onload = () => {
    document.getElementById("user-menu").style.display = "none";
    document.getElementById("user-menu-button").addEventListener("click", (ev) => {
        document.getElementById("user-menu").style.display = "unset";
    });
    if (localStorage.getItem("EasyTickets-User") != null) {
        document.getElementById("user-menu-button").src = `https://cdn.discordapp.com/avatars/${JSON.parse(localStorage.getItem("EasyTickets-User")).id}/${JSON.parse(localStorage.getItem("EasyTickets-User")).avatar}.png`;
        fetch(`${MAIN}/api/servers/${ID.replace("/tickets", "")}`, {
            method: "GET",
        })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            } else if (res.status == 404) {
                alert("Server konnte nicht gefunden werden!");
                window.location.href = `${MAIN}/dashboard/servers`
            }
        })
        .then(data => {
            console.log(data);
            document.getElementById("server-img").src = `https://cdn.discordapp.com/icons/${data.id}/${data.icon}.png`;
            document.getElementById("server-name").innerText = data.name;
            document.getElementById("server-member").innerText = `${data.memberCount} Member`
        })
        .catch(err => {
            console.log(err);
        })
    } else {
        alert("Kein Nutzer gefunden!");
        window.location.href = `${MAIN}`;
    }
};
document.getElementById("user-menu-item-logout").addEventListener("click", (ev) => {
    localStorage.removeItem("EasyTickets-User");
    window.location.href = MAIN;
});
document.getElementById("menu-item-tickets").addEventListener("click", (ev) => {
    window.location.href = `${MAIN}/dashboard/servers/id=${ID.replace("/tickets", "")}/tickets`;
});
document.getElementById("menu-item-new").addEventListener("click", (ev) => {
    window.location.href = `${MAIN}/dashboard/servers/id=${ID.replace("/tickets", "")}/new`;
});
document.getElementById("menu-item-prebuilds").addEventListener("click", (ev) => {
    window.location.href = `${MAIN}/dashboard/servers/id=${ID.replace("/tickets", "")}/prebuilds`;
});
document.getElementById("menu-item-support").addEventListener("click", (ev) => {
    window.location.href = `https://discord.gg/c65w5guMDq`;
});
document.getElementById("menu-item-donate").addEventListener("click", (ev) => {
    window.location.href = `https://www.buymeacoffee.com/leontm`;
});