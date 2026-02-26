const form=document.querySelector("#register-form")
const user=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")

form.addEventListener("submit",async (e)=>{

    e.preventDefault();

    const username=user.value
    const user_email=email.value
    const user_password=password.value
    try{
    const response=await fetch("/api/auth/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name:username,email:user_email,password:user_password})
    })
    if(response.ok){
        window.location.href="login.html"
    }}
    catch(error){
        console.log("Error:",error)
    }
})