$(function() {
  // Auto play modal videoModal
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC +
    "?modestbranding=1&rel=0&controls=0&showinfo=0&html15=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function() {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// SLICK slider
$('.slider').slick({
  infinite: true,
  slideToShow:1,
  slideToScroll:1
});