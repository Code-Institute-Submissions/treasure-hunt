var bermudaLatLng = { lat: 32.313327, lng: -64.747878 };
var jamaicaLatLng = { lat: 18.1198291, lng: -77.8365849 };
var barbadosLatLng = { lat: 13.1884729, lng: -59.6753414 };
var antiguaLatLng = { lat: 17.0858213, lng: -61.8596279 };
var cubaLatLng = { lat: 21.4653347, lng: -84.0583324 };

function initMap() {
  
    //   -------- Easy Map & Markers --------

  var map = new google.maps.Map(document.getElementById("mapEasy"), {
    zoom: 3.5,
    center: {
      lat: 23.464662,
      lng: -67.626422,
    },

    styles: mapStyle,

    mapTypeControlOptions: {
      mapTypeIds: [],
    },
    streetViewControl: false,
  });

  var markerBer = new google.maps.Marker({
    position: bermudaLatLng,
    map: map,
    title: "Bermuda",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Bermuda",
    },
  });

  var markerJam = new google.maps.Marker({
    position: jamaicaLatLng,
    map: map,
    title: "Jamaica",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Jamaica",
    },
  });

  var markerBar = new google.maps.Marker({
    position: barbadosLatLng,
    map: map,
    title: "Barbados",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Barbados",
    },
  });

  var markerAnt = new google.maps.Marker({
    position: antiguaLatLng,
    map: map,
    title: "Antigua",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Antigua",
    },
  });

  var markerCub = new google.maps.Marker({
    position: cubaLatLng,
    map: map,
    title: "Cuba",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Cuba",
    },
  });

  //   -------- Easy Correct Answer Choice --------

  markerBer.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerJam.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-win").removeClass("hide");
    $("#winning-btn").removeClass("hide");
  });
  
  markerBar.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerAnt.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerCub.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  //   -------- Medium Map & Markers --------

  var mapMed = new google.maps.Map(document.getElementById("mapMed"), {
    zoom: 3.5,
    center: {
      lat: 23.464662,
      lng: -67.626422,
    },
    styles: mapStyle,

    mapTypeControlOptions: {
      mapTypeIds: [],
    },
    streetViewControl: false,
  });

  var markerBer = new google.maps.Marker({
    position: bermudaLatLng,
    map: mapMed,
    title: "Bermuda",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Bermuda",
    },
  });

  var markerJam = new google.maps.Marker({
    position: jamaicaLatLng,
    map: mapMed,
    title: "Jamaica",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Jamaica",
    },
  });

  var markerBar = new google.maps.Marker({
    position: barbadosLatLng,
    map: mapMed,
    title: "Barbados",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Barbados",
    },
  });

  var markerAnt = new google.maps.Marker({
    position: antiguaLatLng,
    map: mapMed,
    title: "Antigua",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Antigua",
    },
  });

  var markerCub = new google.maps.Marker({
    position: cubaLatLng,
    map: mapMed,
    title: "Cuba",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Cuba",
    },
  });

  //   -------- Medium Correct Asnwer Choice --------
  
  markerBer.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerJam.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerBar.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-win").removeClass("hide");
    $("#winning-btn").removeClass("hide");
  });

  markerAnt.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerCub.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  //   -------- Hard Map & Markers --------

  var mapHard = new google.maps.Map(document.getElementById("mapHard"), {
    zoom: 3.5,
    center: {
      lat: 23.464662,
      lng: -67.626422,
    },
    styles: mapStyle,

    mapTypeControlOptions: {
      mapTypeIds: [],
    },
    streetViewControl: false,
  });

  var markerBer = new google.maps.Marker({
    position: bermudaLatLng,
    map: mapHard,
    title: "Bermuda",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Bermuda",
    },
  });

  var markerJam = new google.maps.Marker({
    position: jamaicaLatLng,
    map: mapHard,
    title: "Jamaica",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Jamaica",
    },
  });

  var markerBar = new google.maps.Marker({
    position: barbadosLatLng,
    map: mapHard,
    title: "Barbados",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Barbados",
    },
  });

  var markerAnt = new google.maps.Marker({
    position: antiguaLatLng,
    map: mapHard,
    title: "Antigua",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Antigua",
    },
  });

  var markerCub = new google.maps.Marker({
    position: cubaLatLng,
    map: mapHard,
    title: "Cuba",
    label: {
      fontSize: "25pt",
      fontFamily: "'IM Fell English SC', serif",
      text: "Cuba",
    },
  });
  
  //   -------- Hard Correct Answer Choice --------

  markerBer.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-win").removeClass("hide");
    $("#winning-btn").removeClass("hide");
  });

  markerJam.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerBar.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerAnt.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });

  markerCub.addListener("click", () => {
    $("#map-page").addClass("hide");
    $("#correct-answers").addClass("hide");
    $("#journey-page-lose").removeClass("hide");
    $("#losing-btn").removeClass("hide");
  });
}