var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  for(let child of startEl.children) {
    let partialResult = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...partialResult]
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === `#`) return `id`;
  else if(selector[0] === `.`) return `class`;
  else if(selector.includes(`.`)) return `tag.class`;
  else return `tag`;
};

// NOTA SOBRE LA FUNCIÓN MATCH  
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
      matchFunction = ele => ele.id === selector.slice(1);
  } else if (selectorType === "class") {
      matchFunction = ele => ele.classList.contains(selector.slice(1));
  } else if (selectorType === "tag") {
      matchFunction = ele => ele.tagName === selector.toUpperCase();
  } else if (selectorType === "tag.class") {
    matchFunction = ele => {
      let [tagName, className] = selector.split('.');

      return matchFunctionMaker(tagName)(ele) && matchFunctionMaker('.' + className)(ele);
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
