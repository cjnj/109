let catalog = [
{
    title: "astronaut1",
    category: "red flag",
    price: 20.50,
    image: "1.jpg",
    _id: "1",
},
{
    title: "astronaut2",
    category: "summit",
    price: 25.30,
    image: "2.jpg",
    _id: "2",
},
{
    title: "astronaut3",
    category: "desert",
    price: 30.15,
    image: "3.jpg",
    _id: "3",
},
{
    title: "astronaut4",
    category: "discover",
    price: 35.90,
    image: "4.jpg",
    _id: "4",
},
{
    title: "astronaut5",
    category: "adventure",
    price: 40.20,
    image: "5.jpg",
    _id: "5",
},
];

//component is DataService
class DataService {
getProducts() {
    return catalog;
}

addToCart(prod) {
    // add producty to the local storage
    // local storage support stiing, json format
    let cart = this.readCart();
    cart.push(prod);

    const jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart", jsonCart);
}
readCart() {
    // reads the cart from the local storage
    const jsonCart = localStorage.getItem('cart');
    if(jsonCart) {
        return JSON.parse(jsonCart);
    } 
    else {
        return []; //empty cart
    }
}
}

export default DataService;
