const cardWrapper = document.querySelector(".card-wrapper");

for (let i = 1; i <= 100; i++) {
  let text = i;

  if (i % 3 === 0 && i % 5 === 0) {
    text = "FizzBuzz";
  } else if (i % 3 === 0) {
    text = "Fizz";
  } else if (i % 5 === 0) {
    text = "Buzz";
  }
  console.log(text);

  cardWrapper.innerHTML += `
  <div class="card">${text}</div>
  `;
}
