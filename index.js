function Calculate(){
    let amount = document.getElementsByTagName('input')[0].value ;

let rate = document.getElementsByTagName('input')[1].value ;

let months = document.getElementsByTagName('input')[2].value; 


let loan = parseFloat(amount)*parseFloat(rate)*parseFloat(months);
let output = document.getElementsByTagName('textarea')[0] ;
output.innerText = loan
console.log(output);

}


// let calculationButton = document.getElementById('calcButton').addEventListener('click',Calculate());
let clearButton = document.getElementById('clear').addEventListener('click',()=>{

    let amount = document.getElementsByTagName('input')[0];
    amount.value ='';
    console.log(document.getElementsByTagName('input')[0]);

    let rate = document.getElementsByTagName('input')[1];
    rate.value ='';
    console.log(document.getElementsByTagName('input')[1]);
    
    let months = document.getElementsByTagName('input')[2];
    months.value =''; 
    let output = document.getElementsByTagName('textarea')[0] ;
output.innerText = '';
    console.log(document.getElementsByTagName('input')[2]);
});

console.log(document.getElementById('clear'));


