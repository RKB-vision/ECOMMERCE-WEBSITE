const authNav=document.querySelector("#auth-nav")
const item_list=document.querySelector("#item-list")
const product_area=document.querySelector(".product-grid")

let basket=JSON.parse(localStorage.getItem("basket"))||[];

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

//FOR LOGIN LOGOUT NAV STATE IN INDEX.HTML
function updateNav(){
    const token=localStorage.getItem("token")
    const name=localStorage.getItem("name")
    
    if(token){
        authNav.innerHTML=`<span style="color:#636e72">${name}</span><a class="auth-btn" id="log-out">Logout</a>`
        document.querySelector("#log-out").addEventListener("click",()=>{
        localStorage.clear()
        window.location.reload();
})
    }
    else{
        authNav.innerHTML=`<a href="login.html" class="auth-btn">Login</a>`
    }
}
updateNav()

