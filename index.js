$(document).ready(function() {
    $('.card').hover(function() {
      let el = this;
      let img = $(el).find('.coin').children('img')
      $(el).removeClass('normal')
      $(el).addClass('hover')
      setTimeout(function(){
        $(img).attr('src', $(img).data('hover'))
      }, 250)
      console.log(el)
    }, function() {
      let el = this;
      let img = $(el).find('.coin').children('img')
      $(el).removeClass('hover')
      $(el).addClass('normal')
      setTimeout(function(){
        $(img).attr('src', $(img).data('normal'))
      }, 250)
    })
  })