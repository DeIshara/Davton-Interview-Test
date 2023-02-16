const prompt = require('prompt-sync')();

let peoples = parseInt(prompt("Hello enter number of peoples in your order: "));
let peices = parseInt(prompt("Hello enter number of peices do you want: "));

function CustomizePizza(NumPeoples, NumPieces) {
    let number_of_slices_for_people = NumPieces/NumPeoples;
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
        let total_price = number_of_slices_for_people * 18;
        console.log(` For one people get these pieses: ${number_of_slices_for_people} and your price is $${total_price}` );
    }
    
}
console.log(CustomizePizza(peoples, peices))