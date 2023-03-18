const antalKast = 9650;

let kast = 0;

let ett=0,tva=0,tre=0,fyra=0,fem=0,sex=0;

let yatzyKast = [];

let yatzy = false;

let i=0,j=0;

//for (let i = 0; i < antalKast; i++) {
while (!yatzy) {
  i++;
  kast = Math.floor((Math.random() * 6) + 1);
  // console.log(kast);

  switch(kast) {
    case 1:
      ett++;
      break;
    case 2:
      tva++;
      break;
    case 3:
      tre++;
      break;
    case 4:
      fyra++;
      break;
    case 5:
      fem++;
      break;
    case 6:
      sex++;
      break;
    default:
      break;
  }

  if (j<5) {
    yatzyKast[j] = kast;
    j++;
    if (j == 5) {
      // console.log(yatzyKast);

      // Kontrollera om vi har fått Yatzy
      if ((yatzyKast[0] == yatzyKast[1]) && (yatzyKast[1] == yatzyKast[2]) && (yatzyKast[2] == yatzyKast[3]) && 
        (yatzyKast[3] == yatzyKast[4])) {
          console.log('YATZY!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          yatzy = true;
        }
      j = 0;
      
    }
    console.log(yatzyKast);
  }

}

total = ett+tva+tre+fyra+fem+sex;

let heading = document.createElement("div");
let headingText = document.createTextNode('Antal ettor:  ' + ett + ' - ' + Math.round(ett/total*100) + ' %');
heading.appendChild(headingText);
document.body.appendChild(heading);

heading = document.createElement("div");
headingText = document.createTextNode('Antal tvåor:  ' + tva + ' - ' + Math.round(tva/total*100) + ' %');
heading.appendChild(headingText);
document.body.appendChild(heading);

heading = document.createElement("div");
headingText = document.createTextNode('Antal treor:  ' + tre + ' - ' + Math.round(tre/total*100) + ' %');
heading.appendChild(headingText);
document.body.appendChild(heading);

heading = document.createElement("div");
headingText = document.createTextNode('Antal fyror:  ' + fyra + ' - ' + Math.round(fyra/total*100) + ' %');
heading.appendChild(headingText);
document.body.appendChild(heading);

heading = document.createElement("div");
headingText = document.createTextNode('Antal femmor: ' + fem + ' - ' + Math.round(fem/total*100) + ' %');
heading.appendChild(headingText);
document.body.appendChild(heading);

heading = document.createElement("div");
headingText = document.createTextNode('Antal sexor:  ' + sex + ' - ' + Math.round(sex/total*100) + ' %');
heading.appendChild(headingText);
document.body.appendChild(heading);

heading = document.createElement("p");
headingText = document.createTextNode('');
heading.appendChild(headingText);
document.body.appendChild(heading);

heading = document.createElement("div");
headingText = document.createTextNode('Du fick yatzy på ETT kast efter:  ' + (total/5) + ' försök');
heading.appendChild(headingText);
document.body.appendChild(heading);