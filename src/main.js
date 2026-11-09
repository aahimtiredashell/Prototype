import './style.css';

const config = import.meta.env;
const siteName = config.VITE_SITE_NAME || 'Добрый сосед';
const currency = config.VITE_CURRENCY || 'RUB';
const currencySymbols = { RUB: '₽', USD: '$', CAD: '$', AUD: '$', EUR: '€', GBP: '£' };

document.title = `${siteName} — Оставить заявку`;
document.querySelector('#site-name').textContent = siteName;
document.querySelector('#currency-symbol').textContent = currencySymbols[currency] || currency;
document.querySelector('.payment-suffix').textContent = currency;

const form = document.querySelector('#request-form');
const confirmation = document.querySelector('#confirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  form.hidden = true;
  confirmation.hidden = false;
});

document.querySelector('#new-request').addEventListener('click', () => {
  form.reset();
  confirmation.hidden = true;
  form.hidden = false;
  document.querySelector('#address').focus();
});
