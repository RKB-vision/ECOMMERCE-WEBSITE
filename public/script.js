// const cartCount = document.getElementById('cart-count');
const item_list=document.querySelector("#item-list")
const product_area=document.querySelector(".product-grid")

let basket=JSON.parse(localStorage.getItem("basket"))||[];
const token=localStorage.getItem("token")

render();


async function  render(){
    let clutter="" 
    
    res=await fetch("/api/products")
    const products=await res.json()

    products.forEach((item)=>{
        clutter+=`
                <div class="product-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="description">${item.description}</p>
                    <p class="price">$${item.price}</p>
                    <button class="add-btn" data-id="${item._id}" data-name="${item.name}" data-price="${item.price}" >Add to Cart</button>
                </div>        
        `
    })
    product_area.innerHTML=clutter;

    const buttons = document.querySelectorAll('.add-btn');

    buttons.forEach(button => {
    button.addEventListener('click', () => {
        const item = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price
        };
        basket.push(item);
        localStorage.setItem("basket", JSON.stringify(basket));
        // cartCount.innerHTML = basket.length;
    }

    );
    });
}