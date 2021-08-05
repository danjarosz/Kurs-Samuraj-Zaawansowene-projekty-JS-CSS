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
      console.log(users);
    })
    .catch((err) => {
      throw Error(err);
    });
};

document.querySelector(".generator").addEventListener("submit", getUsers);
