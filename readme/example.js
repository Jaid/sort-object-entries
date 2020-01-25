const object = {
  mark: {
    age: 22,
  },
  tom: {
    age: 17,
  },
  sarah: {
    age: 13,
  },
  dwight: {
    age: 22,
  },
  bill: {
    age: 37,
  },
}

// Older people first, a-z on same age
function compare(value1, value2, key1, key2) {
  if (value1.age > value2.age) {
    return 1
  }
  if (value2.age > value1.age) {
    return -1
  }
  return new Intl.Collator("en").compare(key1, key2)
}

const result = sortObjectEntries(object, compare)
