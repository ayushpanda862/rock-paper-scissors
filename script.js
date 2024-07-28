const prock = document.getElementById("prock");
const ppaper = document.getElementById("ppaper");
const pscissors = document.getElementById("pscissors");
const brock = document.getElementById("brock");
const bpaper = document.getElementById("bpaper");
const bscissors = document.getElementById("bscissors");
const player = document.getElementById("player");
const bot = document.getElementById("bot");
const newgame = document.getElementById("newgame");

const moves = document.querySelectorAll(".move").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const onClick = function () {
      const moveplayed = this.id;
      console.log("Move Played:", moveplayed);
      if (moveplayed === "prock") {
        ppaper.classList.add("hidden");
        pscissors.classList.add("hidden");
      } else if (moveplayed === "ppaper") {
        prock.classList.add("hidden");
        pscissors.classList.add("hidden");
      } else {
        prock.classList.add("hidden");
        ppaper.classList.add("hidden");
      }
      const possiblemoves = ["prock", "ppaper", "pscissors"];
      const botmove =
        possiblemoves[Math.floor(Math.random() * possiblemoves.length)];
      console.log("Bot Move:", botmove);
      if (botmove === "prock") {
        brock.classList.remove("hidden");
      } else if (botmove === "ppaper") {
        bpaper.classList.remove("hidden");
      } else {
        bscissors.classList.remove("hidden");
      }
      if (moveplayed === "prock" && botmove === "ppaper") {
        bot.style.backgroundColor = "#00FC00";
        player.style.backgroundColor = "#FC0000";
        console.log("paper beats rock");
        newgame.classList.remove("hide");
        prock.disabled = true;
        bpaper.disabled = true;
      } else if (moveplayed === "prock" && botmove === "pscissors") {
        player.style.backgroundColor = "#00FC00";
        bot.style.backgroundColor = "#FC0000";
        console.log("rock beats scissors");
        newgame.classList.remove("hide");
        prock.disabled = true;
        bscissors.disabled = true;
      } else if (moveplayed === "ppaper" && botmove === "prock") {
        player.style.backgroundColor = "#00FC00";
        bot.style.backgroundColor = "#FC0000";
        console.log("paper beats rock");
        newgame.classList.remove("hide");
        ppaper.disabled = true;
        brock.disabled = true;
      } else if (moveplayed === "ppaper" && botmove === "pscissors") {
        bot.style.backgroundColor = "#00FC00";
        player.style.backgroundColor = "#FC0000";
        console.log("scissors beats paper");
        newgame.classList.remove("hide");
        ppaper.disabled = true;
        bscissors.disabled = true;
      } else if (moveplayed === "pscissors" && botmove === "prock") {
        bot.style.backgroundColor = "#00FC00";
        player.style.backgroundColor = "#FC0000";
        console.log("rock beats scissors");
        newgame.classList.remove("hide");
        pscissors.disabled = true;
        brock.disabled = true;
      } else if (moveplayed === "pscissors" && botmove === "ppaper") {
        player.style.backgroundColor = "#00FC00";
        bot.style.backgroundColor = "#FC0000";
        console.log("scissors beats paper");
        newgame.classList.remove("hide");
        pscissors.disabled = true;
        bpaper.disabled = true;
      } else if (moveplayed === botmove) {
        player.style.backgroundColor = "#FFFF00";
        bot.style.backgroundColor = "#FFFF00";
        console.log("tie");
        newgame.classList.remove("hide");
        prock.disabled = true;
        ppaper.disabled = true;
        pscissors.disabled = true;
        brock.disabled = true;
        bpaper.disabled = true;
        bscissors.disabled = true;
      }
    };
    const reset = document
      .querySelectorAll(".newgame")
      .forEach(function (item) {
        item.addEventListener("click", function (e) {
          const newGameClick = function () {
            player.style.backgroundColor = "#7070fc";
            bot.style.backgroundColor = "#fc7070";
            console.log("game reset");
            brock.classList.add("hidden");
            bpaper.classList.add("hidden");
            bscissors.classList.add("hidden");
            prock.classList.remove("hidden");
            ppaper.classList.remove("hidden");
            pscissors.classList.remove("hidden");
            newgame.classList.add("hide");
            prock.disabled = false;
            ppaper.disabled = false;
            pscissors.disabled = false;
            brock.disabled = false;
            bpaper.disabled = false;
            bscissors.disabled = false;
          };
          document.getElementById("newgame").onclick = newGameClick;
        });
      });
    document.getElementById("prock").onclick = onClick;
    document.getElementById("ppaper").onclick = onClick;
    document.getElementById("pscissors").onclick = onClick;
  });
});
