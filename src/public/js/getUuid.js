const controller = () => {
  fetch("/api/get-uuid")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("result").innerHTML = data.uuid;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("result").innerHTML = "error";
    });
};

document.getElementById("get-uuid").addEventListener("click", controller);
