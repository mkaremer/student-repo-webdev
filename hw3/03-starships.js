const fetchData = async (url) => {
  // REtrieve the data from the API
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// Fetch starships data and initialize the starships variable
fetchData("https://swapi.dev/api/starships/").then((data) => {
  starships = data;
});

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section");
  container.className = "starship-component";

  const div = document.createElement("div");
  div.className = "top-div";
  container.appendChild(div);

  //Spaceship name
  const nameHeading = document.createElement("h2");
  nameHeading.textContent = spaceship.name;
  nameHeading.className = "space-name";
  div.appendChild(nameHeading);

  //Spaceship Cost in credits
  const costPara = document.createElement("h3");
  const cost = parseInt(spaceship.cost_in_credits, 10);

  // Check if the cost is a number
  if (!isNaN(cost)) {
    const formattedCost = cost.toLocaleString();
    costPara.textContent = `${formattedCost} credits `;
  } else {
    costPara.textContent = "Cost not available";
  }

  costPara.className = "cost-credits";
  div.appendChild(costPara);

  //spaceship manufaturer
  const manufacturerPara = document.createElement("p");
  manufacturerPara.textContent = `Manufactured by ${spaceship.manufacturer}`;
  manufacturerPara.className = "manufacturer";
  container.appendChild(manufacturerPara);

  //spaceship max atmosphering speed
  const speedPara = document.createElement("p");
  speedPara.className = "max-speed";

  const speedValue = document.createElement("div");
  speedValue.style.fontWeight = "bold";
  speedValue.textContent = spaceship.max_atmosphering_speed;
  speedPara.appendChild(speedValue);

  // Create a span for the "max atmosphering speed" label
  const speedLabel = document.createElement("span");
  speedLabel.textContent = "Max atmosphering speed";
  speedPara.appendChild(speedLabel);
  container.appendChild(speedPara);

  // spaceship cargo capacity
  const capacityPara = document.createElement("p");
  capacityPara.className = "cargo-capacity";

  // Create a div for the value and make it bold
  const capacityValue = document.createElement("div");
  capacityValue.style.fontWeight = "bold";
  capacityValue.textContent = parseInt(
    spaceship.cargo_capacity
  ).toLocaleString();
  capacityPara.appendChild(capacityValue);

  // Create a span for the "Cargo capacity" label
  const capacityLabel = document.createElement("span");
  capacityLabel.textContent = "Cargo capacity";
  capacityPara.appendChild(capacityLabel);
  container.appendChild(capacityPara);

  return container;
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  return input.filter(
    (ship) => parseInt(ship.passengers, 10) < 10 && parseInt(ship.crew, 10) > 1
  );
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  const totalCost = input.reduce((acc, ship) => {
    const cost = isNaN(parseInt(ship.cost_in_credits, 10))
      ? 0
      : parseInt(ship.cost_in_credits, 10);
    return acc + cost;
  }, 0);

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
