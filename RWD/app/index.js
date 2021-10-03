import "../sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const values = [
    {
      name: "Ananas",
      calories: 33,
      fat: 0,
      carbs: 11.8,
    },
    {
      name: "Jabłko",
      calories: 57,
      fat: 0.7,
      carbs: 12.1,
    },
    {
      name: "Pomarańcza",
      calories: 51,
      fat: 0.2,
      carbs: 11.3,
    },
    {
      name: "Wiśnie",
      calories: 67,
      fat: 0.4,
      carbs: 14.6,
    },
  ];

  const valuesContainer = document.querySelector(".app__values");

  const desktopViewport = window.matchMedia("screen and (min-width: 500px)");

  const drawMobileValues = () => {
    valuesContainer.innerHTML = "";

    let list = document.createElement("ul");

    values.forEach((value) => {
      let element = document.createElement("li");

      let name = document.createElement("div");
      name.innerHTML = `
        <strong>Nazwa: </strong>${value.name}
      `;

      let calories = document.createElement("div");
      calories.innerHTML = `
        <strong>Kalorie: </strong>${value.calories}
      `;

      let fat = document.createElement("div");
      fat.innerHTML = `
        <strong>Tłuszcz: </strong>${value.fat}
      `;

      let carbs = document.createElement("div");
      carbs.innerHTML = `
        <strong>Węglowodany: </strong>${value.carbs}
      `;

      element.appendChild(name);
      element.appendChild(calories);
      element.appendChild(fat);
      element.appendChild(carbs);

      list.appendChild(element);
    });

    valuesContainer.appendChild(list);
  };

  const drawDesktopValues = () => {
    valuesContainer.innerHTML = "";

    let table = document.createElement("table");

    let thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Nazwa</th>
        <th>Kalorie</th>
        <th>Tłuszcz</th>
        <th>Węglowodany</th>
      </tr>`;

    let tbody = document.createElement("tbody");
    values.forEach((value) => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${value.name}</td>
        <td>${value.calories}</td>
        <td>${value.fat}</td>
        <td>${value.carbs}</td>
        `;
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    valuesContainer.appendChild(table);
  };

  drawDesktopValues();
  drawMobileValues();
});
