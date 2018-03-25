$(document).ready(function(){
  var bodyWrapper = $('.body-wrapper');
  var sidebarLeft = $('#sidebar-left');
  var sidebarRight = $('#sidebar-right');
  
  $('#toggle-header').click(function(){
    $(bodyWrapper).toggleClass("header-engaged");
  });
  
  $('#toggle-sidebar-left').click(function(){
    $(bodyWrapper).toggleClass("sidebar-left-engaged");
  });
  
  $('#toggle-sidebar-right').click(function(){
    $(bodyWrapper).toggleClass("sidebar-right-engaged");
  });
  
  $('#sidebar-left .expand-toggle').click(function(){
    $(bodyWrapper).toggleClass("sidebar-left-expanded");
    $(sidebarLeft).toggleClass("expanded");
  });
});