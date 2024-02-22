const cardWrapper = document.querySelector(".card-wrapper");

for (let i = 1; i <= 100; i++) {
  let text = i;
  let classCard = " ";

  if (i % 3 === 0 && i % 5 === 0) {
    text = "FizzBuzz";
    classCard = "fizz-buzz-card";
  } else if (i % 3 === 0) {
    text = "Fizz";
    classCard = "fizz-card";
  } else if (i % 5 === 0) {
    text = "Buzz";
    classCard = "buzz-card";
  }
  console.log(text);

  cardWrapper.innerHTML += `
  <div class="card ${classCard}">${text}</div>
  `;
}
