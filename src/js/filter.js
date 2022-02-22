import renderEpisodesCards from './renderEpisodesCards';

export default function onFilter() {
  $(document).ready(function () {
    $('.filter-input__option').click(function (event) {
      const value = this.id;
      onCurrentSeason(value);
      let url = '';
      switch (value) {
        case 'all':
          url = 'https://rickandmortyapi.com/api/episode';
          break;
        case 'S01':
          url = 'https://rickandmortyapi.com/api/episode/[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]';
          break;
        case 'S02':
          url = 'https://rickandmortyapi.com/api/episode/[12, 13, 14, 15, 16, 17, 18, 19, 20, 21]';
          break;
        case 'S03':
          url = 'https://rickandmortyapi.com/api/episode/[22, 23, 24, 25, 26, 27, 28, 29, 30, 31]';
          break;
        case 'S04':
          url = 'https://rickandmortyapi.com/api/episode/[32, 33, 34, 35, 36, 37, 38, 39, 40, 41]';
          break;
        case 'S05':
          url = 'https://rickandmortyapi.com/api/episode/[42, 43, 44, 45, 46, 47, 48, 49, 50, 51]';
          break;
        default:
          return;
      }
      $.ajax({
        url,
        crossDomain: true,
        type: 'GET',
        dataType: 'json',
      }).done(function (data) {
        $('.content-list').empty();

        if (value === 'all') {
          renderEpisodesCards(data.results);
        } else {
          renderEpisodesCards(data);
          $('.loadMoreCharacter').remove();
          $('.loadMoreEpisodes').remove();
        }
      });
    });
  });

  return `
  <section class="section filter__section">
        <ul class="filters">
            <li class="filter-input__option active" id="all">All seasons </li>
            <li class="filter-input__option" id="S01">Season 1 </li>
            <li class="filter-input__option" id="S02">Season 2 </li>
            <li class="filter-input__option" id="S03">Season 3 </li>
            <li class="filter-input__option" id="S04">Season 4 </li>
            <li class="filter-input__option" id="S05">Season 5 </li>
        </ul>
  </section>
  `;
}

function onCurrentSeason(id) {
  $(`#${id}`).addClass(`active`);
  if ($(`#${id}`).hasClass(`active`)) {
    $('.filter-input__option').removeClass('active');
    $(`#${id}`).addClass(`active`);
  }
}
