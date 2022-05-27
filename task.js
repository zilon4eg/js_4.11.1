const getCurrency = new XMLHttpRequest();

getCurrency.addEventListener('readystatechange', () => {
    if (getCurrency.readyState === getCurrency.DONE) {
        // преобразуем строку ответа в объект JSON
        const res = JSON.parse(getCurrency.responseText);
        const valutes = res.response.Valute;
        
        for (const key in valutes) {
            const valute = valutes[String(key)];

            // создаем элемент
            const newItem = document.createElement('div');
            newItem.className = 'item';
            document.getElementById('items').appendChild(newItem);

            const newItemCode = document.createElement('div');
            newItemCode.className = 'item__code';
            newItemCode.textContent = valute['CharCode'];
            newItem.appendChild(newItemCode);

            const newItemValue = document.createElement('div');
            newItemValue.className = 'item__value';
            newItemValue.textContent = valute['Value'];
            newItem.appendChild(newItemValue);

            const newItemCurrency = document.createElement('div');
            newItemCurrency.className = 'item__currency';
            newItemCurrency.textContent = 'руб.';
            newItem.appendChild(newItemCurrency);
        }

        // скрываем loder
        const loader = document.getElementById('loader');
        loader.classList.remove('loader_active');
    }
});

getCurrency.open('GET', 'https://netology-slow-rest.herokuapp.com');
getCurrency.send();