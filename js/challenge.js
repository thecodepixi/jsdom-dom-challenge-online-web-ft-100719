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

  // add likes NEEDS TO BE FINISHED 
  let heart = document.getElementById("heart") 
  heart.addEventListener("click", () => {
    let likeList = document.getElementsByClassName("likes")[0]
    let li = document.createElement("li") 
    let like = document.createTextNode(`${counterNumber} was liked`)
    li.appendChild(like)
    li.id = counterNumber 
    likeList.appendChild(li) 
  }) 

  // add comments 
  let commentSubmit = document.getElementById("submit")

  commentSubmit.addEventListener("click", function(event) {
    let comments = document.getElementById("list")
    let commentContent = document.createTextNode(document.getElementById("comment-input").value)
    let newCommentLi = document.createElement("li")
    newCommentLi.appendChild(commentContent)
    comments.appendChild(newCommentLi)
    document.getElementById("comment-input").value = "" 

    event.preventDefault()
  })
})