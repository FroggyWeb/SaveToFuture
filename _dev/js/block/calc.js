const calcForm = document.querySelector(".calc-form");
const htmlPrice = document.getElementById("js-calc-total");
const htmlDiscount = document.getElementById("js-calc-discount");
// const url = "https://mydatacapsule.com/api/getPrices";
const url = "./../../data/price.json";
let dataJson;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dataJson = data;
    calc();
  });

calcForm.addEventListener("change", function () {
  calc();
});

const getVol = (param, val) => {
  let res = dataJson[param].findIndex((element, index, array) => {
    // debugger;
    return val >= element[0] && val < element[1];
  });
  return res >= 0 ? dataJson[param][res][2] : 0;
};

const calc = () => {
  if (!dataJson) return;
  const formData = new FormData(calcForm);
  const size = +formData.get("calcStorage");
  const time = +formData.get("calcTime");
  const courier = +formData.get("courierPrice");
  let discount = 0;
  let price = 0;
  discount = getVol("discounts", time);
  price = size * time;
  if (discount) price = (price / 100) * discount;
  if (courier) price += courier;
  htmlPrice.innerText = "$" + price.toFixed(1);
  htmlDiscount.innerText = discount + "%";
};
