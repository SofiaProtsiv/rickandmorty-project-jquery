import renderEpisodesCards from './renderEpisodesCards';
import renderCharactersCards from './renderCharactersCards';

addBackgroundImg();
$('.nav-btn').click(function (event) {
  const get_ID = this.id;
  let currentPage = 1;
  let totalPages = 0;

  onCurrentPage(get_ID);

  $('.loadMoreBtn').removeClass().addClass(`loadMoreBtn ${get_ID}`);
  if (get_ID === 'home') {
    addBackgroundImg();
    $('.filter__section').remove();
    refresh();
    return;
  } else {
    $('body').css({ 'background-image': 'none' });

    $.ajax({
      url: `https://rickandmortyapi.com/api/${get_ID}?page=${currentPage}`,
      crossDomain: true,
      type: 'GET',
      dataType: 'json',
    }).done(function (data) {
      totalPages = data.info.pages;

      if (get_ID === 'episode') {
        refresh();
        renderEpisodesCards(data.results);
      }
      if (get_ID === 'character') {
        refresh();
        $('.filter__section').remove();
        renderCharactersCards(data.results);
      }
    });
  }
});

function refresh() {
  $('.content-list').empty();
  $('.loadMoreCharacter').remove();
  $('.loadMoreEpisodes').remove();
  $('.filter-section').remove();
}
function addBackgroundImg() {
  $('body').css({
    'background-image':
      'url(https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png)',
    'background-repeat': 'no-repeat',
    height: '97vh',
    'background-position': 'center',
    'background-position-y': '100%',
  });
}
function onCurrentPage(id) {
  $(`#${id}`).addClass(`active`);
  if ($(`#${id}`).hasClass(`active`)) {
    $('.nav-btn').removeClass('active');
    $(`#${id}`).addClass(`active`);
  }
}
