document.addEventListener("DOMContentLoaded", () => {
  // increment counter once per second
  let counter = document.getElementById("counter") 
  let counterNumber = parseInt(counter.textContent)
  function incrementCounter(){
    counterNumber += 1 
    counter.textContent = counterNumber
  }
  let timer = setInterval(incrementCounter, 1000)

  // decrement button 
  let minus = document.getElementById("minus")
  minus.addEventListener("click", function(event){
    counterNumber -= 1 
    counter.textContent = counterNumber 
  })
  // increment button 
  let plus = document.getElementById("plus")
  plus.addEventListener("click", function(event){
    counterNumber += 1 
    counter.textContent = counterNumber 
  })

  // pausing 
  let pause = document.getElementById("pause")
  pause.addEventListener("click", () => {
    clearInterval(timer)
    pause.innerText = "resume"
    pause.id = "resume"
  })
  // resuming 
  let resume = document.getElementById("resume")
  resume.addEventListener("click", () => {
  setInterval(incrementCounter, 1000)
  resume.innerText = "pause"
  resume.id = "pause"
})
  
})