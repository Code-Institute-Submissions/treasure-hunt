var bermudaLatLng = { lat: 32.313327, lng: -64.747878 };
var jamaicaLatLng = { lat: 18.1198291, lng: -77.8365849 };
var barbadosLatLng = { lat: 13.1884729, lng: -59.6753414 };
var antiguaLatLng = { lat: 17.0858213, lng: -61.8596279 };
var cubaLatLng = { lat: 21.4653347, lng: -84.0583324 };

function initMap(easyMap) {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: 23.464662,
      lng: -67.626422,
    },
  });

  var markerBer = new google.maps.Marker({
    position: bermudaLatLng,
    map: map,
    title: "Bermuda",
    label: {
      fontSize: "25pt",
      text: "Bermuda",
    },
  });

  var markerJam = new google.maps.Marker({
    position: jamaicaLatLng,
    map: map,
    title: "Jamaica",
    label: {
      fontSize: "25pt",
      text: "Jamaica",
    },
  });

  var markerBar = new google.maps.Marker({
    position: barbadosLatLng,
    map: map,
    title: "Barbados",
    label: {
      fontSize: "25pt",
      text: "Barbados",
    },
  });

  var markerAnt = new google.maps.Marker({
    position: antiguaLatLng,
    map: map,
    title: "Antigua",
    label: {
      fontSize: "25pt",
      text: "Antigua",
    },
  });

  var markerCub = new google.maps.Marker({
    position: cubaLatLng,
    map: map,
    title: "Cuba",
    label: {
      fontSize: "25pt",
      text: "Cuba",
    },
  });

  markerBer.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#final-page").removeClass("hide");
    $("#yesCaptain").removeClass("hide");
  });

  markerJam.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#final-page").removeClass("hide");
    $("#noCaptain").removeClass("hide");
  });
  markerBar.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#final-page").removeClass("hide");
    $("#noCaptain").removeClass("hide");
  });

  markerAnt.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#final-page").removeClass("hide");
    $("#noCaptain").removeClass("hide");
  });

  markerCub.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#final-page").removeClass("hide");
    $("#noCaptain").removeClass("hide");
  });
}
