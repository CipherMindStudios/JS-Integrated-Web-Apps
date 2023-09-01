const apiKey = '003ab4ade266ce36f4a82ed4'; // Replace with your API key

// Fetch available currencies and populate the dropdowns
async function fetchCurrencies() {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    const data = await response.json();
    const currencies = Object.keys(data.rates);

    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    currencies.forEach(currency => {
        const option1 = new Option(currency, currency);
        const option2 = new Option(currency, currency);
        fromCurrencySelect.add(option1);
        toCurrencySelect.add(option2);
    });
}

// Perform the currency conversion
async function convert() {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const resultElement = document.getElementById('conversionResult');

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Fetch exchange rates
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const exchangeRate = data.rates[toCurrency];

    // Perform conversion
    const result = (amount * exchangeRate).toFixed(2);

    // Display result
    resultElement.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}

// Fetch currencies on page load
window.addEventListener('load', () => {
    fetchCurrencies();
});
