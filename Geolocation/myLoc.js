window.onload = getMyLocation;

function getMyLocation() {
  if (navigator.geolocation) {
    alert(coords.latitude, coords.longitude);
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
  } else {
    alert("Oops, no geolocation support");
  }
}

function displayLocation(position) {
  showMap(position.coords);
}

function displayError(error) {
  var errorTypes = {
    0: "Unknow error",
    1: "Permission denied by user",
    2: "Position is not available",
    3: "Request timed out"
  };
  var errorMessage = errorTypes[error.code];
  if (error.code == 0 || error.code == 2) {
    errorMessage = errorMessage + " " + error.message;
  }
  alert(errorMessage);
}

function showMap(coords) {
  var amapLatandLong = new AMap.Map(coords.latitude, coords.longitude);
  var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom: 10,
    center: amapLatandLong
  });
}
