
        let depositAmount = 5300;  
        let fundAmount = 0;  
        let historyLog = [];  
        
          
        const depositBtn = document.getElementById('depositBtn');  
        const fundBtn = document.getElementById('fundBtn');  
        const fundBtn1 = document.getElementById('fundBtn1');  
        const fundBtn2 = document.getElementById('fundBtn2');  
        const inputAmount = document.getElementById('inputAmount');  
        const inputAmount1 = document.getElementById('inputAmount1');  
        const inputAmount2 = document.getElementById('inputAmount2');  
        const inputBtn = document.getElementById('inputBtn');  
        const inputBtn1 = document.getElementById('inputBtn1');  
        const historyBtn2 = document.getElementById('historyBtn2');  
        const donateBtn = document.getElementById('donateBtn');  
        const blogBtn = document.getElementById('blogBtn');  
        const historyDiv = document.getElementById('history');  
        
        
        function updateDisplay() {  
            depositBtn.textContent = `${depositAmount} BDT`;  
            fundBtn.textContent = `Fund Amount: ${fundAmount} BDT `;  
            fundBtn1.textContent = `Fund Amount: ${fundAmount} BDT `;  
            fundBtn2.textContent = `Fund Amount: ${fundAmount} BDT `;  
        }     
           
          
        inputBtn.addEventListener('click', () => {  
            const inputTaka = parseInt(inputAmount.value);  
          
        
         
            if (isNaN(inputTaka) || inputTaka <= 0) {  
                alert("Please enter a positive amount.");  
                return;  
            }  
            if (inputTaka > depositAmount) {  
                alert("You cannot input more than the deposit amount.");  
                return;  
            }  
        
              
            depositAmount -= inputTaka;  
            fundAmount += inputTaka;  
            historyLog.push(`Input: ${inputTaka} Tk at ${new Date().toLocaleString('en-US', { timeZone: 'GMT' })}`);  
        
              
            updateDisplay();  
            inputAmount.value = '';  
        });  
        
        
        inputBtn1.addEventListener('click', () => {  
            const inputTaka = parseInt(inputAmount1.value);  
          
             
            if (isNaN(inputTaka) || inputTaka <= 0) {  
                alert("Please enter a positive amount.");  
                return;  
            }  
            if (inputTaka > depositAmount) {  
                alert("You cannot input more than the deposit amount.");  
                return;  
            }  
        
             
            depositAmount -= inputTaka;  
            fundAmount += inputTaka;  
            historyLog.push(`Input: ${inputTaka} Tk at ${new Date().toLocaleString('en-US', { timeZone: 'GMT' })}`);  
        
              
            updateDisplay();  
            inputAmount1.value = '';  
        });  
        
        inputBtn.addEventListener('click', () => {  
            const inputTaka = parseInt(inputAmount2.value);  
          
            if (isNaN(inputTaka) || inputTaka <= 0) {  
                alert("Please enter a positive amount.");  
                return;  
            }  
            if (inputTaka > depositAmount) {  
                alert("You cannot input more than the deposit amount.");  
                return;  
            }  
        
            depositAmount -= inputTaka;  
            fundAmount += inputTaka;  
            historyLog.push(`Input: ${inputTaka} Tk at ${new Date().toLocaleString('en-US', { timeZone: 'GMT' })}`);  
        
            updateDisplay();  
            inputAmount2.value = '';  
        });  
         
        historyBtn.addEventListener('click', () => {  
            if (historyLog.length === 0) {  
                historyDiv.innerHTML = "";  
            } else {  
                historyDiv.innerHTML = historyLog.join('<br>');  
            }  
            historyDiv.style.display = 'block';  
        });  
        
        donateBtn.addEventListener('click', () => {  
            window.location.href = 'index.html';
        });  
        
        blogBtn.addEventListener('click', () => {  
            window.location.href = 'blog.html';   
        });  
          
        updateDisplay();