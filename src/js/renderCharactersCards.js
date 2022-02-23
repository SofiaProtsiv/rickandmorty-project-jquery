let page = 1;
let totalPages = 0;

export default function renderCharactersCards(character) {
  $.each(character, function (key, value) {
    const content = $(`<li id=${value.id} class='content-character'>`);

    content.append(`
        <img src='https://rickandmortyapi.com/api/character/avatar/${value.id}.jpeg'/>
        <div class=info>
          <p class='name'>${value.name}</p>
          <p class='status'><span class='status-icon ${value.status}'></span>${value.status} - ${value.species}</p>
          <p class='origin'>First seen in:
            <span>${value.origin.name}</span>
          </p>
          <p class='location'>Last known location::
            <span>${value.location.name}</span>
          </p>
        </div>
    `);
    $('.content-list').append(content);
  });

  if (!$('.loadMoreCharacter').length) {
    $('.content-section').append(
      '<button class="loadMoreCharacter" type="button">Load more</button>',
    );
  }
  $('.loadMoreCharacter').click(function () {
    if (totalPages === page) {
      $('.loadMoreCharacter').remove();
      return;
    } else {
      page = page + 1;
      $.ajax({
        url: `https://rickandmortyapi.com/api/character/?page=${page}`,
        crossDomain: true,
        type: 'GET',
        dataType: 'json',
      }).done(function (data) {
        totalPages = data.info.pages;
        renderCharactersCards(data.results);
      });
    }
  });
}
