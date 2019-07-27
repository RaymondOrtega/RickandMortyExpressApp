var trash = document.querySelectorAll(".delete");
var Points = document.querySelectorAll(".change")
var newScore = document.querySelectorAll('count').innerText

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    console.log("thankyou");
    const name = this.parentNode.childNodes[1].innerText
    const points = this.parentNode.childNodes[3].innerText
    console.log(name + "    name", points + "     points");
    fetch('remove', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});
Array.from(Points).forEach(function(element) {
  element.addEventListener('click', function() {
    console.log(count)
    console.log("thankyou");
    const name = this.parentNode.childNodes[1].innerText
    const quotes = this.parentNode.childNodes[3].innerText
    console.log(name + "    name", quotes + "     quote");
    fetch('changePoints', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'quote': quotes,
        'points': count
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});
//Game Start
let cards = document.querySelectorAll("img")
console.log(cards);
Array.from(cards).forEach(card => card.addEventListener('click', flipCards))
var click = 0
var win = 0
var count = 0

function flipCards() {
  if (this.classList.contains('pair1')) {
    this.src = 'rickcopy.png'
    this.classList.add('flipped')
    click++
    count++
    document.getElementsByClassName("count")[0].innerText = count
    console.log(count + "this is count")
  } else if (this.classList.contains('pair2')) {
    this.src = 'noobnoobcopy.png'
    this.classList.add('flipped')
    click++
    count++
    document.getElementsByClassName("count")[0].innerText = count
    console.log(count + "this is count")
  } else if (this.classList.contains('pair3')) {
    this.src = 'mixcopy.png'
    this.classList.add('flipped')
    click++
    count++
    document.getElementsByClassName("count")[0].innerText = count
    console.log(count + "this is count")
  } else if (this.classList.contains('pair4')) {
    this.src = 'mortcopy.png'
    this.classList.add('flipped')
    click++
    count++
    document.getElementsByClassName("count")[0].innerText = count
    console.log(count + "this is count")
  } else if (this.classList.contains('pair5')) {
    this.src = 'picklecopy.png'
    this.classList.add('flipped')
    click++
    count++
    document.getElementsByClassName("count")[0].innerText = count
    console.log(count + "this is count")
  }
  if (click === 2) {
    let card1 = document.querySelectorAll('.flipped')[0]
    let card2 = document.querySelectorAll('.flipped')[1]
    click = 0
    setTimeout(checkCards, 1000, card1, card2)
  }
}

function checkCards(c1, c2) {
  c1.classList.remove('flipped')
  c2.classList.remove('flipped')
  if (c1.className != c2.className) {
    c1.src = 'logocopy.png'
    c2.src = 'logocopy.png'
  } else {
    win += 10
    console.log("match")
  }
  if (win === 50) {
    document.getElementsByClassName("win")[0].src = "wincopy.gif"
    document.getElementsByClassName("count")[0].innerText = count
  }

}
//Randomize Cards
let ClassArray = ["pair1", "pair1", "pair2", "pair2", "pair3", "pair3", "pair4", "pair4", "pair5", "pair5"]

let randomclasses = function(arr) {
  let newpos,
    temp;
  for (let i = arr.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    console.log(newPos)
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }
  return arr;
}
let newArray = randomclasses(ClassArray)

document.getElementsByClassName("pair1")[0].className = ClassArray[0]
document.getElementsByClassName("pair1")[0].className = ClassArray[1]
document.getElementsByClassName("pair2")[0].className = ClassArray[2]
document.getElementsByClassName("pair2")[0].className = ClassArray[3]
document.getElementsByClassName("pair3")[0].className = ClassArray[4]
document.getElementsByClassName("pair3")[0].className = ClassArray[5]
document.getElementsByClassName("pair4")[0].className = ClassArray[6]
document.getElementsByClassName("pair4")[0].className = ClassArray[7]
document.getElementsByClassName("pair5")[0].className = ClassArray[8]
document.getElementsByClassName("pair5")[0].className = ClassArray[9]

//Reset Game
document.getElementsByClassName("reset")[0].addEventListener('click', function() {
  let ClassArray = ["pair1", "pair1", "pair2", "pair2", "pair3", "pair3", "pair4", "pair4", "pair5", "pair5"]

  let randomclasses = function(arr) {
    let newpos,
      temp;
    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      console.log(newPos)
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }
    return arr;
  }
  let newArray = randomclasses(ClassArray)

  document.getElementsByClassName("pair1")[0].className = ClassArray[0]
  document.getElementsByClassName("pair1")[0].className = ClassArray[1]
  document.getElementsByClassName("pair2")[0].className = ClassArray[2]
  document.getElementsByClassName("pair2")[0].className = ClassArray[3]
  document.getElementsByClassName("pair3")[0].className = ClassArray[4]
  document.getElementsByClassName("pair3")[0].className = ClassArray[5]
  document.getElementsByClassName("pair4")[0].className = ClassArray[6]
  document.getElementsByClassName("pair4")[0].className = ClassArray[7]
  document.getElementsByClassName("pair5")[0].className = ClassArray[8]
  document.getElementsByClassName("pair5")[0].className = ClassArray[9]

  document.getElementsByClassName("pair1")[0].src = "logocopy.png"
  document.getElementsByClassName("pair1")[1].src = "logocopy.png"
  document.getElementsByClassName("pair2")[0].src = "logocopy.png"
  document.getElementsByClassName("pair2")[1].src = "logocopy.png"
  document.getElementsByClassName("pair3")[0].src = "logocopy.png"
  document.getElementsByClassName("pair3")[1].src = "logocopy.png"
  document.getElementsByClassName("pair4")[0].src = "logocopy.png"
  document.getElementsByClassName("pair4")[1].src = "logocopy.png"
  document.getElementsByClassName("pair5")[0].src = "logocopy.png"
  document.getElementsByClassName("pair5")[1].src = "logocopy.png"
  win = 0
  count = 0
  document.getElementsByClassName("count")[0].innerText = count
  document.getElementsByClassName("win")[0].src = ""
})
