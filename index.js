document.getElementById("main-body").innerHTML = homePage();

function homePage() {
  var games = [];
  let chess = {
    id: "chess_1",
    name: "Chess",
    icon: "",
    url: "./src/home/chessboard/chessboard.html",
  };
  games.push(chess);
  let final_result = "<ul>";
  let i = 0;
  while (i < games.length) {
    final_result += `<li id = "${games[i].id}"><a id="${i + 1}
                      "href=${games[i].url}>${games[i].name}</a>
                    </li>`;
    i++;
  }
  final_result += "</ul>";
  console.log(final_result);
  return final_result;
}

function aboutUs() {}

function contactUs() {}

document.getElementById("home").addEventListener("click", function () {
  document.getElementById("main-body").innerHTML = homePage();
});

document.getElementById("aboutus").addEventListener("click", function () {
  document.getElementById("main-body").innerHTML = aboutUs();
});

document.getElementById("contact").addEventListener("click", function () {
  document.getElementById("main-body").innerHTML = contactUs();
});
