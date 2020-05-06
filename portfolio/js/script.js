// event pada saat link di klik
$('.page-scroll').click(function(e){

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  $('html,body').animate({
  	scrollTop: elemenTujuan.offset().top - 50
  }, 1250, 'easeInOutExpo');

  e.preventDefault();

});
