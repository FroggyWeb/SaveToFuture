
const svg = document.getElementById("svg-work-line");
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

// Use path.setAttribute("<attr>", "<value>"); to set any attributes you want

let pathElement = svg.appendChild(path);
let elems = $(".work-list__counter");

function pathCalc (elStart, elEnd) {
  console.log(elEnd)
  elStart = elStart.getBoundingClientRect();
  elEnd = elEnd.getBoundingClientRect();
  let x1 = elStart.left,
    y1 = elStart.top,
    x2 = elEnd.left,
    y2 = elEnd.top;
    return `M${x1}, ${y1} c66, 96, 50, 30, ${x2}, ${y2}`;
}




pathElement.setAttribute("d", pathCalc(elems[0], elems[1]));


