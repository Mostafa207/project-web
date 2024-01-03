
var arr = [{username:'user1' , password: 'Password@1'}]

function login(){
    var name = document.getElementById('name');
    var word = document.getElementById('pass');
    for(var i = 0 ; i <= arr.length ; i++){
      if(arr[i].username == name.value && arr[i].password == word.value){
        alert("login successfuly");
      }

      
  
    }
  }

function signup(){
  var name = document.getElementById('user');
  var phone = document.getElementById('phone');
  var pass = document.getElementById('pass');
  var age = document.getElementById('age');
  var gender = document.querySelector('input[name="gender"]');
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$$%^&*()_]).{1,++++++++++++++++++++++++8}$/
  for(var i=0 ; i<=arr.length;i++){
  if(arr[i].username==name.value){
    alert("no")
  }
}
  
     if(5> name.length > 10&& regex.test(pass) ){
     alert("sing successful");
    var user = {username: name , phone_numder: phone, password: pass , age: age , Gender:gender}
    user.push(arr);
   console.log(user);
  }
   else{
    alert("check your date")
   }
  }
  

 
