// Events
$(function() {
  $('#search-term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

// Get data
function getRequest(searchTerm) {
  var params = {
    part: 'snippet',
    key: 'AIzaSyCoxqz7JACraIt_q-SjObCwpjxbVLm-HIo',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data) {
    showResults(data.Search);
  });
}

// Show search results
function showResults(results) {
  var html = '';
  $.each(results, function(index, value) {
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}
