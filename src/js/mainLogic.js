import renderEpisodesCards from './renderEpisodesCards';
import renderCharactersCards from './renderCharactersCards';

addBackgroundImg();
$('.nav-btn').click(function (event) {
  const get_ID = this.id;
  let currentPage = 1;
  let totalPages = 0;

  onCurrentPage();

  $('.loadMoreBtn').removeClass().addClass(`loadMoreBtn ${get_ID}`);
  if (get_ID === 'home') {
    addBackgroundImg();
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
        renderCharactersCards(data.results);
      }
    });
  }
});

function refresh() {
  $('.content-list').empty();
  $('.loadMoreCharacter').remove();
  $('.loadMoreEpisodes').remove();
}
function addBackgroundImg() {
  $('body').css({
    'background-image':
      'url(https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png)',
    'background-repeat': 'no-repeat',
    height: '100vh',
    'background-position': 'center',
    'background-position-y': '100%',
  });
}
function onCurrentPage() {
  $('.nav-btn').click(function (event) {
    const get_ID = this.id;

    $(`#${get_ID}`).addClass(`active`);
    if ($(`#${get_ID}`).hasClass(`active`)) {
      $('.nav-btn').removeClass('active');
      $(`#${get_ID}`).addClass(`active`);
    }
  });
}
