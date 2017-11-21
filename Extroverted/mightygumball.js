window.onload = function() {
  var url = "http://webinarapi.instrument.com.cn/Webinar/Lecture/GetIMMList";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    if (request.status == 200) {
      updateSales(request.responseText);
    }
  };
  request.send(null);
}

function updateSales(responseText) {
  var areasDiv = document.getElementById('areas');
  var data = JSON.parse(responseText);
  var areas = data.result;
  for (var i = 0; i < areas.length; i++) {
    var area = areas[i];
    var div = document.createElement("div");
    div.setAttribute("class", "areaItem");
    div.innerHTML = area.Name;
    areasDiv.appendChild(div);
  }
}
