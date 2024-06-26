
let currentIndex;
let cartitems = JSON.parse(localStorage.getItem("cart")) || [];

// for display the items card
(async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result  = await response.json()

        const div = document.getElementById("main")
        for(let i = 0; i < result.length - 12; i++){ 
            currentIndex = i
            const itemCard = document.createElement("div");

            const imgDiv = document.createElement("img");
            imgDiv.src = result[i].image;
            itemCard.appendChild(imgDiv);

            const titleDiv = document.createElement("div");
            const divNode = document.createTextNode(` ${result[i].title}`);
            titleDiv.appendChild(divNode); 
            itemCard.appendChild(titleDiv);
            titleDiv.className = 'title';

            const priceDiv = document.createElement("div");
            const pricedivNode = document.createTextNode(` $${result[i].price}`);
            priceDiv.appendChild(pricedivNode); 
            itemCard.appendChild(priceDiv);
            priceDiv.className = 'price';

            div.appendChild(itemCard);
            itemCard.className = 'card';

            // const offerdiv = document.createElement('div');
            // const offerdivNode = document.createTextNode('30% off');
            // offerdiv.appendChild(offerdivNode);
            // itemCard.appendChild(offerdiv);
            // offerdiv.className = 'offer';

          
            const card_btn_div = document.createElement('div');
            itemCard.appendChild(card_btn_div);
            card_btn_div.className = 'card-btns';

           
            const itemdetails = document.createElement('a');
            const itemdetailsNode = document.createTextNode('Order Now');
            itemdetails.href = `singlcard.html?id=${result[i].id}`;
            itemdetails.appendChild(itemdetailsNode);
            card_btn_div.appendChild(itemdetails);

            
            const cardbtnDiv = document.createElement('button');
            cardbtnDiv.onclick = function() {
                addTocart(result[i]);
            };
            const cardbtntextNode = document.createTextNode('Add to cart');
            cardbtnDiv.appendChild(cardbtntextNode);
            card_btn_div.appendChild(cardbtnDiv);
        }
    } catch (error) {
        console.log(error);
    }
})();



// Add the new item to the cartitems array

function addTocart(data) {
    cartitems.push(data);

    console.log(cartitems);
    localStorage.setItem("cart", JSON.stringify(cartitems));
}

// display more items after click on button 'view more' 

async function displayMoreitems(){
  console.log(currentIndex);
    try {

       
       let jcurrentIndex;
        const response = await fetch('https://fakestoreapi.com/products');
        const result  = await response.json()
        
        const div = document.getElementById("main")
        
        for(let j = currentIndex ;j<result.length;j++){

            jcurrentIndex = j

        const itemcard = document.createElement('div')
        //  itemcard.href = `singlcard.html?id=${result[j].id}`
        const imgDiv = document.createElement('img')
        imgDiv.src=result[j].image
        itemcard.appendChild(imgDiv);

        const titleDiv = document.createElement('div')
        const divNode =document.createTextNode(result[j].title)
        titleDiv.appendChild(divNode)
        itemcard.appendChild(titleDiv)
        titleDiv.className='title'

        const priceDiv = document.createElement('div')
        const pricedivNode = document.createTextNode(`$${result[j].price}`)
        priceDiv.appendChild(pricedivNode)
        itemcard.appendChild(priceDiv)
        priceDiv.className='price'



        div.appendChild(itemcard)
        itemcard.className='card'

        const offerdiv = document.createElement('div')
           const offerdivNode = document.createTextNode('30%off')
           offerdiv.appendChild(offerdivNode)
           itemcard.appendChild(offerdiv)
           offerdiv.className='offer'


           const card_btn_div = document.createElement('div')
           itemcard.appendChild(card_btn_div)
           card_btn_div.className = 'card-btns'

           const itemdetails = document.createElement('a')
           const itemdetailsNode = document.createTextNode('Order Now')
           itemdetails.href = `singlcard.html?id=${result[j].id}`
           itemdetails.appendChild(itemdetailsNode)
           card_btn_div.appendChild(itemdetails)
        
           const cardbtnDiv = document.createElement('button');
            cardbtnDiv.onclick = function() {
                addTocart(result[j]);
            };
           const cardbtntextNode = document.createTextNode('Add to cart')
           cardbtnDiv.appendChild(cardbtntextNode)
           card_btn_div.appendChild(cardbtnDiv)

        }



        // if(j == result.length){
        //     document.querySelector('.viewmore').remove();
        // }
    }
     catch (error) {
        console.log(error);
    }



}

