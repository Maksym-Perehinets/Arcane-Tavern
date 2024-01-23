function SendData(dataToSend, url){
    // console.log("sent");
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
    console.log('Отримано від сервера:', data);
    })
    .catch(error => {
    console.error('Помилка відправлення:', error);
    });
};