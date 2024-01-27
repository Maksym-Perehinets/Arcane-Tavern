// function SendData(dataToSend) {
//   // console.log("sent");
//   fetch("http://127.0.0.1:8000/findSpellByName", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(dataToSend),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Отримано від сервера:", data);
//     })
//     .catch((error) => {
//       console.error("Помилка відправлення:", error);
//     });
// }

// function SendCurrentSpell(dataToSend) {
//   // console.log("sent");
//   fetch(`http://127.0.0.1:8000/get-spell/${dataToSend}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(dataToSend),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Отримано від сервера:", data);
//     })
//     .catch((error) => {
//       console.error("Помилка відправлення:", error);
//     });
// }

async function getAllSpells() {
  // console.log("sent");
  const backendUrl = "http://127.0.0.1:8000/spells";
  try {
    const response = await axios.get(backendUrl);
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error.message);
    throw error;
  }
}


async function SendCurrentSpell(dataToSend) {
  const backendUrl = `http://127.0.0.1:8000/get-spell/${dataToSend}`;
  try {
    const response = await axios.get(backendUrl);
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error.message);
    throw error;
  }
}

async function SortTableData(filterName, sortingType) {
  const backendUrl = `http://127.0.0.1:8000/data-sort/?filter_name=${filterName}&asc_value=${sortingType}`;
  try {
    const response = await axios.get(backendUrl);
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error.message);
    throw error;
  }
}

async function SortFilters(url) {
  const backendUrl = `http://127.0.0.1:8000/data-filter/`;
  // var url = '';

  // url += (typeof(duration_time) != 'undefined')? `&duration_time=${duration_time}` : '';
  // url += (typeof(damage_type != 'undefined')) ? `&damage_type=${damage_type}` : '';
  // url += (typeof(level != 'undefined')) ? `&level=${level}` : '';
  // url += (typeof(caster_class != 'undefined')) ? `&caster_class=${caster_class}` : '';
  // url += (typeof(school != 'undefined')) ? `&school=${school}` : '';

  // url += (typeof(range_distance != 'undefined')) ? `&range_distance=${range_distance}` : '';
  // url += (typeof(range_type != 'undefined')) ? `&range_type=${range_type}` : '';
  // url += (typeof(range_shape != 'undefined')) ? `&range_shape=${range_shape}` : '';

  // url += (typeof(duration_type != 'undefined')) ? `&duration_type=${duration_type}` : '';
  // url += (typeof(casting_time != 'undefined')) ? `&casting_time=${casting_time}` : '';
  // url += (typeof(casting_type != 'undefined')) ? `&casting_type=${casting_type}` : '';

  console.log(typeof(url));
  var trueURL = backendUrl + '?' + url.substring(1);
  trueURL = trueURL.replace(' ', '');

  console.log(trueURL);
  try {
    const response = await axios.get(trueURL);
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error.message);
    throw error;
  }
}

// Example usage
// (async () => {
//   try {
//     const jsonData = await getData("http://127.0.0.1:8000/test");
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// })();
