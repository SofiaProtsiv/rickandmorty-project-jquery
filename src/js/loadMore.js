// import renderEpisodesCards from './renderEpisodesCards';
// import renderCharactersCards from './renderCharactersCards';
// import renderLocationsCards from './renderLocationsCards';
// let page = 1;
// let totalPages = 0;

// export default function loadMore(ID, totalPages) {
//   const loadMoreBtn = $('.loadMoreBtn').removeClass().addClass(`loadMoreBtn ${ID}`);
//   totalPages = totalPages;

//   loadMoreBtn.click(function () {
//     page = page + 1;
//     $.ajax({
//       url: `https://rickandmortyapi.com/api/${ID}/?page=${page}`,
//       crossDomain: true,
//       type: 'GET',
//       dataType: 'json',
//     }).done(function (data) {
//       switch (ID) {
//         case 'home':
//           return;
//         case 'episode':
//           renderEpisodesCards(data.results);
//           hideLoadMoreBtn();
//           break;
//         case 'character':
//           renderCharactersCards(data.results);
//           hideLoadMoreBtn();
//           break;
//         default:
//           return;
//       }
//     });
//   });
// }
// function hideLoadMoreBtn() {
//   if (totalPages === page) {
//     $('.loadMoreBtn').hide();
//   }
// }
loadMoreCharacter;

loadMoreEpisodes;

import renderEpisodesCards from './renderEpisodesCards';
import renderCharactersCards from './renderCharactersCards';
import renderLocationsCards from './renderLocationsCards';
