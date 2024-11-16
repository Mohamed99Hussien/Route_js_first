
var quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Do not watch the clock. Do what it does. Keep going.",
  "Keep your face always toward the sunshine—and shadows will fall behind you."
];


function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length); 
  return quotes[randomIndex];
}


document.getElementById('new-quote').addEventListener('click', () => {
  var quoteElement = document.querySelector('.quote');
  quoteElement.textContent = getRandomQuote();
});
