$(document).ready(start)

function start() {
  $("a").click(overrideLinks) //gives all the links
  $(".readmore").click(showMoreText)
  $(".readless").click(showLessText)
  // $('.readmore').on('click', showMoreText)
  // $('.readless').on('click', showLessText)
}

function overrideLinks(event) {
  event.preventDefault()
}
function showMoreText() {
  console.log('showing');
  var readMoreContent = $(this).siblings('p').find('.read-more-content')
  readMoreContent.slideDown()
  $(this).hide();
  $(this).siblings('.readless').show();
}

function showLessText() {
  console.log('hiding');
  var readMoreContent = $(this).siblings('p').find('.read-more-content')
  readMoreContent.slideUp()
  $(this).hide();
  $(this).siblings('.readmore').show();
}


// $(document).ready(start);
// function start() {
//   $("a").click(overrideLinks); //all links
// }
//
// function overrideLinks(event) { //stop going to top of page when click link
//   event.preventDefault();
// }
//
// // Hide the extra content initially, using JS so that if JS is disabled, no problemo:
// $('.read-more-content').addClass('hide')
//
// // Set up a link to expand the hidden content:
// .before('<a class="read-more-show" href="#">Read More</a>')
//
// // Set up a link to hide the expanded content.
// .append(' <a class="read-more-hide" href="#">Read Less</a>');
//
// // Set up the toggle effect:
// $('.read-more-show').on('click', function(e) {
//   $(this).next('.read-more-content').removeClass('hide');
//   $(this).addClass('hide');
//   e.preventDefault();
// });
//
// $('.read-more-hide').on('click', function(e) {
//   $(this).parent('.read-more-content').addClass('hide').parent().children('.read-more-show').removeClass('hide');
//   e.preventDefault();
// });
