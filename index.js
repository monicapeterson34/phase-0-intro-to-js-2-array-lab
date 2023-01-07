// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(`${name}`)
    return destructivelyAppendCat = [cats]
}

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`)
    return destructivelyPrependCat = [cats]
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return destructivelyRemoveLastCat = [cats]
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return destructivelyRemoveFirstCat = [cats]
}

function appendCat(name) {
    appendCat = [...cats, `${name}`]
    return appendCat
}

function prependCat(name) {
    prependCat = [`${name}`, ...cats]
    return prependCat
}

function removeLastCat() {
    removeLastCat = cats.slice(0, 2)
    return removeLastCat
}

function removeFirstCat() {
    removeFirstCat = cats.slice(1,3)
    return removeFirstCat
}