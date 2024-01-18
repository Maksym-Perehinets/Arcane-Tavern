



// Замініть URL на адресу вашого бекенду, який оброблює POST-запити
const backendUrlUpload = 'http://localhost:8000/process_data/';

const dataToSend = {
  name: 'John Doe',
  description: 'Some description'
};

function testMyFunc(){
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