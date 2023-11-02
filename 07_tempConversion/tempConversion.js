const convertToCelsius = function(degreesFarenheit) {
  const degreesC = ((degreesFarenheit - 32)*(5/9)).toFixed(1);
  return parseFloat(degreesC);
};

const convertToFahrenheit = function(degreesCelcius) {
  const degreesF = ((degreesCelcius * (9/5) + 32)).toFixed(1);
  return parseFloat(degreesF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
