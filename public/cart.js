const item_list=document.querySelector("#item-list")
const total_price=document.querySelector("#total-price")
const subtotal_price=document.querySelector("#subtotal-price")
const basket=JSON.parse(localStorage.getItem("basket"))||[]
const checkout=document.querySelector("#checkout")


let total=0
render();


function render(){
    total=0;
    if (basket.length === 0) {
        item_list.innerHTML = `
            <div class="empty-cart-message">
                <p>Your cart is currently empty.</p>
                <a href="index.html" class="add-btn" style="text-decoration: none; display: inline-block;">Start Shopping</a>
            </div>`;
        total_price.innerHTML = "$0.00";
        subtotal_price.innerHTML = "$0.00";
        checkout.disabled = true;
        checkout.style.opacity = "0.5";
        checkout.style.cursor = "not-allowed";
        return;
    }

    let clutter=""
    basket.forEach((element, index) => {
        clutter += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-name">${element.name}</span>
                    <span class="cart-item-price">$${parseFloat(element.price).toFixed(2)}</span>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})" style="background: none; border: none; color: #ff7675; cursor: pointer; font-size: 0.9rem;">Remove</button>
            </div>`;
        total += parseFloat(element.price)
    });
    item_list.innerHTML = clutter;
    total_price.innerHTML = `$${total.toFixed(2)}`;
    subtotal_price.innerHTML = `$${total.toFixed(2)}`;
    checkout.disabled = false;
    checkout.style.opacity = "1";
    checkout.style.cursor = "pointer";
}

window.removeItem = (index) => {
    basket.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(basket));
    render();
    if (typeof updateFloatingCart === 'function') {
        updateFloatingCart();
    }
}

checkout.addEventListener("click",async (click)=>{

    const token=localStorage.getItem("token")
    if(!token){
        console.log("Please login first")
        window.location.href="login.html"
        return
    }
    const response=await fetch("/api/orders",{
        method:"POST",
        headers:{"Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
            items:basket.map(item=>({
                product:item.id,
                quantity:1,
               price:parseFloat(item.price) 
            })),
            total
        })
    })
    if (response.ok){
        data=await response.json()
        console.log(data.message)
        alert("Order Created")
        localStorage.removeItem("basket")
        basket.length=0
        render();
    }
    else{
        console.log("Error adding order...")
    }
})