// search bar functionality

async function search()
{

    let input = document.getElementById('input')
    console.log(input.value);
    const response = await fetch('https://fakestoreapi.com/products');
    let result  = await response.json()
    const n = result.filter((item )=>item.title.includes(input.value))
    console.log(n);
    

    const div = document.getElementById("main")
     div.innerHTML= null
    for(let i=0;i<n.length;i++){
     
        const itemCard = document.createElement("div")
        const imgDiv = document.createElement("img")
        imgDiv.src=n[i].image
        itemCard.appendChild(imgDiv)
    
    
       
       const titleDiv = document.createElement("div")
       const divNode = document.createTextNode(`Title: ${n[i].title}`)
       titleDiv.appendChild(divNode) 
       itemCard.appendChild(titleDiv)
       titleDiv.className='title';
    
       
    
       
    
       const priceDiv = document.createElement("div")
       const pricedivNode = document.createTextNode(`Price: $${n[i].price}`)
       priceDiv.appendChild(pricedivNode) 
       itemCard.appendChild(priceDiv)
       priceDiv.className='price'
    
    
    
       div.appendChild(itemCard)
       itemCard.className='card'
        
    

    }
    
  
}


// Order now button functionality
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
console.log(productId);

if(productId){
    (async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const result  = await response.json()
    
            console.log(result);

            const div = document.getElementById("productimg")
            const imgDiv = document.createElement("img")
            imgDiv.src=result.image
            div.appendChild(imgDiv)
    
    
                
            const titlediv = document.getElementById("p-title")
            const titlehheading = document.createElement("h1")
            const headingNode = document.createTextNode(` ${result.title}`)
            titlehheading.appendChild(headingNode)
            titlediv.appendChild(titlehheading)
            


            const descriptiondiv = document.getElementById("description")
            const productDescription = document.createElement('p')
            const descriptionNode = document.createTextNode(result.description)
            productDescription.appendChild(descriptionNode)
            descriptiondiv.appendChild(productDescription);

            const pricediv = document.getElementById('itemprice')
            const productpricepara = document.createElement('p')
            const productpriceNode = document.createTextNode(`Price $${result.price}`)
            productpricepara.appendChild(productpriceNode)
            pricediv.appendChild(productpricepara)

           
          

 
    
            
        } catch (error) {
            console.log(error);
        }
    })();
}


// for displaying running text

const str = 'Save more with coupons & up to 70% Off !'

let count = 1;
const typingText = ()=>{

    const typingPara = document.getElementById('typingtxt')
    const returnstr = str.slice(0,count)

    
    typingPara.innerHTML = returnstr;
    count++
    
    setTimeout(()=>typingText(),100)
}
typingText()
         let prev=0;
         let next=4;

async function itemlistCard(prev, next){
    try {

        const response = await fetch('https://fakestoreapi.com/products');
        const data  = await response.json()
        const result = data.slice(prev,next)
    

         const div= document.getElementById('productitemlistcard')
         div.innerHTML = null
         for(let i=0;i<result.length;i++){

           
            const itemCard = document.createElement("a")
            itemCard.href = `singlcard.html?id=${result[i].id}`
            const imgDiv = document.createElement("img")
            imgDiv.src=result[i].image
            itemCard.appendChild(imgDiv)


           
        //    const titleDiv = document.createElement("div")
        //    const divNode = document.createTextNode(` ${result[i].title}`)
        //    titleDiv.appendChild(divNode) 
        //    itemCard.appendChild(titleDiv)
        //    titleDiv.className='title';

           

           const priceDiv = document.createElement("div")
           const pricedivNode = document.createTextNode(` $${result[i].price}`)
           priceDiv.appendChild(pricedivNode) 
           itemCard.appendChild(priceDiv)
           priceDiv.className='price'

      

           div.appendChild(itemCard)
           itemCard.className='card'
         }
        
         
    } catch (error) {
        console.log(error);
    }
    
}
itemlistCard(prev, next);
 

function decrement(){
    if(prev==0){
        return
    }
    else{
        prev--
        next--
        itemlistCard(prev, next);
    }
    
 }
 function increment(){
  
    prev++
    next++
    itemlistCard(prev, next);
    
    
}





//'https://fakestoreapi.in/api/products'