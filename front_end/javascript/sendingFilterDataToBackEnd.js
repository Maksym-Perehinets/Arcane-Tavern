const backendUrlUpload = 'http://localhost:8000/process_data/';


function SendData(dataToSend){
    console.log("sent");
    fetch(backendUrlUpload, {
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