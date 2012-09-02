//function goSearch() {
    //if($('#search-text').val().trim() == '') {
      //return false;
    //} else {
      //$('#search-btn').attr('href', 'http://www.google.com/search?q=' + $('#search-text').val() + '%20site:www.xn--7dvr7nd0f.cn');
      //return true;
    //}
//}

$(function() {
  $('#search-btn').click(function() {
    //return goSearch();
    if($('#search-text').val().trim() == '') {
      return false;
    } else {
      $(this).attr('href', 'http://www.google.com/search?q=' + $('#search-text').val() + '%20site:www.xn--7dvr7nd0f.cn');
      return true;
    }
  });
  $('#search-text').keydown(function(e){
    if(e.keyCode == 13) {
      //return goSearch();
      //$('#search-btn').trigger('click');
      $('#search-btn').click();
    }
  });
});
