const updateCondition = () => {
  const trail = document.getElementById("trailSelect").value;
  const condition = document.getElementById("conditionSelect").value;
  const url = "http://localhost:81/updateTrailCondition";

  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  const data = JSON.stringify({ trail: trail, condition: condition });
  xhr.send(data);

  console.log('Sent update request for trail: ', trail, ' with condition: ', condition);
};
