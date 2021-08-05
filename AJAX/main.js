const showUsers = (users) => {
  if (!users.length) {
    return;
  }
  const resultArea = document.querySelector(".user-list");
  resultArea.innerHTML = "";

  users.forEach((user) => {
    const userEl = document.createElement("div");
    userEl.className = "user";
    userEl.innerHTML = `
      <img class="user__image" src="${user.picture.medium}"/>
      <div class="user__name">${user.name.title.toUpperCase()} ${
      user.name.first
    } ${user.name.last}</div>
    `;

    resultArea.appendChild(userEl);
  });
};

const getUsers = (e) => {
  e.preventDefault();

  const form = e.target;
  const usersGender = form.querySelector('[name="gender"]').value;
  const usersNumber = form.querySelector('[name="amount"]').value;

  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    usersGender === "both" ? "male,female" : usersGender
  }`;

  fetch(url)
    .then((res) => {
      if (res.ok && res.status >= 200 && res.status < 300) {
        return res.json();
      }
      throw Error("Error fetching data");
    })
    .then((data) => data.results)
    .then((users) => {
      showUsers(users);
    })
    .catch((err) => {
      throw Error(err);
    });
};

document.querySelector(".generator").addEventListener("submit", getUsers);
