const { reduceDuplicatedIngredient } = require('../utils/utils')

describe('reduceDuplicatedIngredient', () => {
    test('returns an array', () => {
        expect(typeof reduceDuplicatedIngredient([])).toBe('object')
        expect(Array.isArray(reduceDuplicatedIngredient([]))).toBe(true)
    })
    test('if given array has unique ingredients dosn\'t change anything', () => {
        givenArray = 
            [
                { "name": "demerara sugar", "grams": 25 },
                { "name": "flax", "grams": 66 },
                { "name": "apple juice", "grams": 44 },
                { "name": "oat milk", "grams": 198 }
            ]
        returnedArray = 
            [
                { "name": "demerara sugar", "grams": 25 },
                { "name": "flax", "grams": 66 },
                { "name": "apple juice", "grams": 44 },
                { "name": "oat milk", "grams": 198 }
            ]
        expect(reduceDuplicatedIngredient(givenArray)).toEqual(returnedArray)
    })
    test('if given array has only one duplicated ingredient returns with reduced array', () => {
        givenArray = 
            [
                { "name": "demerara sugar", "grams": 25 },
                { "name": "demerara sugar", "grams": 50 },
                { "name": "demerara sugar", "grams": 10 },
            ]
        returnedArray = 
            [
                { "name": "demerara sugar", "grams": 85 },
            ]
        expect(reduceDuplicatedIngredient(givenArray)).toEqual(returnedArray)
    })
    test('if given array has more then one duplicated ingredients returns reduced array', () => {
        givenArray = 
            [
                { "name": "demerara sugar", "grams": 25 },
                { "name": "demerara sugar", "grams": 50 },
                { "name": "demerara sugar", "grams": 10 },
                { "name": "flax", "grams": 20 },
                { "name": "flax", "grams": 15 },
            ]
        returnedArray = 
            [
                { "name": "demerara sugar", "grams": 85 },
                { "name": "flax", "grams": 35 },
            ]
        expect(reduceDuplicatedIngredient(givenArray)).toEqual(returnedArray)
    })
    test('works on given example', () => {
        givenArray = 
            [
                { "name": "honey", "grams": 41 },
                { "name": "apple juice", "grams": 67 },
                { "name": "lime", "grams": 131 },
                { "name": "apple juice", "grams": 115 }
            ]
        returnedArray = 
            [
                { "name": "honey", "grams": 41 },
                { "name": "apple juice", "grams": 182 },
                { "name": "lime", "grams": 131 },
            ]
        expect(reduceDuplicatedIngredient(givenArray)).toEqual(returnedArray)
    })
})