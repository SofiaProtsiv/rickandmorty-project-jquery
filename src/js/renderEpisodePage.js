import renderCharactersCards from './renderCharactersCards';

export default function renderEpisodePage() {
  $('.episodes').click(function () {
    $('.loadMoreEpisodes').hide();

    $.ajax({
      url: `https://rickandmortyapi.com/api/episode/${this.id}`,
      crossDomain: true,
      type: 'GET',
      dataType: 'json',
    }).done(function (data) {
      const markup = renderEpisodeMarkup(data);
      charactersCardsMarkup(data.characters);
      $('.content-list').empty();
      $('.content-list').append(markup);
    });
  });
}

function renderEpisodeMarkup(data) {
  return `
    <li class="episode-page-info">        
          <h3 class="title">${data.name}</h3> 
  </li>`;
}
function charactersCardsMarkup(characters) {
  characters.forEach(character => {
    $.ajax({
      url: character,
      crossDomain: true,
      type: 'GET',
      dataType: 'json',
    }).done(function (data) {
      const content = $(`<li id=${data.id} class='episode-page-character'>`);
      content.append(`
            <img src='https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg'/>
        `);
      $('.content-list').append(content);
    });
  });
}
