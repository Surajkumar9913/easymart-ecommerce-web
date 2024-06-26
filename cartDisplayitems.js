// Retrieve cart items from localStorage or initialize to an empty array if not present

let cartitems = JSON.parse(localStorage.getItem("cart")) || [];


const div = document.getElementById('cartDetails')
 document.getElementById('totalcartItems').innerHTML=`Total available cart items : <span>${cartitems.length}</span `

if(cartitems.length==0){
    
    document.getElementById('cart-container').innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000"
                fill="none">
                <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor"
                    stroke-width="1.5" stroke-linecap="round" />
                <path d="M6 6H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <circle cx="6" cy="20" r="2" stroke="currentColor" stroke-width="1" />
                <circle cx="17" cy="20" r="2" stroke="currentColor" stroke-width="1" />
                <path d="M8 20L15 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path
                    d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            
            <h1>Nothing in Cart <a href="index.html">click me</a> to explore more  </h1>
`
}

// Loop through each item in the cart and create elements to display them
for(let i = 0; i < cartitems.length; i++){ 
 
    const itemCard = document.createElement("div");

    const imgDiv = document.createElement("img");
    imgDiv.src = cartitems[i].image;
    itemCard.appendChild(imgDiv);

    const titleDiv = document.createElement("p");
    const divNode = document.createTextNode(` ${cartitems[i].title}`);
    titleDiv.appendChild(divNode); 
    itemCard.appendChild(titleDiv);
    titleDiv.className = 'title';

    const priceDiv = document.createElement("p");
    const pricedivNode = document.createTextNode(` $${cartitems[i].price}`);
    priceDiv.appendChild(pricedivNode); 
    itemCard.appendChild(priceDiv);
    priceDiv.className = 'price';

    div.appendChild(itemCard);
    itemCard.className = 'cart-items';


    const rmvbtn = document.createElement('button')
    rmvbtn.innerHTML='Remove'
    itemCard.appendChild(rmvbtn)

    rmvbtn.onclick = function(){

        removeCartitems(cartitems[i])

    };

 
}

// Function to remove an item from the cart

function removeCartitems(data){

    let newcartItems = cartitems.filter((value)=>{return value !== data})

    localStorage.setItem("cart", JSON.stringify(newcartItems));
    location.reload();
    console.log(newcartItems);
}

// Calculate the total price of all items in the cart and then display


let totalPrice=0;
for(let j=0;j<cartitems.length;j++){
    totalPrice += cartitems[j].price
}
document.getElementById('totalprice').innerHTML=` Total Amount (${cartitems.length} items) : <span>$${totalPrice}</span>`
console.log(totalPrice);