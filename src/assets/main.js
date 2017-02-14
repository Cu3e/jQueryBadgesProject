$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/cu3e.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response.courses.completed);

      var badges = $('#badges'),
          tmp = '';

      $.each(response.courses.completed, function(index, val){

        tmp += '<div class="course">';
        tmp += '<h3>' + val.title + '</h3>';
        tmp += '<img src="' + val.badge + '">';
        tmp += '<a href="' + val.url + '" target="_blank" class="btn btn-primary">' + 'See Course' + '</a>';
        tmp += '</div>';

      });

      badges.append(tmp);

    }
  });

});
