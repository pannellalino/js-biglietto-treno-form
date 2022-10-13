/* ELEMENTI */
/* bottoni */
const btnGenera = document.getElementById('genera');
const btnReset = document.getElementById('annulla');
/* input */
const inputName = document.getElementById('name');
const inputKm = document.getElementById('km');
const inputRange = document.getElementById('fascia');
/* output */
const outputName = document.getElementById('outputName');
const outputOffer = document.getElementById('outputOffer');
const outputCoach = document.getElementById('outputCoach');
const outputCP = document.getElementById('outputCP');
const outputPrice = document.getElementById('outputPrice');
const ticketBox = document.querySelector('.ticket');


/* DATI DI PARTENZA */
let passengerName, totalKm, ageRange, totalPrice, coach, code;
const juniorDiscount = .20;
const silverDiscount = .40;
const priceForKm = .21;


/* EVENTI */
btnGenera.addEventListener('click', function(){
  /* valorizzo i dati */
  passengerName = inputName.value;
  totalKm = inputKm.value;
  ageRange = inputRange.value;
  coach = Math.ceil(Math.random() * 12);
  code = Math.floor(Math.random() * (999999 - 100000) +1 ) + 100000;
  totalPrice = totalKm * priceForKm;

  let labelOffer = 'Biglietto standard';

  console.log(totalPrice)
  /* calcolo lo sconto */
  if(ageRange === 'minorenne') {
    totalPrice *= (1 - juniorDiscount);
    labelOffer = 'Sconto junior';
  }else if(ageRange === 'silver'){
    totalPrice *= (1 - silverDiscount)
    labelOffer = 'Sconto silver';
  }
  
  outputName.innerHTML = passengerName;
  outputOffer.innerHTML = labelOffer;
  outputCoach.innerHTML = coach;
  outputCP.innerHTML = code;
  outputPrice.innerHTML = '€ ' +totalPrice.toFixed(2);

  ticketBox.classList.remove('hide');

});

btnReset.addEventListener('click',function(){
  inputName.value = '';
  inputKm.value = '';
  inputRange.value = 'maggiorenne';

  ticketBox.classList.add('hide');
})