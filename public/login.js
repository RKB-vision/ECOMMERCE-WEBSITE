
const form=document.querySelector("#login-form")
const email_input=document.querySelector("#email")
const password_input=document.querySelector("#password")

form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    try{
    const email=email_input.value 
    const password=password_input.value
    const response=await fetch("api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
    })
    if(response.ok){
        const data=await response.json()
        localStorage.setItem("token",data.token)
        localStorage.setItem("name",data.name)
        localStorage.setItem("email",data.email)

        window.location.href="index.html"
    }}
    catch(error){
        console.log("Error trying to access the database",error)
    }

})