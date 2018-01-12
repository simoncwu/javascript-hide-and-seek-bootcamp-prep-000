function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + 1;
  }
}

function deepestChild() {
  let node = document.querySelector('div#grand-node');
  while (node.children.length > 0) {
    node = node.children[0];
  }
  return node;
}