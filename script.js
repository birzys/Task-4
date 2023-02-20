/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

fetch("cars.json")
  .then((response) => response.json())
  .then((data) => {
    const brands = {}; // objektas, kuriame bus saugomi automobilių gamintojai ir jų modeliai

    data.forEach((car) => {
      const { brand, models } = car;
      if (!brands[brand]) {
        brands[brand] = [models];
      } else {
        brands[brand].push(models);
      }
    });

    const outputDiv = document.getElementById("output");
    for (const brand in brands) {
      const models = brands[brand].join(", ");
      const card = `
        <div class="card">
          <h2>${brand}</h2>
          <p>Models: ${models}</p>
        </div>
      `;
      outputDiv.insertAdjacentHTML("beforeend", card);
    }
  })
  .catch((error) => console.log(error));
