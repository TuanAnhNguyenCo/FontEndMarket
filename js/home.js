var api = "https://adda-58-187-157-221.ap.ngrok.io";

// show data in home
$(document).ready(function() {
        $.ajax({
          url: api+'/api/v1/home',
          type: 'GET',
          dataType: 'json',
          success: function (data) {
            let categoryList = ""
            data['categoryList'].forEach(category => {
                categoryList+=`<div class="category_checkbox">
                                    <span>${category['name']}</span>
                                    <input type="radio" name = "category" class='selectCategory' value = '${category['id']}'>
                               </div>`
            });
            $(".category").html(categoryList)  

            // Lấy id của danh mục nếu click vào
            $(document).ready(function() {
                $('.category_checkbox .selectCategory').change(function() {
                    // Lấy giá trị của thẻ đc check
                    alert(this.value);
                });
            }); 
        },
        error: function (e) {
            console.log(e)
  
        }})
  });





