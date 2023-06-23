"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return [];
  } else if (d === 0) {
    let x = -b / (2 * a);
    return [x];
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
}


"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent === "string") {
    percent = Number(percent);
  }
  if (typeof contribution === "string") {
    contribution = Number(contribution);
  }
  if (typeof amount === "string") {
    amount = Number(amount);
  }
  if (typeof countMonths === "string") {
    countMonths = Number(countMonths);
  }
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }
  percent = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  let monthlyPayment =
    bodyCredit *
    (percent +
      percent /
        (Math.pow(1 + percent, countMonths) - 1));
  let totalAmount = monthlyPayment * countMonths;
  return Number(totalAmount.toFixed(2));
}

