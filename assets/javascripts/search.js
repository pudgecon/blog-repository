$(function() {
  $('#search-btn').click(function() {
    if($('#search-text').val().trim() == '') {
      return false;
    } else {
      $(this).attr('href', 'http://www.google.com/search?q=' + $('#search-text').val() + '%20site:www.xn--7dvr7nd0f.cn');
      return true;
    }
  });
});
