/* global $, CKEDITOR*/
//Document ready.
$(document).on('turbolinks:load', function(){


  setTimeout(function(){
    $('.flash').animate({
      'opacity' : '0'
    }, 860, function(){
      $('.flash').remove();
    });
  }, 10000);
  
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
  
  CKEDITOR.replace('text_area_comments', { toolbar: 'comment' });
  
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
