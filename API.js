let apiget = "https://geo.api.gouv.fr/communes?codePostal=";
let cp = document.getElementById("CP");
let communes = document.getElementById("selectCommune")
cp.addEventListener('input', () => {
    let info = cp.value;
    if (info.length === 5) {
        fetch(apiget + info)
            .then(response => response.json())
            .then(data => {
                // Faire quelque chose avec les données reçues de l'API
                console.table(data);
                data.forEach(commune=>{
                	let option = document.createElement('option')
                	option.value = commune.code
                	option.textContent = commune.nom
                	communes.appendChild(option)
                	let buttom = document.createElement('buttom')
                	buttom.value = "valider"
                	communes.appendChild(buttom)
                })
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }
});