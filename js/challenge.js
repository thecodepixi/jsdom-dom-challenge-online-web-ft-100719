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
    minus.disabled = true 
    plus.disabled = true 
    heart.disabled = true 
    commentSubmit.disabled = true 
    } else if (pause.innerText == "resume"){
      timer = setInterval(incrementCounter, 1000)
      pause.innerText = "pause"
      minus.disabled = false 
      plus.disabled = false
      heart.disabled = false  
      commentSubmit.disabled = false 
    }
  })

  // add likes NEEDS TO BE FINISHED 
  let heart = document.getElementById("heart") 
  let likesList = document.getElementById("likes")
  function createNewLike(n) {
    let li = document.createElement("li")
    li.id = n 
    li.innerHTML = `${n} has been liked <span class="count">1</span> times.`
    likesList.appendChild(li) 
  }
  heart.addEventListener("click", () => {
    if (document.getElementById(counterNumber) == null ){
      createNewLike(counterNumber); 
    } else {
      for (i = 0; i < likesList.children.length; i++) {
        if (likesList.children[i].id == counterNumber) {
              likesList.children[i].querySelector("span.count").textContent = parseInt(likesList.children[i].querySelector("span.count").textContent) + 1 
            } 
      }
    }
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