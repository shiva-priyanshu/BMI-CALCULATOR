document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';
        let className = '';
        
        if (bmi < 18.5) {
            category = 'Underweight';
            className = 'underweight';
        } else if (bmi < 25) {
            category = 'Normal weight';
            className = 'normal';
        } else if (bmi < 30) {
            category = 'Overweight';
            className = 'overweight';
        } else {
            category = 'Obese';
            className = 'obese';
        }
        
        document.getElementById('bmi-value').textContent = bmi;
        document.getElementById('bmi-category').textContent = category;
        document.getElementById('bmi-category').className = className;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Please enter valid height and weight.');
    }
});