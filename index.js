const getFirstSelector = (selector) => (document.querySelector(selector));

const nestedTarget = () => (document.querySelector('main #nested .target'));

const increaseRankBy = (n) => {
  let ranked = document.querySelectorAll(".ranked-list li");
  ranked.forEach(el => el.innerHTML = (parseInt(el.innerHTML) + n));
}

deepestChild = () => {
  let grandNode = document.querySelector("div#grand-node");
  let nodeList = grandNode.querySelectorAll("*");
  let distArray = [...nodeList].map(node => {
    let distance = 0
    while (node !== grandNode) {
      node = node.parentNode;
      distance += 1;
    }
    return distance;
  });
  let max = Math.max.apply(null, distArray);
  return nodeList[distArray.indexOf(max)];
};
