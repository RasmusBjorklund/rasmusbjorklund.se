
$(document).ready(function() {
  $('.toggle-button').click(function(e) {
    $(this).children().toggleClass('fa-plus fa-minus');
    $(this).parents().eq(1).children('.work-description').slideToggle();
    e.preventDefault();
  });
});
