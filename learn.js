const prompt = require('prompt-sync')();

let peoples = parseInt(prompt("Hello enter number of peoples in your order: "));
let peices = parseInt(prompt("Hello enter number of Total pieces do you want: "));
// let size = parseInt(prompt("Enter you need pizza size (5inch,7inch,10inch,15inch,24inch)- enter number only: "));

function CustomizePizza(Num_Of_Peoples, Num_Of_Pieces) {
    
    console.log(`I think you need ${Num_Of_Pieces} pieces because you have ${Num_Of_Peoples} peoples`);

    let inch_5_pieces_default_price = 3;
    let inch_7_pieces_default_price = 5;
    let inch_10_pieces_default_price = 8;
    let inch_15_pieces_default_price = 12;
    let inch_24_pieces_default_price = 18;

    let Num_of_inch_5_pizzas = Math.ceil(Num_Of_Pieces/4);
    let num_of_inch_5_pieces = Num_of_inch_5_pizzas*4;

    let Num_of_inch_7_pizzas = Math.ceil(Num_Of_Pieces/6);
    let num_of_inch_7_pieces = Num_of_inch_7_pizzas*6;

    let Num_of_inch_10_pizzas = Math.ceil(Num_Of_Pieces/10);
    let num_of_inch_10_pieces = Num_of_inch_10_pizzas*10;

    let Num_of_inch_15_pizzas = Math.ceil(Num_Of_Pieces/15);
    let num_of_inch_15_pieces = Num_of_inch_15_pizzas*15;

    let Num_of_inch_24_pizzas = Math.ceil(Num_Of_Pieces/24);
    let num_of_inch_24_pieces = Num_of_inch_24_pizzas*24;

    let price_of_inch_5_pieces = Num_of_inch_5_pizzas*inch_5_pieces_default_price;
    let price_of_inch_7_pieces = Num_of_inch_7_pizzas*inch_7_pieces_default_price;
    let price_of_inch_10_pieces = Num_of_inch_10_pizzas*inch_10_pieces_default_price;
    let price_of_inch_15_pieces = Num_of_inch_15_pizzas*inch_15_pieces_default_price;
    let price_of_inch_24_pieces = Num_of_inch_24_pizzas*inch_24_pieces_default_price;

    if(Num_Of_Pieces == 0) {

        console.log("Number of pieces can't be zoro");
    } else if(Num_Of_Pieces > 0 && Num_Of_Pieces < 5) {

        console.log( `You can buy this has 4 pieces and 5 inch size
        \nLowest Price is according to your need $3`);

    } else if (Num_Of_Pieces > 4 && Num_Of_Pieces < 7){
    
        if(inch_5_pieces_default_price < price_of_inch_5_pieces) {
            console.log( `You can buy this order two methods using;
            \nFirst method is 5inch-size ${Num_of_inch_5_pizzas} pizzas total pieces- ${num_of_inch_5_pieces} total price: $${price_of_inch_5_pieces}
            \nSecond method is 1 pizza with 6 pieces 7 inch size total price: $${inch_7_pieces_default_price}
            \n\n Lowest Price is second way according to your need $5 `);
        }  
    }else if (Num_Of_Pieces > 6 && Num_Of_Pieces < 11){

        let minvalue = Math.min(inch_10_pieces_default_price, price_of_inch_5_pieces, price_of_inch_7_pieces);

        console.log( `You can buy this order three methods using;
            \nFirst method is 5inch-size ${Num_of_inch_5_pizzas} pizzas total pieces- ${num_of_inch_5_pieces} total price: $${price_of_inch_5_pieces}
            \nSecond method is 7inch-size ${Num_of_inch_7_pizzas} pizzas total pieces- ${num_of_inch_7_pieces} total price: $${price_of_inch_7_pieces}
            \nThird method is 1 pizza with 10 pieces 10inch size total price: $${inch_10_pieces_default_price}
            \n\n Lowest Price is for your need: $${minvalue} `);

        
    }else if (Num_Of_Pieces > 10 && Num_Of_Pieces < 16){

        let minvalue = Math.min(inch_15_pieces_default_price, price_of_inch_5_pieces, price_of_inch_7_pieces,price_of_inch_10_pieces);

        console.log( `You can buy this order four methods using;
            \nFirst method is 5inch-size ${Num_of_inch_5_pizzas} pizzas total pieces- ${num_of_inch_5_pieces} total price: $${price_of_inch_5_pieces}
            \nSecond method is 7inch-size ${Num_of_inch_7_pizzas} pizzas total pieces- ${num_of_inch_7_pieces} total price: $${price_of_inch_7_pieces}
            \nThird method is 10inch-size ${Num_of_inch_10_pizzas} pizzas total pieces- ${num_of_inch_10_pieces} total price: $${price_of_inch_10_pieces}
            \nFourth method is 1 pizza with 15 pieces 15inch size total price: $${inch_15_pieces_default_price}
            \n\n Lowest Price is for your need: $${minvalue} `);
        
    }else if (Num_Of_Pieces > 15 && Num_Of_Pieces < 25){

        let minvalue = Math.min(inch_24_pieces_default_price, price_of_inch_5_pieces, price_of_inch_7_pieces,price_of_inch_10_pieces,price_of_inch_15_pieces);

        console.log( `You can buy this order five methods using;
            \nFirst method is 5inch-size ${Num_of_inch_5_pizzas} pizzas total pieces- ${num_of_inch_5_pieces} total price: $${price_of_inch_5_pieces}
            \nSecond method is 7inch-size ${Num_of_inch_7_pizzas} pizzas total pieces- ${num_of_inch_7_pieces} total price: $${price_of_inch_7_pieces}
            \nThird method is 10inch-size ${Num_of_inch_10_pizzas} pizzas total pieces- ${num_of_inch_10_pieces} total price: $${price_of_inch_10_pieces}
            \nFour method is 15inch-size ${Num_of_inch_15_pizzas} pizzas total pieces- ${num_of_inch_15_pieces} total price: $${price_of_inch_15_pieces}
            \nFifth method is 1 pizza with 24 pieces 24inch size total price: $${inch_24_pieces_default_price}
            \n\n Lowest Price is for your need: $${minvalue} `);

    }else if (Num_Of_Pieces > 24 && Num_Of_Pieces < 9999999991){

        let minvalue = Math.min(price_of_inch_5_pieces, price_of_inch_7_pieces,price_of_inch_10_pieces,price_of_inch_15_pieces,price_of_inch_24_pieces);

        console.log( `You can buy this order five methods using;
            \nFirst method is 5inch-size ${Num_of_inch_5_pizzas} pizzas total pieces- ${num_of_inch_5_pieces} total price: $${price_of_inch_5_pieces}
            \nSecond method is 7inch-size ${Num_of_inch_7_pizzas} pizzas total pieces- ${num_of_inch_7_pieces} total price: $${price_of_inch_7_pieces}
            \nThird method is 10inch-size ${Num_of_inch_10_pizzas} pizzas total pieces- ${num_of_inch_10_pieces} total price: $${price_of_inch_10_pieces}
            \nFour method is 15inch-size ${Num_of_inch_15_pizzas} pizzas total pieces- ${num_of_inch_15_pieces} total price: $${price_of_inch_15_pieces}
            \nFifth method is 24inch-size ${Num_of_inch_24_pizzas} pizzas total pieces- ${num_of_inch_24_pieces} total price: $${price_of_inch_24_pieces}
            \n\n Lowest Price is for your need: $${minvalue} `);
    }
    
}
console.log(CustomizePizza(peoples, peices));