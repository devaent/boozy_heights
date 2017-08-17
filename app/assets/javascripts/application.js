// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.minicolors
//= require bootstrap-sprockets
//= require turbolinks
//= require ckeditor/init
//= require_tree ./ckeditor
//= require_tree .
/* global $ */

$(document).on('turbolinks:load', function(){
  
// Animations


  $(".input-box").hover(function(eventObj) { 
    alert(eventObj.target.id);  
  });
  
  $('.homepage-thumbnail').hover(
    function() {
      $(this).find('.thumbnail-hover').animate({
        'opacity' : '.75'
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
  
});

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});