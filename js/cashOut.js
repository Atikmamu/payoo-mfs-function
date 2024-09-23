document.getElementById('btn-cash-out')
   .addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-Cash-Out');
    const pinNumber = getInputFieldValueById('input-Cash-Out-pin');

    // console.log('inside the click handler', cashOut, pinNumber);

    // validation cash out Nan 
    
    if(isNaN(cashOut)){
        alert('Failed to cash out.');
        return;
    }



    if(pinNumber === 1234){
         const balance = getTextFieldValueById('account-balance');

         // validation check taka bashi cashout korla -2444 na dekhai 

         if(cashOut > balance){
            alert('you do not have enough money to cash out');
            return;
         }



         const newBalance = balance - cashOut;
         document.getElementById('account-balance').innerText = newBalance;

         // add to transaction history 
         const div = document.createElement('div');
         div.classList.add('bg-yellow-300');
         div.innerHTML = `
              <h4 class="text-2xl font-bold">Cash Out</h4>
              <p>${cashOut} withdraw. New Balance ${newBalance}</p>
         
         `

         document.getElementById('transaction-container').appendChild(div);


    }
    else{
        alert('No money for you.... DGM.');
    }

});



