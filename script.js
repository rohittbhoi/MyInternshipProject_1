document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const currencySelect = document.getElementById('currency-select');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'active' class from all plans
        document.querySelectorAll('.plan').forEach(plan => {
          plan.classList.remove('active');
        });
  
        // Add 'active' class to the clicked plan
        button.parentNode.classList.add('active');
  
        // Show confirmation message
        alert('Plan selected: ' + button.parentNode.querySelector('h2').innerText);
      });
    });
  
    currencySelect.addEventListener('change', () => {
      const selectedCurrency = currencySelect.value;
      // Update prices based on selected currency
      const prices = document.querySelectorAll('.price');
      prices.forEach(price => {
        const originalPrice = price.getAttribute('data-original-price');
        const convertedPrice = convertCurrency(originalPrice, selectedCurrency);
        price.textContent = convertedPrice;
      });
    });
  
    // Function to convert currency (dummy function)
    function convertCurrency(price, currency) {
      // Dummy conversion logic
      // In a real scenario, this would be replaced with actual currency conversion logic
      const conversionRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        INR: 73.5 // Adjust this conversion rate as per the actual rate
    };
    
      const convertedPrice = parseFloat(price) * conversionRates[currency];
      return `${currency} ${convertedPrice.toFixed(2)}`;
    }
  });
  