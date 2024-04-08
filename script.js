document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const results = document.querySelector('#results');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    console.log('Height:', height);
    console.log('Weight:', weight);

    if (isNaN(height) || height <= 0) {
      results.innerHTML = 'Please provide a valid height.';
    } else if (isNaN(weight) || weight <= 0) {
      results.innerHTML = 'Please provide a valid weight.';
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`;
      if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `<span>${bmi}</span> - Result is in normal range`;
      } else {
        results.innerHTML = `<span>${bmi}</span> - Overweight`;
      }
    }
  });
});
