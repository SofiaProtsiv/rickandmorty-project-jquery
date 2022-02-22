export default function onOpenModal() {
  $('.episode-page-character-item').click(function () {
    $('#modalContainer').show().off();
  });
  $('.close').click(function () {
    $('#modalContainer').hide().off();
  });
  $(document).mouseup(function (event) {
    if ($('#modalContainer').is(event.target)) {
      $('#modalContainer').hide().off();
    }
  });
  $(document).keyup(function (event) {
    if (event.key == 'Escape') {
      $('#modalContainer').hide().off();
    }
  });
  return `
      <div id="modalContainer">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
        </div>
    </div>`;
}
