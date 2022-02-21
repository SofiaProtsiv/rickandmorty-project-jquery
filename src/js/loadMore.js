// import renderEpisodesCards from './renderEpisodesCards';
// import renderCharactersCards from './renderCharactersCards';

// let page = 1;
// let totalPages = 0;

// export default function loadMore(ID) {
//   totalPages = totalPages;
//   switch (ID) {
//     case 'episode':
//       $('.loadMoreEpisodes').click(function () {
//         page = page + 1;
//         $.ajax({
//           url: `https://rickandmortyapi.com/api/${ID}?page=${page}`,
//           crossDomain: true,
//           type: 'GET',
//           dataType: 'json',
//         }).done(function (data) {
//           totalPages = data.info.pages;
//           renderEpisodesCards(data.results);
//           if (totalPages === page) {
//             $('.loadMoreEpisodes').hide();
//           }
//         });
//       });
//       break;

//     case 'character':
//       $('.loadMoreCharacter').click(function () {
//         page = page + 1;
//         $.ajax({
//           url: `https://rickandmortyapi.com/api/${ID}/?page=${page}`,
//           crossDomain: true,
//           type: 'GET',
//           dataType: 'json',
//         }).done(function (data) {
//           renderCharactersCards(data.results);
//           if (totalPages === page) {
//             $('.loadMoreCharacter').hide();
//           }
//         });
//       });
//   }
// }
