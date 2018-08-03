const sendButton = document.querySelector("#send-button")
const conversationList = document.querySelector('#conversation-content')
const text_input = document.querySelector("#text-input")

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let options = {}
    let instances = M.Dropdown.init(elems, options);
  });

//attach an Event Listener to the send button for all clicks
//when a user clicks the send button, a list item 
//should be added to the conversation to the list
//with a message inside it that is the same as
// whatever is inside the text input 

sendButton.addEventListener("click", e => {
    var content = text_input.value
    conversationList.innerHTML += `<li>${content}</li>`
})

const signInButton = document.querySelector("#sign-in-button")
const signOutButton = document.querySelector("#sign-out-button")

signInButton.addEventListener("click", e => {
    signInWithGoogle()
})
signOutButton.addEventListener("click",function (e) {
  signOutWithGoogle()
})
const authDropdownItem= document.querySelector("#auth-dropdown-button")
function updateUIforSignIn(avatarSrc){
    authDropdownItem.innerHTML = `<i><img class= "avatar-image" src="${avatarSrc}"/><?i>`
}

function updateUIforSignOut(){
  authDropdownItem.innerHTML = `<i class="material-icons">more_vert</i>`
}

const contactList = document.querySelector('#contact-list')

function updateUIwithNewContact(userInfo){
  contactList.innerHTML += 
  `
    <li onclick="displayTextsFrom('${userInfo.id}')" class="contact-item avatar">
      <img src="${userInfo.photoURL}" class="circle avatar-image" />
      <div class="contact-name-and-text">
        <h6 class="title">${userInfo.name}</h6>
        <p class="grey-text last-text-message">This is a fake text...</p>
      </div>
      <div class="contact-timestamp">
        <p class="grey-text">3:00 PM</p>
      </div>      
    </li>
  `
}

function displayTextsFrom(uid){
  console.log('displaying texts from '+uid)
}