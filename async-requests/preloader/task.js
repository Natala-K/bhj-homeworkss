document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
  

    function loadExchangeRates() {
      fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
      
          const rates = data.response.Valute;
          for (let key in rates) {
            if (rates.hasOwnProperty(key)) {
              const item = document.createElement('div');
              item.classList.add('item');
  
              const code = document.createElement('div');
              code.classList.add('item__code');
              code.textContent = rates[key].CharCode;
  
              const value = document.createElement('div');
              value.classList.add('item__value');
              value.textContent = rates[key].Value;
  
              const currency = document.createElement('div');
              currency.classList.add('item__currency');
              currency.textContent = 'руб.';
  
              item.appendChild(code);
              item.appendChild(value);
              item.appendChild(currency);
              itemsContainer.appendChild(item);
            }
          }
      
          loader.classList.remove('loader_active');
        })
        .catch(error => {
          console.error('Ошибка при загрузке данных:', error);
          loader.classList.remove('loader_active'); // Скрыть анимацию загрузки в случае ошибки
        });
    }
  
    loadExchangeRates();
  });
  