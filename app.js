/*I created 4 objects that hold different car models with different release
years, then I wrote a function that can compare and return the answer of
which is the newest and best based on the years.*/

let car1 = {
  brand: "BMW",
  model: 328,
  dateOfIssue: 1998,
};

let car2 = {
  brand: "Toyota",
  model: "chaser",
  dateOfIssue: 1995,
};

let car3 = {
  brand: "honda",
  model: "civic",
  dateOfIssue: 2001,
};

let car4 = {
  brand: "Banz",
  model: "ML",
  dateOfIssue: 2001,
};

function compareCar(carOne, carTwo) {
  if (carOne.dateOfIssue > carTwo.dateOfIssue) {
    console.log(carOne.model + " is newer than " + carTwo.model);
  } else if (carOne.dateOfIssue < carTwo.dateOfIssue) {
    console.log(carOne.model + " is newer than " + carTwo.model);
  } else {
    console.log(
      carOne.model + " and " + carTwo.model + "It is made in one year"
    );
  }
}

compareCar(car3, car4);
