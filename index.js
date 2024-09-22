function calculateTax(power) {
  let rate;

  if (power <= 100) {
    rate = 12;
  } else if (power <= 125) {
    rate = 25;
  } else if (power <= 150) {
    rate = 35;
  } else if (power <= 175) {
    rate = 45;
  } else if (power <= 200) {
    rate = 50;
  } else if (power <= 225) {
    rate = 65;
  } else if (power <= 250) {
    rate = 75;
  } else {
    rate = 150;
  }

  const tax = power * rate;
  console.log(`Сумма налога: ${tax}`);
}

let power = parseInt(prompt("Введите мощность автомобиля (л.с.):"));
calculateTax(power);
