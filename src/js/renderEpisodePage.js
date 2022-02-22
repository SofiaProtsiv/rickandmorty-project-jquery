export default function renderEpisodePage() {
  $('.episodes').click(function () {
    $('.loadMoreEpisodes').remove();

    $.ajax({
      url: `https://rickandmortyapi.com/api/episode/${this.id}`,
      crossDomain: true,
      type: 'GET',
      dataType: 'json',
    }).done(function (data) {
      const episodesMarkup = renderEpisodeMarkup(data);
      const charactersMarkup = charactersCardsMarkup(data.characters);

      $('.content-list').empty();
      $('.content-list').append(episodesMarkup);
      $('.content-list').append('<ul class=listOfCharacters>').append(charactersMarkup);
    });
  });
}

function renderEpisodeMarkup(data) {
  return `
  <ul class=listOfEpisode>
    <h3 class="episode-title">${data.name}</h3>
    <p class="episode-info">Episode: ${data.episode}</p>
    <p class="episode-info">Release date: ${data.air_date}</p>
  </ul>
  `;
}
function charactersCardsMarkup(characters) {
  characters.forEach(character => {
    $.ajax({
      url: character,
      crossDomain: true,
      type: 'GET',
      dataType: 'json',
    }).done(function (data) {
      const content = $(`<li id=${data.id} class='episode-page-character-item'>`);
      content.append(`
            <img src='https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg'/>
        `);
      $('.listOfCharacters').append(content);
    });
  });
}
