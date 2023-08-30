const stopBtn=document.getElementById('btn-stop')

function showTime() {
  const time = new Date();
  const el=document.getElementById('time')
  el.innerText=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}
const interval=setInterval(showTime,1000)
  
stopBtn.addEventListener('click',()=>{
    clearTimeout(interval)
})