function fetchData() {
    const apiUrl = 'https://restcountries.com/v3.1/all'; // REST Countries API endpoint for all countries
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        displayCountries(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        displayError(error);
      });
  }
  
  function displayCountries(countries) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
  
    if (countries && countries.length > 0) {
      const list = document.createElement('ul');
  
      countries.forEach((country) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Country Name: ${country.name.common}, Population: ${country.population}`;
        list.appendChild(listItem);
      });
  
      dataContainer.appendChild(list);
    } else {
      dataContainer.textContent = 'No countries available';
    }
  }
  
  function displayError(error) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = `Error: ${error.message}`;
  }
  