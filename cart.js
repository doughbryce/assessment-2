///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

// console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    tax += 1;
    cartTotal *= tax;
    cartTotal -= couponValue;
    return cartTotal;
}

// console.log(calcFinalPrice(summedPrice, 2, .07));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    If i were a market restaurant store, id want to know these things about those buying my items:
    * how often they come to this store per week
        * i want to know if they are a regular or not, so i can prioritize their preferences
    * their name
        * so I can keep track of who they actually are
    * their age
        * so i can more properly predict what kinds of things they might be interested in in the future
    * their food preferences (top 3 fav)
        * so i can know what is most important to keep in stock (prioritization)
    * if they have a dog or not
        * so i know if i can trust them

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: `jack johnson`,
    age: 42,
    weeklyFrequency: 2,
    favFood1: `fries`,
    favFood2: `dark chocolate covered bananas`,
    favFood3: `burger`,
    hasDog: true
}

// console.log(customer)