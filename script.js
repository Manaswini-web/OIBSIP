function convertTemperature() {
    const temp = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temp)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temp);
    let result = '';

    if (unit === 'celsius') {
        const toFahrenheit = (temperature * 9/5) + 32;
        const toKelvin = temperature + 273.15;
        result = `${temperature} °C is ${toFahrenheit.toFixed(2)} °F and ${toKelvin.toFixed(2)} K`;
    } else if (unit === 'fahrenheit') {
        const toCelsius = (temperature - 32) * 5/9;
        const toKelvin = toCelsius + 273.15;
        result = `${temperature} °F is ${toCelsius.toFixed(2)} °C and ${toKelvin.toFixed(2)} K`;
    } else if (unit === 'kelvin') {
        const toCelsius = temperature - 273.15;
        const toFahrenheit = (toCelsius * 9/5) + 32;
        result = `${temperature} K is ${toCelsius.toFixed(2)} °C and ${toFahrenheit.toFixed(2)} °F`;
    }

    resultDiv.innerHTML = result;
}
function convertTemperature() {
    const temp = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temp)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temp);
    let result = '';

    if (unit === 'celsius') {
        const toFahrenheit = (temperature * 9/5) + 32;
        const toKelvin = temperature + 273.15;
        result = `${temperature} °C is ${toFahrenheit.toFixed(2)} °F and ${toKelvin.toFixed(2)} K`;
    } else if (unit === 'fahrenheit') {
        const toCelsius = (temperature - 32) * 5/9;
        const toKelvin = toCelsius + 273.15;
        result = `${temperature} °F is ${toCelsius.toFixed(2)} °C and ${toKelvin.toFixed(2)} K`;
    } else if (unit === 'kelvin') {
        const toCelsius = temperature - 273.15;
        const toFahrenheit = (toCelsius * 9/5) + 32;
        result = `${temperature} K is ${toCelsius.toFixed(2)} °C and ${toFahrenheit.toFixed(2)} °F`;
    }

    resultDiv.innerHTML = result;
}
