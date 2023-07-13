// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat (name) {
    cats.shift(name);
    return cats;
}
function appendCat (name){
    appendCat = [...cats];
    appendCat.push(name);
    return appendCat;

}
function prependCat(name){
    prependCat = [...cats];
    prependCat.unshift(name);
    return prependCat;
}
function removeLastCat(name){
    removeLastCat = [...cats];
    removeLastCat.pop(name);
    return removeLastCat;
}
function removeFirstCat(name){
    removeFirstCat = [...cats];
    removeFirstCat.shift(name);
    return removeFirstCat;
}