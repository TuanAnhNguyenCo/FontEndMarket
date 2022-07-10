var api = "https://ee30-58-187-157-221.ap.ngrok.io";


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
          window.localStorage.setItem('token', data['jwt'])
          window.location.replace("http://127.0.0.1:8088/web/home.html");
      },
      error: function (e) {
         alert("Error")

      }})
  
  });
});

