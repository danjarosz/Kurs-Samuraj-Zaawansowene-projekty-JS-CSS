const getUsers = () => {
  const url = `https://randomuser.me/api/?results=100`;
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

document.querySelector(".download-users").addEventListener("click", getUsers);
