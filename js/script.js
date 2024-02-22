const cardWrapper = document.querySelector(".card-wrapper");

for (let i = 1; i <= 100; i++) {
  let text = i;
  let backgroundColor = " ";

  if (i % 3 === 0 && i % 5 === 0) {
    text = "FizzBuzz";
    backgroundColor = "buzz-fizz-card";
  } else if (i % 3 === 0) {
    text = "Fizz";
    backgroundColor = "fizz-card";
  } else if (i % 5 === 0) {
    text = "Buzz";
    backgroundColor = "buzz-card";
  }
  console.log(text);

  cardWrapper.innerHTML += `
  <div class="card ${backgroundColor}">${text}</div>
  `;
}
