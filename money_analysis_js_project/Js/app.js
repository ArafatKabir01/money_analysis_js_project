// string to number converter
function convertNum (idName){
        const getID = document.getElementById(idName).value; 
        const convertNumber = parseFloat(getID);
        return convertNumber;
}

// function errorHandleing (idRequare,value){
//         const errorMsg = document.getElementById(idRequare)
//         if(value == true){
//                 const error = document.getElementById(idRequare);
//                 error.classList.add('d-block');
//         }
//         else{
//                 const error = document.getElementById(idRequare);
//                 error.classList.add('d-none');
//         }
//         return errorMsg;
// }

document.getElementById('calc-btn').addEventListener('click', function(){
const incomeValuNum = convertNum('income-field');
const foodExpValuNum = convertNum('food-exp-field');
const rentExpValuNum = convertNum('rent-exp-field');
const clothesExpValuNum = convertNum('clothes-exp-field');
const totalExpCenter = document.getElementById('total-exp');
const balancecenter = document.getElementById('current-balance');
if (incomeValuNum >= 0 && foodExpValuNum >= 0 && rentExpValuNum >= 0 && clothesExpValuNum >= 0  ){
        const totalExp = parseFloat(foodExpValuNum)+parseFloat(rentExpValuNum)+parseFloat(clothesExpValuNum);
        const curretBalance = parseFloat(incomeValuNum - totalExp);
        if(totalExp < incomeValuNum){
                balancecenter.innerText = curretBalance;
                totalExpCenter.innerText = totalExp;
                const error = document.getElementById('error-expenses-msg');
                error.style.display='none';
                }
        else{
                const error = document.getElementById('error-expenses-msg');
                error.style.display='block';
                }
        const error = document.getElementById('error-negative-msg');
        error.style.display='none';
    }
   

else{
        const error = document.getElementById('error-negative-msg');
        error.style.display='block';
    };
});



        //  seving function section
document.getElementById('saving-btn').addEventListener('click', function(){
        
        const incomeValuNum = convertNum('income-field');
        const savingAmmount = document.getElementById('saving-ammount');
        const remainingBalance = document.getElementById('remaining-balance');
        const balancecenter = document.getElementById('current-balance');
        const savingInputFieldValue = convertNum('saving-input-field');
        if(savingInputFieldValue >= 0){
                const savingInputFieldValueParsentage = savingInputFieldValue / 100;
                savingAmmount.innerText =Math.floor(incomeValuNum * savingInputFieldValueParsentage);
                const error = document.getElementById('error-negative-msg');
                error.style.display='none'
        }
        else{
                const error = document.getElementById('error-negative-msgs');
        error.style.display='block' 
     
        }

        const balancecenterNum = parseFloat(balancecenter.innerText);
        const remainingBal = balancecenterNum - parseFloat(savingAmmount.innerText);
        if (parseFloat(remainingBal) > 0){
                remainingBalance.innerText = remainingBal;
                const error = document.getElementById('error-saving-msg');
                error.style.display='none' 
        }
        else{
                const error = document.getElementById('error-saving-msg');
                error.style.display='block' 
        };
});
// toast close button function
function closeButton(buttonName){
        const idCall = document.getElementById(buttonName + '-msg');
        idCall.style.display="none";
};
     
document.getElementById('error-exp-btn').addEventListener('click', function(){
 closeButton('error-expenses');
});
document.getElementById('error-negative-btn').addEventListener('click', function(){
 closeButton('error-negative');
});
document.getElementById('error-saving-btn').addEventListener('click', function(){
 closeButton('error-saving');
});
