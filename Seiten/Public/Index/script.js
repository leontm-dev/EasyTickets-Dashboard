document.getElementById("login").addEventListener("click", (ev) => {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1094662577742696479&redirect_uri=https%3A%2F%2Feasytickets-dashboard.leontm-official.repl.co&response_type=code&scope=identify%20guilds%20guilds.members.read%20guilds.join";
});