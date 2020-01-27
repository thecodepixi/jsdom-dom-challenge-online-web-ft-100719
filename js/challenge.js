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
    if (pause.innerText == "pause") {
    clearInterval(timer)
    pause.innerText = "resume"
    } else if (pause.innerText == "resume"){
      timer = setInterval(incrementCounter, 1000)
      pause.innerText = "pause"
    }
  })
  // // resuming 
  // let resume = document.getElementById("resume")
  // resume.addEventListener("click", () => {
  //   timer = setInterval(incrementCounter, 1000)
  //   resume.innerText = "pause"
  //   resume.id = "pause"
  // })
  
  
})