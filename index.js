// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// 1. Array functions destructivelyAppendCat(name)
// appends a cat to the end of the cats array:
function destructivelyAppendCat(name) {
    return cats.push(name);
}

// 2. destructivelyPrependCat(name)
// prepends a cat to the beginning of the cats array:
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

// 3. destructivelyRemoveLastCat()
// removes the last cat from the cats array:
function destructivelyRemoveLastCat() {
    return cats.pop();
}

// 4. destructivelyRemoveFirstCat()
// removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    return cats.shift();
}

// 5. appendCat(name)
// appends a cat to the cats array and returns a new array, leaving the cats array unchanged:
function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
}

// 5. appendCat(name)
// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged:
function prependCat(name) {
    const moreCats = [name, ...cats];
    return moreCats;
}

// 6. removeLastCat()
// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged:
function removeLastCat() {
    const catRemovedArray = [...cats.slice(0, -1)];
    return catRemovedArray;
}

// 7. removeFirstCat()
// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:
function removeFirstCat() {
    const catRemovedArray = [...cats.slice(1)];
    return catRemovedArray;
}