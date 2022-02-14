reduceDuplicatedIngredient = (array) => {
    const result = array.reduce((acc, d) => {
        const found = acc.find(a => a.name === d.name);
        !found
        ? 
        acc.push({name:d.name, grams: d.grams})
        :
        found.grams += d.grams

        return acc
    },[])
    return result
}

module.exports = { reduceDuplicatedIngredient }