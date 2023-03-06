const getTrailConditions = () => {
    const xhr = new XMLHttpRequest();
    const url = "http://localhost:81/getTrailConditions";
    xhr.open("GET", url, true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const trailConditions = JSON.parse(xhr.responseText);
        updateTable(trailConditions);
      }
    };
  
    xhr.send();
  };
  
  const updateTable = (trailConditions) => {
    const table = document.getElementById("conditionsTable");
  
    trailConditions.forEach((trailCondition) => {
      const row = table.insertRow(-1);
      const trailCell = row.insertCell(0);
      const conditionCell = row.insertCell(1);
  
      trailCell.innerHTML = trailCondition.trail;
      conditionCell.innerHTML = trailCondition.condition;
    });
  };
  
  getTrailConditions();
  
