(async()=>{
    const response = await fetch('https://fakestoreapi.in/api/products')
    const data = await response.json();
    console.log( data);
    // console.log(data[1]);
    // console.log(data[1].images[1]);
})();

