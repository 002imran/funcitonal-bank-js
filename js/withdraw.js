/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3.get previous amount by using getTextElementValueById function
4.5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithDrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;

    
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalacneTotal = previousBalanceTotal - newWithDrawAmount;
    setTextElementValueById('balance-total', newBalacneTotal);


})