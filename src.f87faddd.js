parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LDUH":[function(require,module,exports) {

},{}],"RSqK":[function(require,module,exports) {
"use strict";function e(){return $(".episode-page-character-item").click(function(){$("#modalContainer").show().off()}),$(".close").click(function(){$("#modalContainer").hide().off()}),$(document).mouseup(function(e){$("#modalContainer").is(e.target)&&$("#modalContainer").hide().off()}),$(document).keyup(function(e){"Escape"==e.key&&$("#modalContainer").hide().off()}),'\n      <div id="modalContainer">\n        <div class="modal-content">\n            <span class="close">&times;</span>\n            <p>Some text in the Modal..</p>\n        </div>\n    </div>'}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"PYxI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=a(require("./modal"));function a(e){return e&&e.__esModule?e:{default:e}}function t(){$(".episodes").click(function(){$(".loadMoreEpisodes").remove(),$.ajax({url:"https://rickandmortyapi.com/api/episode/".concat(this.id),crossDomain:!0,type:"GET",dataType:"json"}).done(function(a){var t=n(a),s=o(a.characters);(0,e.default)();$(".content-list").empty(),$(".content-list").append(t),$(".content-list").append("<ul class=listOfCharacters>").append(s),$(".content-list").append(e.default)})})}function n(e){return'\n  <ul class=listOfEpisode>\n    <h3 class="episode-title">'.concat(e.name,'</h3>\n    <p class="episode-info">Episode: ').concat(e.episode,'</p>\n    <p class="episode-info">Release date: ').concat(e.air_date,"</p>\n  </ul>\n  ")}function o(a){a.forEach(function(a){$.ajax({url:a,crossDomain:!0,type:"GET",dataType:"json"}).done(function(a){var t=$("<li id=".concat(a.id," class='episode-page-character-item'>"));t.append("\n            <img src='https://rickandmortyapi.com/api/character/avatar/".concat(a.id,".jpeg'/>\n        ")),$(".listOfCharacters").append(t),(0,e.default)()})})}
},{"./modal":"RSqK"}],"GDIU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var i=e(require("./renderEpisodesCards"));function e(i){return i&&i.__esModule?i:{default:i}}function t(){return $(document).ready(function(){$(".filter-input__option").click(function(e){var t=this.id;a(t);var s="";switch(t){case"all":s="https://rickandmortyapi.com/api/episode";break;case"S01":s="https://rickandmortyapi.com/api/episode/[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]";break;case"S02":s="https://rickandmortyapi.com/api/episode/[12, 13, 14, 15, 16, 17, 18, 19, 20, 21]";break;case"S03":s="https://rickandmortyapi.com/api/episode/[22, 23, 24, 25, 26, 27, 28, 29, 30, 31]";break;case"S04":s="https://rickandmortyapi.com/api/episode/[32, 33, 34, 35, 36, 37, 38, 39, 40, 41]";break;case"S05":s="https://rickandmortyapi.com/api/episode/[42, 43, 44, 45, 46, 47, 48, 49, 50, 51]";break;default:return}$.ajax({url:s,crossDomain:!0,type:"GET",dataType:"json"}).done(function(e){$(".content-list").empty(),"all"===t?(0,i.default)(e.results):((0,i.default)(e),$(".loadMoreCharacter").remove(),$(".loadMoreEpisodes").remove())})})}),'\n  <section class="section filter__section">\n        <ul class="filters">\n            <li class="filter-input__option active" id="all">All seasons </li>\n            <li class="filter-input__option" id="S01">Season 1 </li>\n            <li class="filter-input__option" id="S02">Season 2 </li>\n            <li class="filter-input__option" id="S03">Season 3 </li>\n            <li class="filter-input__option" id="S04">Season 4 </li>\n            <li class="filter-input__option" id="S05">Season 5 </li>\n        </ul>\n  </section>\n  '}function a(i){$("#".concat(i)).addClass("active"),$("#".concat(i)).hasClass("active")&&($(".filter-input__option").removeClass("active"),$("#".concat(i)).addClass("active"))}
},{"./renderEpisodesCards":"lhhI"}],"lhhI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=n(require("./renderEpisodePage")),t=n(require("./filter"));function n(e){return e&&e.__esModule?e:{default:e}}var o=1,s=0;function a(n){$.each(n,function(e,n){var o=$("<li id=".concat(n.id," class='content-item episodes'>"));if(o.append("\n        <p class=title>\n          <span class=episode>".concat(n.episode,"</span>\n        ").concat(n.name,"\n        </p>\n    ")),$(".filter__section").length<1){var s=(0,t.default)();$(".content-section").prepend(s)}$(".content-list").append(o)}),$(".loadMoreEpisodes").length||$(".content-section").append('<button class="loadMoreEpisodes" type="button">Load more</button>'),$(".loadMoreEpisodes").click(function(){if(s===o)return $(".loadMoreEpisodes").hide(),void(o=1);o+=1,$.ajax({url:"https://rickandmortyapi.com/api/episode?page=".concat(o),crossDomain:!0,type:"GET",dataType:"json"}).done(function(e){s=e.info.pages,a(e.results)})}),(0,e.default)()}
},{"./renderEpisodePage":"PYxI","./filter":"GDIU"}],"rBUo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var a=1,n=0;function t(c){$.each(c,function(a,n){var t=$("<li id=".concat(n.id," class='content-character'>"));t.append("\n        <img src='https://rickandmortyapi.com/api/character/avatar/".concat(n.id,".jpeg'/>\n        <div class=info>\n          <p class='name'>").concat(n.name,"</p>\n          <p class='status'><span class='status-icon ").concat(n.status,"'></span>").concat(n.status," - ").concat(n.species,"</p>\n          <p class='origin'>First seen in:\n            <span>").concat(n.origin.name,"</span>\n          </p>\n          <p class='location'>Last known location::\n            <span>").concat(n.location.name,"</span>\n          </p>\n        </div>\n    ")),$(".content-list").append(t)}),$(".loadMoreCharacter").length||$(".content-section").append('<button class="loadMoreCharacter" type="button">Load more</button>'),$(".loadMoreCharacter").click(function(){if(n===a)return $(".loadMoreCharacter").remove(),void(a=1);a+=1,$.ajax({url:"https://rickandmortyapi.com/api/character/?page=".concat(a),crossDomain:!0,type:"GET",dataType:"json"}).done(function(a){n=a.info.pages,t(a.results)})})}
},{}],"FCqC":[function(require,module,exports) {
"use strict";var e=o(require("./renderEpisodesCards")),a=o(require("./renderCharactersCards"));function o(e){return e&&e.__esModule?e:{default:e}}function t(){$(".content-list").empty(),$(".loadMoreCharacter").remove(),$(".loadMoreEpisodes").remove(),$(".filter-section").remove()}function n(){$("body").css({"background-image":"url(https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png)","background-repeat":"no-repeat",height:"97vh","background-position":"center","background-position-y":"100%"})}function r(e){$("#".concat(e)).addClass("active"),$("#".concat(e)).hasClass("active")&&($(".nav-btn").removeClass("active"),$("#".concat(e)).addClass("active"))}n(),$(".nav-btn").click(function(o){var c=this.id;if(r(c),$(".loadMoreBtn").removeClass().addClass("loadMoreBtn ".concat(c)),"home"===c)return n(),$(".filter__section").remove(),void t();$("body").css({"background-image":"none"}),$.ajax({url:"https://rickandmortyapi.com/api/".concat(c,"?page=").concat(1),crossDomain:!0,type:"GET",dataType:"json"}).done(function(o){o.info.pages,"episode"===c&&(t(),(0,e.default)(o.results)),"character"===c&&(t(),$(".filter__section").remove(),(0,a.default)(o.results))})});
},{"./renderEpisodesCards":"lhhI","./renderCharactersCards":"rBUo"}],"Focm":[function(require,module,exports) {
"use strict";require("./styles/main.scss"),require("./js/mainLogic");
},{"./styles/main.scss":"LDUH","./js/mainLogic":"FCqC"}]},{},["Focm"], null)
//# sourceMappingURL=/rickandmorty-project-jquery/src.f87faddd.js.map