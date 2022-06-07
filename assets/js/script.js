$(document).ready(function () {
  //navigation
  $('.navbar-open-btn').click(() =>
    $('.navigation-sidebar').addClass('show-navigation-sidebar')
  );
  $('.navbar-close-btn').click(() =>
    $('.navigation-sidebar').removeClass('show-navigation-sidebar')
  );

  // sweet alert
  $('#spin-btn').click(function () {
    Swal.fire({
      icon: 'success',
      title: "'R7'",
      showConfirmButton: false,
    });
  });
});
