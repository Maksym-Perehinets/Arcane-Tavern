function SendData(dataToSend, url) {
  // console.log("sent");
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Отримано від сервера:", data);
    })
    .catch((error) => {
      console.error("Помилка відправлення:", error);
    });
}

function getData(url) {
  const backendUrl = "http://127.0.0.1:8000/test";
  console.log("sent");
  var jsonData;
  async function fetchData() {
    try {
      var response = await axios.get(backendUrl);
      return response.data;
    } catch (error) {
      console.error("Помилка при отриманні даних:", error.message);
    }
  }
  console.log(jsonData);
  jsonData = fetchData();
  console.log(jsonData);
  return jsonData;
}

console.log(getData("http://127.0.0.1:8000/test"));
