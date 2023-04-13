document.getElementById("login").addEventListener("click", (ev) => {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1094662577742696479&redirect_uri=http%3A%2F%2Flocalhost%3A2000%2Fconnected&response_type=token&scope=identify%20guilds%20guilds.join%20guilds.members.read%20connections";
});