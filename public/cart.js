const item_list=document.querySelector("#item-list")
const total_price=document.querySelector("#total-price")
const subtotal_price=document.querySelector("#subtotal-price")
const basket=JSON.parse(localStorage.getItem("basket"))||[]
const checkout=document.querySelector("#checkout")
const nav_user=document.querySelector("#nav-user")

let total=0
render();


function render(){
    const user=localStorage.getItem("name")
    nav_user.innerHTML=`${user}`
    
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
        // do{
        clutter += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-name">${element.name}</span>
                    <span class="cart-item-price">$${parseFloat(element.price).toFixed(2)}</span>
                </div>
                <div class="quantity-control">
                    <label for="quantity-${index}">Qty:</label>
                    <input type="number" value="${element.quantity}" min="1" max="10" id="quantity-${index}" class="qty-input" onchange="updateQuantity('${element.id}',this.value)">
                </div>

                <button class="remove-btn" onclick="removeItem(${index})" style="background: none; border: none; color: #ff7675; cursor: pointer; font-size: 0.9rem;  font-weight: 500;">Remove</button>
            </div>`;
            // while(basket.filter(item=>item.id=element.id).length===1)
        total += parseFloat(element.price)*element.quantity
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
                quantity:item.quantity,
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


//UPDATE PRICE WHEN SOMEONE CHANGES VALUE IN CART
window.updateQuantity=(id, newQuantity) => {
    const recorded=basket.find(item=>item.id===id)
    recorded.quantity=parseInt(newQuantity)
    localStorage.setItem("basket",JSON.stringify(basket))
    render()
}


// LEARN ABOUT CART-COMP JS