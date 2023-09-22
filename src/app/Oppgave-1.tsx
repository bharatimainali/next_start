//A: Gitt disse. Hva er typene?

const genders = ["male", "female", "other"]
const firstName = "Marius"
const age = 38
const gender = genders[0]
const hasKids = true
const data = { name: firstName, age, gender }

//Answer: firstName = string,
//        age = number,
//        gender = string,
//        hasKids = boolean,

//B: Gitt denne funksjonen. Hva er typene her?
const items = [
  {
    id: 1,
    name: "Sara",
  },
]

function run(doc: any[]) {
  //also denne er boolean
  return doc.length > 0
}
run(items)

//C: Gitt denne funksjonen. Hvordan testen denne? Ser du noen feil? Gjør nødvendige endringer for at testene skal fungere.
const validateAge = (age: number) => {
  if (age < 18) {
    return { allowed: false, data: "Use bike" }
  }
  if (age < 100) {
    return { allowed: true, data: "Drive your own car" }
  }
  if (age === 18) {
    return { allowed: true, data: "Drive your dads card" }
  }
}

//her er jeg viser hvordan kan vi teste denne funksjonen..

/*describe("Validate Age", () => {
    it("should allow bike if age under 18", () => {
      const result = validateAge(17)
          // Use toStrictEqual to validate object
    });*/

describe("Validate Age", () => {
  test("should allow bike if age under 18", () => {
    const result = validateAge(17)
    expect(result).toStrictEqual({ allowed: false, data: "Use bike" })
  })
  /*it("should allow to use own car if age between 19 and 100", () => {
      const edgeLeft = validateAge(19)
      const edgeRight = validateAge(99)
          // Use toStrictEqual to validate object
    });*/
  test("should allow to use own car if age between 19 and 100", () => {
    const edgeLeft = validateAge(19)
    const edgeRight = validateAge(99)
    expect(edgeLeft).toStrictEqual({
      allowed: true,
      data: "Drive your own car",
    })
    expect(edgeRight).toStrictEqual({
      allowed: true,
      data: "Drive your own car",
    })
  })

  /*it("should use dads car if 18", () => {
      const result = validateAge(18)
          // Use toStrictEqual to validate object
    });*/
  test("should use dads car if 18", () => {
    const result = validateAge(18)
    expect(result).toStrictEqual({
      allowed: true,
      data: "Drive your dads card",
    })
  })

  /*it("should not be allowed if age more than 99", () => {
      const result = validateAge(100)
      // Use toContain - to validate allowed key
    });*/

  test("should not be allowed if age more than 99", () => {
    const result = validateAge(100)
    expect(result).toContain("allowed")
  })
})
