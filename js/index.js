        let amountDeposited = 0;  
        let fundAmount = 0;  
        let donationHistory = [];  
  
        function updateDisplay() {  
            document.getElementById('amount1').innerText = amountDeposited;  
            document.getElementById('amount2').innerText = fundAmount;  
        }  
 
        document.getElementById('button3').onclick = function () {  
            const inputAmount = parseFloat(document.getElementById('inputAmount').value);  
            
            if (isNaN(inputAmount) || inputAmount <= 0 || inputAmount > amountDeposited) {  
                alert("Please enter a valid positive amount not exceeding the deposited amount!");  
                return;  
            }  

            amountDeposited -= inputAmount;  
            fundAmount += inputAmount;  
  
            const currentDate = new Date();  
            donationHistory.push(`Donated: BDT ${inputAmount} at ${currentDate.toLocaleString()}`);  

            document.getElementById('inputAmount').value = '';  
  
            updateDisplay();  
        };  
  
        document.getElementById('button4').onclick = function () {  
            const historyDiv = document.getElementById('history');  
            historyDiv.innerHTML = "<h3>Donate for Flood at Noakhali, Bangladesh</h3>";  
            donationHistory.forEach(entry => {  
                const p = document.createElement('p');  
                p.innerText = entry;  
                historyDiv.appendChild(p);  
            });  
        };    
        amountDeposited = 6500;   
        updateDisplay(); 