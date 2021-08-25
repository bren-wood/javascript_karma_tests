describe("Calculator Tests", function (){

    let c

    beforeAll(function() {
        c = new calculator()
    })

    it("Can add two integers", function() {

        let num1 = 1
        let num2 = 2
        let expectedValue = 3

        expect(c.add(num1, num2)).toEqual(expectedValue)
    })

    it("Should fail when dividing by zero.", function() {

        let num1 = 10
        let num2 = 0

        expect(function() {c.divide(num1, num2)}).toThrow("Cannot divide by 0.")
    })
})