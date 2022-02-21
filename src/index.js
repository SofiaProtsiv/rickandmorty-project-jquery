import renderEpisodesCards from './js/renderEpisodesCards';
import renderCharactersCards from './js/renderCharactersCards';
import './styles/main.scss';

$('.nav-btn').click(function (event) {
  $('this.id').addClass('active');
  const get_ID = this.id;
  let currentPage = 1;
  let totalPages = 0;

  $('.loadMoreBtn').removeClass().addClass(`loadMoreBtn ${get_ID}`);
  if (get_ID === 'home') {
    $('.content-list').empty();
    return;
  } else {
    $.ajax({
      url: `https://rickandmortyapi.com/api/${get_ID}?page=${currentPage}`,
      crossDomain: true,
      type: 'GET',
      dataType: 'json',
    }).done(function (data) {
      totalPages = data.info.pages;

      if (get_ID === 'episode') {
        $('.content-list').empty();
        renderEpisodesCards(data.results);
      }
      if (get_ID === 'character') {
        $('.content-list').empty();
        renderCharactersCards(data.results);
      }
    });
  }
});
