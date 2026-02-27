// Inject toast div
const toastDiv = document.createElement('div')
toastDiv.id = 'toast'
document.body.appendChild(toastDiv)

// Inject toast CSS
const toastStyle = document.createElement('link')
toastStyle.rel = 'stylesheet'
toastStyle.href = 'components/toast.css'
document.head.appendChild(toastStyle)

// Toast function
function showToast(message, duration=3000) {
    const toast = document.getElementById('toast')
    toast.textContent = message
    toast.classList.add('show')
    setTimeout(() => toast.classList.remove('show'), duration)
}