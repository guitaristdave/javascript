const data = JSON.parse(dataJSON).teams;

const template = document.querySelector("#template .team");
let container = document.querySelector(".container");

data.forEach((element) => {
  let team = template.cloneNode(true);
  let teamCrest = document.createElement("img");
  teamCrest.src = element.crest;
  teamCrest.alt = "Team Badge";
  team.querySelector(".team .team-crest").appendChild(teamCrest);
  let teamName = team.querySelector(".team .team-name");
  teamName.href = element.website;
  teamName.textContent = element.name;
  team.querySelector(".team .team-manager").innerHTML = `<b>Manager: </b>${element.coach.name}`;
  let teamList = team.querySelector(".team .team-list");
  let squadList = element.squad;
  squadList.forEach((el) => {
    let player = document.createElement("p");
    player.innerHTML = `<b>${el.position}</b>: ${el.name}`;
    teamList.appendChild(player);
  });
  container.appendChild(team);
});
