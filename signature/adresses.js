adr_defaut = "SIÈGE ARRAS";
adresses = miseEnForme(
  {
    "CAPITAINERIE BOULOGNE": "Jetée Sud-Ouest<br>BP 756 -- 62321 BOULOGNE-SUR-MER",
    "CAPITAINERIE CALAIS": "Quai de marée<br>BP 80087 -- 62102 CALAIS Cedex",
    "DML BOULOGNE (au 92)": "92 quai Gambetta<br>BP 629 -- 62200 BOULOGNE-SUR-MER",
    "DML BOULOGNE (au 96)": "96 quai Gambetta<br>BP 629 -- 62200 BOULOGNE-SUR-MER",
    "DML CALAIS": "22 rue Henri de Baillon<br>62100 CALAIS<br>",
    "MONTREUIL": "705 rue de Paris, St Justin-Ecuires<br>BP 53 -- 62170 MONTREUIL-SUR-MER",
    "SIÈGE ARRAS": "100 avenue Winston Churchill<br>CS 10007 -- 62022 ARRAS Cedex"
  }
);



// adr_defaut = "Siège de la DDTM";
// adresses = miseEnForme(
//   {
//     "Appui technique": "29, avenue des Anciens combattants<br>62360 Saint-Léonard",
//     "Capitainerie de Boulogne-sur-Mer" : "Jetée Sud-Ouest<br>62321 Boulogne-sur-Mer",
//     "Capitainerie de Calais": "Quai de marée<br>BP 80087 -- 62102 Calais cedex",
//     "Coordination territoriale Artois": "Centre tertiaire Jean Monnet<br>avenue de Paris<br>BP 295 -- 62405 Béthune cedex",
//     "Coordination territoriale Côte d’Opale": "8, rue du Puits d’Amour<br>62200 Boulogne-sur-Mer",
//     "SER - Police des eaux littorales": "96, boulevard Gambetta<br>62200 Boulogne-sur-Mer",
//     "Service des affaires maritimes et du littoral": "92, boulevard Gambetta<br>62200 Boulogne-sur-Mer",
//     "Service urbanisme ADS de Boulogne-sur-Mer": "8, rue du Puits d’Amour<br>62200 Boulogne-sur-Mer",
//     "Service urbanisme ADS de Béthune": "Centre tertiaire Jean Monnet<br>avenue de Paris<br>BP 295 - 62405 Béthune cedex",
//     "Service urbanisme ADS de Montreuil": "705, rue de Paris<br>St-Justin-Écuires<br>BP 53 -- 62170 Montreuil-sur-Mer",
//     "Siège de la DDTM": "100, avenue Winston Churchill<br>CS 10007 -- 62003 Arras cedex",
//   }
// );


function miseEnForme(a) {
  const codeS = /(\d{2})\s?(\d{3})/gm;
  const codeD = "$1&#8239;$2";

  const ndashS = "--";
  const ndashD = "&ndash;";

  const nlS = "\s*\n\s*";
  const nlD = "<br>";

  b = {};
  for (const s in a) {
    b[s] = a[s].replace(codeS, codeD).replace(ndashS,ndashD).replace(nlS,nlD);
  }

  return b;
}
