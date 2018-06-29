export const randomElement = (array) => (
  array[Math.floor(Math.random() * array.length)]
)

export const sumArrays = (array1, array2) => (
  array1.map(function(value, index) {
    return value + array2[index]
  })
)

export const subtractArrays = (array1, array2) => (
  array1.map(function(value, index) {
    return value - array2[index]
  })
)

export const multiplyArrays = (array1, array2) => (
  array1.map(function(value, index) {
    return value * array2[index]
  })
)