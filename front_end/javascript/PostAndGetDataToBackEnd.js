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


async function getData(url) {
  const backendUrl = "http://127.0.0.1:8000/test";
  console.log("sent");

  try {
    const response = await axios.get(backendUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error.message);
    throw error;
  }
}

// Example usage
(async () => {
  try {
    const jsonData = await getData("http://127.0.0.1:8000/test");
    console.log("Final result", jsonData);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
