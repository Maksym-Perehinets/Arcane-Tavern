function SendData(dataToSend) {
  // console.log("sent");
  fetch("http://127.0.0.1:8000/findSpellByName", {
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

async function SortFilters(level, caster_class, school, damage_type, range_distance, range_type, range_shape, duration_time, duration_type, casting_time, casting_type) {
  console.log(level, caster_class, school, damage_type, range_distance, range_type, range_shape, duration_time, duration_type, casting_time, casting_type);
  const backendUrl = `http://127.0.0.1:8000/data-filter/`;
  var url = backendUrl + '?';

  if (typeof caster_class !== undefined) url += `&level=${level}`;
  if (typeof caster_class !== undefined) url += `&caster_class=${caster_class}`;
  if (typeof school !== undefined) url += `&school=${school}`;
  if (typeof damage_type !== undefined) url += `&damage_type=${damage_type}`;
  if (typeof range_distance !== undefined) url += `&range_distance=${range_distance}`;
  if (typeof range_type !== undefined) url += `&range_type=${range_type}`;
  if (typeof range_shape !== undefined) url += `&range_shape=${range_shape}`;
  if (typeof duration_time !== undefined) url += `&duration_time=${duration_time}`;
  if (typeof duration_type !== undefined) url += `&duration_type=${duration_type}`;
  if (typeof casting_time !== undefined) url += `&casting_time=${casting_time}`;
  if (typeof casting_type !== undefined) url += `&casting_type=${casting_type}`;

  console.log(url);
  try {
    const response = await axios.get(url);
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
