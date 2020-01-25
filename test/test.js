import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: sortObjectEntries} = indexModule

it("should run", () => {
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
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function compare(value1, value2, key1, key2) {
    if (value1.age > value2.age) {
      return -1
    }
    if (value2.age > value1.age) {
      return 1
    }
    return new Intl.Collator("en").compare(key1, key2)
  }
  const result = sortObjectEntries(object, compare)
  expect(Object.keys(result)).toStrictEqual(["bill", "dwight", "mark", "tom", "sarah"])
})