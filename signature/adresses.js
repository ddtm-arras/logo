adr_defaut = "SIÈGE ARRAS";
adresses = miseEnForme(
  {
    "CAPITAINERIE BOULOGNE": "Jetée Sud-Ouest<br>BP 756 -- 62321 BOULOGNE-SUR-MER",
    "CAPITAINERIE CALAIS": "Quai de marée<br>BP 80087 -- 62102 CALAIS Cedex",
    "BOULOGNE (au 92)": "92 bd Gambetta<br>BP 629 -- 62200 BOULOGNE-SUR-MER",
    "BOULOGNE (au 96)": "96 bd Gambetta<br>BP 629 -- 62200 BOULOGNE-SUR-MER",
    "DML CALAIS": "22 rue Henri de Baillon<br>62100 CALAIS",
    "MONTREUIL": "705 rue de Paris, St Justin-Ecuires<br>BP 53 -- 62170 MONTREUIL-SUR-MER",
    "SIÈGE ARRAS": "100 avenue Winston Churchill<br>CS 10007 -- 62022 ARRAS Cedex"
  }
);

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
