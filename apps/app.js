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
    console.log(data);
    showResults(data.items);
  });
}

// Show search results
function showResults(results) {
  console.log(results);
  var html = '';
  $.each(results, function(index, value) {
    html += '<p>' + value.snippet.title +
    '<br>' + '<a href="http://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="' + value.snippet.thumbnails.medium.url + '"></a>' + '</p>';
    console.log(value.snippet.title);
  });
  $('#search-results').html(html);
}
