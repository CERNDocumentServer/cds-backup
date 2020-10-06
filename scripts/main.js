function chooseBackground() {
  var images = ["accelerator", "exihibition", "leds", "worker"];
  var random = Math.floor(Math.random() * images.length + 1);
  var className = `body-bg-${images[random - 1]}`;
  document.body.classList.add(className);
}

function renderTemplate(templateId, elementId, data) {
  var mainTemplate = document.getElementById(templateId).innerHTML;
  var hdbsMainTemplate = Handlebars.compile(mainTemplate);

  var mainElement = document.getElementById(elementId);
  mainElement.innerHTML = hdbsMainTemplate(data);
}

function renderTemplates(data) {
  renderTemplate("template-main", "main", data);
  if ("statuses" in data && data["statuses"]) {
    renderTemplate("template-statuses", "statuses", data);
  }
}

function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      } else if (httpRequest.status >= 400) {
        throw Error(httpRequest.responseText);
      }
    }
  };
  httpRequest.open("GET", path);
  httpRequest.send();
}

function loadStatus() {
  fetchJSONFile("status.json", function (data) {
    var type = data["type"];
    var isIncident = type === "incident";
    var isIntervention = type === "intervention";
    if (!isIncident && !isIntervention) {
      throw Error("Unrecognized type value " + type);
    }
    data = data[type];
    renderTemplates(data);
  });
}

// on document ready
document.addEventListener("DOMContentLoaded", function () {
  loadStatus();
  chooseBackground();
});
