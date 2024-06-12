// document.addEventListener("DOMContentLoaded", function () {
//   var scrollable = document.getElementById("scrollable");

//   scrollable.addEventListener("wheel", function (e) {
//     // Prevent default scrolling behavior on the body
//     e.preventDefault();

//     // Manually scroll the scrollable element
//     scrollable.scrollTop += e.deltaY;
//   });
// });

// matrix will always have x*x colums
document.getElementById("root").innerHTML = chessBoard(8);

function chessBoard(n) {
  // let chessBoardArray = new Array(n).fill(new Array(n).fill(new Object(1)));
  let boxString = "<div style='width: fit-content; border: 1px solid black'>";
  for (let i = 0; i < n; i++) {
    boxString += "<div style='width: fit-content; display: flex;'>";
    for (let j = 0; j < n; j++) {
      boxString += `<div id="box-${i + 1}${j + 1}" style='background: ${
        i % 2 == 0
          ? j % 2 == 0
            ? "#1d9300"
            : "#fff"
          : j % 2 == 0
          ? "#fff"
          : "#1d9300"
      }; 
          display: flex; justify-content: center; align-items: center; height:100px; width:100px'>(${
            i + 1
          }, ${j + 1})</div>`;
    }
    boxString += "</div>";
  }
  boxString += "</div>";
  return boxString;
}
