
var interval = setInterval(function() {
var timeEl = $('#date-time');
var currentTime = moment().format("MMM Do, YYYY HH:mm:ss")
timeEl.text(currentTime);
}, 1000)


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


//   'shown.bs.modal'