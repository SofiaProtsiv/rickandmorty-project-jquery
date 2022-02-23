import renderEpisodePage from './renderEpisodePage';
import onFilter from './filter';
let page = 1;
let totalPages = 0;

export default function renderEpisodesCards(episodes) {
  $.each(episodes, function (key, value) {
    const content = $(`<li id=${value.id} class='content-item episodes'>`);
    content.append(`
        <p class=title>
          <span class=episode>${value.episode}</span>
        ${value.name}
        </p>
    `);

    if ($('.filter__section').length < 1) {
      const filterMarkup = onFilter();
      $('.content-section').prepend(filterMarkup);
    }
    $('.content-list').append(content);
  });

  if (!$('.loadMoreEpisodes').length) {
    $('.content-section').append(
      '<button class="loadMoreEpisodes" type="button">Load more</button>',
    );
  }
  $('.loadMoreEpisodes').click(function () {
    if (totalPages === page) {
      $('.loadMoreEpisodes').remove();
      return;
    } else {
      page = page + 1;
      $.ajax({
        url: `https://rickandmortyapi.com/api/episode?page=${page}`,
        crossDomain: true,
        type: 'GET',
        dataType: 'json',
      }).done(function (data) {
        totalPages = data.info.pages;
        renderEpisodesCards(data.results);
      });
    }
  });
  renderEpisodePage();
}
