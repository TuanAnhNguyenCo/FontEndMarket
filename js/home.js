var api = "https://c3e9-58-187-157-221.ap.ngrok.io";
console.log(localStorage.getItem("token"))

var headers = {"Authorization" :`Bearer ${localStorage.getItem("token")}`}
console.log(headers)



$(document).ready(function() {
  $("#login_form").submit(function(e){
      e.preventDefault(e);
      
      $.ajax({
        url: api+'/authenticate',
        type: 'POST',
        dataType: 'json',
        data: {
            username: $("#username").val(),
            password: $("#password").val()
        },
        success: function (data) {
          window.location.replace("http://127.0.0.1:8088/web/home.html");
          window.localStorage.setItem('token', data['jwt'])
         
         
      },
      error: function (e) {
         alert("Error")

      }})
  
  });
});






// if (localStorage.getItem('token')!=NaN)
//   var token = localStorage.getItem('token')

// var obj = {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization':`Bearer ${token}`,
//     },
// }

// fetch(api+"/api/v1/home",obj)
//   .then(function(response) {
//         return response.json()
//   })
//   .then(function(myJSON) {
//         myJSON = myJSON[0]
//         var img = myJSON['image'].split(" ")
//         function Showdata(data){
//             content.innerHTML += "<img src="+api+data+ " alt='Lỗi'>"; 
//             // content.innerText = "sdasd"
//             console.log("<img src="+api+data+ " alt='Lỗi'>")
//         } 
//         img.forEach(Showdata)
//   })
//   .catch(function(error)  {
//       console.log("Noooooo! Something error:");
//       console.log(error);
//   });
