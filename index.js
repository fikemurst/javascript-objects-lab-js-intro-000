var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {[prop2]: "2"})

}
updateObjectWithKeyAndValue({prop: 1}, 'prop2', 2);
