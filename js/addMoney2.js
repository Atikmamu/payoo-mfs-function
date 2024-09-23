document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();   //prevent hosse 

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');


         // validation cheak NaN ...> Transactions 
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        

        // wrong way to verify. do not try it at your serious website...Validate . 
        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;   // balance a add kora falchi 

            // uI te dekhai falsi ..>

            document.getElementById('account-balance').innerText = newBalance;


            // add to transaction history ...> p tag diye.> tamplate sting `${}` diye korbo 
             // `Added: ${ atar moddhe ja kono variable ar man rhakte parbo }`

            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;  // addMoney ka dynamic vabe likhar jonno 
            console.log(p);

            //  should be a common function
            document.getElementById('transaction-container').appendChild(p);

        }
        else{
            alert('Failed to add the money.');
        }



    });
