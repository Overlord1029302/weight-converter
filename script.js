function convertMass() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let valueInKg;

    switch (inputUnit) {
        case 'kg':
            valueInKg = inputValue;
            break;
        case 'g':
            valueInKg = inputValue / 1000;
            break;
        case 'mg':
            valueInKg = inputValue / 1000000;
        case 'lb':
            valueInKg = inputValue * 0.453592;
        case 'ton':
            valueInKg = inputValue * 1000;
            break;
        default:
            break;
    }


    let outputValue;

    switch (outputUnit) {
        case 'kg':
            outputValue = valueInKg;
            break;
        case 'g':
            outputValue = valueInKg * 1000;
            break;
        case 'mg':
            outputValue = valueInKg * 1000000;
            break;
        case 'lb':
            outputValue = valueInKg / 0.453592;
            break;
        case 'ton':
            outputValue = valueInKg / 1000;
            break;
        default:
            break;
    }
    document.getElementById('outputValue').value = outputValue.toFixed(6); 

}

