const prompt = require('prompt-sync')();

let peoples = parseInt(prompt("Hello enter number of peoples in your order: "));
let peices = parseInt(prompt("Hello enter number of pieces do you want: "));
// let size = parseInt(prompt("Enter you need pizza size (5inch,7inch,10inch,15inch,24inch)- enter number only: "));

function CustomizePizza(NumPeoples, NumPieces) {
    console.log(`I think you need ${NumPieces} pieces because you have ${NumPeoples} peoples`);
    if(NumPieces > 0 && NumPieces < 5) {
        console.log( `You can buy this has 4 pieces \n 5 inch size \n Lowest Price is according to your need $3`);
    } else if (NumPieces > 4 && NumPieces < 7){
        console.log( `You can buy this has 6 pieces \n 7 inch size \n Lowest Price is according to your need $5 `);
    }else if (NumPieces > 6 && NumPieces < 11){
        console.log( `You can buy this has 10 pieces \n 10 inch size \n Lowest Price is according to your need$8 `);
    }else if (NumPieces > 10 && NumPieces < 16){
        console.log( `You can buy this has 15 pieces \n  15inch size \n Lowest Price is according to your need $12 `);
    }else if (NumPieces > 15 && NumPieces < 25){
        console.log( `You can buy this has 24 pieces \n 24 inch size \n Lowest Price is according to your need $18 `);
    }else if (NumPieces > 24){
        let num_of_24inch_pizzas = NumPieces/24;
        let total_price = num_of_24inch_pizzas * 18;
        console.log(` For group of people get 24 inch pizzas: ${num_of_24inch_pizzas} and your Total price is $${total_price}` );
    }
    
}
console.log(CustomizePizza(peoples, peices))