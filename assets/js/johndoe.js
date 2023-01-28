/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scrollf
$(document).ready (function(){
  $("#signup-form").validate({
      rules:{
          guestname:{
              required:true,
              minlength:4
          },
          guestemail:{
              required:true,
              
              email:true

          },

      }
  })
})

