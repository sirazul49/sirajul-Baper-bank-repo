
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput =document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);


// getcurrent dqposut value

const depositTotal = document.getElementById('deposit-total');
const depositTotalText = depositTotal.innerText;

const  previousDepositTotal = parseFloat(depositTotalText);


depositTotal.innerText =previousDepositTotal + depositAmount ;

// clear input field
depositInput.value =('')

// udate balamce 
const balanceTotal =document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText =previousBalanceTotal +depositAmount;


})



// wihdaw balancde

document.getElementById('withdraw-button').addEventListener('click',function (){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;

    const withdrawAmount =parseFloat(withdrawAmountText);
    
// //wgwt witdarw tpoatl



const withdrawTotal =document.getElementById('withdraw-total');
const withdrawTotalText = withdrawTotal.innerText;
const previousWithdrawTotal =parseFloat(withdrawTotalText);


withdrawTotal.innerText =previousWithdrawTotal + withdrawAmount;


// clear wirgdaeaw 
withdrawInput.value = ('');


// balance after withdraw

const balanceTotal =document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);

balanceTotal.innerText=previousBalanceTotal -withdrawAmount;






})


