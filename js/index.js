let totalAmount =5500;
let totalDonated =0;

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const inputAmount = document.getElementById('inputAmount');

function updateDisplays() {
   button1.textContent =`${totalAmount} BDT`;
   button2.textContent =`${totalDonated} BDT`;
}


document.getElementById('button3').addEventListener('click', ()=>{
   const donationAmount = parseFloat(inputAmount.value);

   if(isNaN(donationAmount) || donationAmount <=0) {
      alert('Please enter a valid positive amount');
      return;
   }

   if(donationAmount > totalAmount){
      alert('You check your available money');
      return;
   }

   totalAmount -= donationAmount;
   totalDonated += donationAmount;

   updateDisplays();

   inputAmount.value = '';
});

   updateDisplays();