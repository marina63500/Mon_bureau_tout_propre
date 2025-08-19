const form = document.getElementById("formulaire");
const surfaceInput = document.getElementById("surface");
const frequenceInput = document.getElementById("frequence");


// Écouteur d'événement pour le formulaire
form.addEventListener('submit', (e) =>{
  e.preventDefault(); // empêche de rafraichir la page

   //récupération de la valeur de l'input surface
    let surface = surfaceInput.value;

    let tarifDeBase = surface * 1.5;

    //injecte le prix dans la div
    const prix = document.getElementById("prix");
    prix.innerHTML = `Tarif de base : <strong>${tarifDeBase} €</strong>`;


    // Récupération de la valeur de l'input fréquence
    let nbreFrequence = Number(frequenceInput.value);

    const majoration = document.getElementById("majoration");
    // Calcul de la majoration en fonction de la fréquence
    majoration.innerHTML = `Majoration : <strong>${nbreFrequence * tarifDeBase - tarifDeBase} €</strong>`;

     // Récupération de la valeur du radio "vitre" sélectionné
     //document.querySelector('input[name="vitre"]:checked')=>récupere ce qui est coché
    const vitre = document.querySelector('input[name="vitre"]:checked');
    const optionSup = document.getElementById("optionSup");
    let optionVitres = 0; // Initialisation de l'option vitres

    if (vitre) {
      // Vérifie qu'un radio est coché
      if (vitre.value === "true") {
        // Si l'option vitres est sélectionnée,on multiplie par 10% a verifier si sur tarif de base seul ou pas
      optionVitres = Math.ceil((tarifDeBase + nbreFrequence) * 0.1);

      optionSup.innerHTML = `Option vitres : <strong>${optionVitres} €</strong>`;
    } else {
      optionSup.innerHTML = `Option vitres : <strong>Non</strong>`;
    }
  } else {
    optionSup.innerHTML = `Option vitres : <strong>Non</strong>`;
  }


    //   D. Résultat final affiché :
    // • Montant HT = prix après options
  let montantHT = tarifDeBase + (nbreFrequence * tarifDeBase - tarifDeBase) + optionVitres;
    // • TVA (20%) = Montant HT × 0,20
  let tva = montantHT * 0.20;
  // • Montant TTC = Montant HT + TVA
  let montantTTC = montantHT + tva;

  const total = document.getElementById("total");
  total.innerHTML = `
    <li>Montant HT : ${montantHT} €</li>
    <li>TVA (20%) : ${tva} €</li>
    <li>Montant TTC : ${montantTTC} €</li>
  `;

});
