let plan = 0;
let count = 10;
let price = () => PLANS[plan].price * count;
const PLANS = [
  { id: 0, name: "Plan #1", price: 10 },
  { id: 1, name: "Plan #2", price: 14 },
  { id: 2, name: "Plan #3", price: 5 },
];
const totalPriceElement = document.querySelector(".form__total-value");
const currentPlanElement = document.querySelector(".form__selected-plan-value");
const radioButtonElement = document.querySelector(".form__input_type_radio");
const formElement = document.querySelector(".form");
const countInputElement = document.querySelector(".form__input_number");
function init() {
  formElement.addEventListener("change", (e) => onPlanChange(e));
  countInputElement.addEventListener("change", (e) => onCountChange(e));
}

function onCountChange(e) {
  count = e.target.value;
  totalPriceElement.innerHTML = `${PLANS[plan].price * count}$`;
}

function onPlanChange(e) {
  if (e.target.name == "plan") {
    plan = e.target.value;
    currentPlanElement.innerHTML = PLANS[e.target.value].name;
  totalPriceElement.innerHTML = `${PLANS[plan].price * count}$`;

  }
}

init();
