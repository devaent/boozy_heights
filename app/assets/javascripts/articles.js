/* global $, CKEDITOR*/
//Document ready.
$(document).on('turbolinks:load', function(){
  
  // Use bootstrap.file-input.js to bootstrap 'choose file' button
  $('input[type=file]').bootstrapFileInput();
  
  // Preview the image chosen for upload
  $("#imgInp").change(function(){
    readURL(this);
  });
  
  initMiniColors();
  
  // Animations
  $(".input-box").hover(function(eventObj) { 
    alert(eventObj.target.id);  
  });
  
  $('.homepage-thumbnail').hover(
    function() {
      $(this).find('.thumbnail-hover').animate({
        'opacity' : '1'
      },'fast');
    },
    function() {
      $(this).find('.thumbnail-hover').animate({
        'opacity' : '0'
      },'fast');
    }
  );
  $('.navbar-link').hover(
    function() {
      $(this).animate({
        'opacity' : '.5'  
      },'fast');
    },
    function() {
      $(this).animate({
         'opacity' : "1"
      }, 'fast');
    }
  );
  
  // Post to the provided URL with the specified parameters.
  function post(path, parameters) {
    var form = $('<form></form>');

    form.attr("method", "post");
    form.attr("action", path);

    $.each(parameters, function(key, value) {
        var field = $('<input></input>');

        field.attr("type", "hidden");
        field.attr("name", key);
        field.attr("value", value);

        form.append(field);
    });

    // The form needs to be a part of the document in
    // order for us to be able to submit it.
    $(document.body).append(form);
    form.submit();
  }
  
});

function readURL(input) {
  
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      
      $('#thumbnail-image').attr('src', e.target.result);

      // Crop fields
      $('#crop_x').val('0');
      $('#crop_y').val('0');
      $('#crop_w').val('0');
      $('#crop_h').val('0');
    
      };
    reader.readAsDataURL(input.files[0]);
    
  }
}

function initMiniColors(){
   // Apply minicolors colorpicker to DOM element using bootstrap theme
  $('INPUT.minicolors').minicolors({
    theme: 'bootstrap',
    defaultValue: '#ECE9E6'
  });
  
  //initialize background and font color for preivew
  $("#minicolors1").ready(function(){
    var hex = $("#minicolors1").val();
    $("#thumbnail-wrapper").css("background-color", hex);
  });
  
  //update preview on change
  $("#minicolors1").change(function(){
    var hex = $("#minicolors1").val();
    $("#thumbnail-wrapper").css("background-color", hex);
  });
  
  $("#minicolors2").ready(function(){
    var hex = $("#minicolors2").val();
    $(".thumbnail-title-preview").css("color", hex);
  });
  
  $("#minicolors2").change(function(){
    var hex = $("#minicolors2").val();
    $(".thumbnail-title-preview").css("color", hex);
  });
}
