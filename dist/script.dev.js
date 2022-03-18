"use strict";

var renderCats = function renderCats(list) {
  var catsList = document.getElementById('cats-list');

  var _loop = function _loop(i) {
    if (list[i].image == undefined || list[i].image.url == undefined) {
      return "continue";
    }

    var listItem = document.createElement('div');
    listItem.className = 'list-item';
    var textBox = document.createElement('div');
    textBox.className = 'text-box';
    var imgBox = document.createElement('div');
    imgBox.className = 'img-box';
    var img = document.createElement('img');
    img.src = list[i].image.url;
    var name = document.createElement('h3');
    name.className = 'list-item__name';
    name.innerHTML = list[i].name;
    var weight = document.createElement('p');
    weight.className = 'list-item__weight';
    weight.innerHTML = "Weight: ".concat(list[i].weight.imperial, " kg");
    var lifeSpan = document.createElement('p');
    lifeSpan.className = 'list-item__life-span';
    lifeSpan.innerHTML = "Life span: ".concat(list[i].life_span, " year");
    var description = document.createElement('p');
    description.className = 'list-item__description';
    description.innerHTML = list[i].description;
    listItem.click(function () {
      window.open(list[i].wikipedia_url);
    });
    imgBox.appendChild(img);
    textBox.appendChild(name);
    textBox.appendChild(weight);
    textBox.appendChild(lifeSpan);
    textBox.appendChild(description);
    listItem.appendChild(imgBox);
    listItem.appendChild(textBox);
    catsList.appendChild(listItem);
  };

  for (var i = 0; i < list.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return catsList;
};

function fetchAPI() {
  var res, resInJSON;
  return regeneratorRuntime.async(function fetchAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://api.thecatapi.com/v1/breeds'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          resInJSON = _context.sent;
          renderCats(resInJSON);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

fetchAPI();