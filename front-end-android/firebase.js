const auth = firebase.auth()
const database = firebase.firestore()

// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

window.onload = function(){
  initializeApp ()
}
function initializeApp(){
  auth.onAuthStateChanged(function(user){
    if (user){
      const avatarSrc =user.photoURL
      updateUIforSignIn(avatarSrc)
      getUsersFriends()
    } else {
      updateUIforSignOut()
    }
  })
}

function signInWithGoogle() {
  console.log('sign in')
  auth.signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token.
    const token = result.credential.accessToken
    // The signed-in user info.
    const user = result.user
    console.log(user)
    const avatarSrc = user.photoURL
    const name = user.displayName
     const email = user.email
      const userId = user.uid
       const userInfo = {
         name: name,
         id: userId,
         photoURL: avatarSrc,
         email: email,
       }
       addUserToDatabase(userInfo, userId)
       updateUIforSignIn(avatarSrc)
  })
}
function addUserToDatabase (userInfo,userId){
  const userCollectionRef =database.collection ('users')
  const newUserRef = userCollectionRef.doc (userId)
  newUserRef.set(userInfo)
  
}


function signOutWithGoogle() {
  console.log('sign out')
    auth.signOut()
    .then(function(){
      console.log('sign out')
      updateUIforSignOut()
    })
}
function getUsersFriends (){
console.log ('getting the users friends')
const user = auth.currentUser
const userId = user.uid

 const query = database.collection('users')
  .get()
  .then( snapshot => {
    if (snapshot.size) {
      snapshot.forEach( doc => {
        let userInfo = doc.data() 
        
        updateUIwithNewContact(userInfo)
      })
    }
  })
}