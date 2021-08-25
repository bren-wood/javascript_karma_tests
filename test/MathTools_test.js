describe("MathTools", function() {

    let calc

    beforeAll(function() {
        calc = new mathTools()
    })

    describe("isFactor", function() {
        // Specification of the tests

        it("should detect a factor of 10.", function (){
            expect(calc.isFactor(20, 10)).toEqual(true)
        })
    })

    describe("isEven", function() {
        // Specification of the tests

        it("should be able to detect an even number.", function (){
            expect(calc.isEven(2)).toEqual(true)
        })

        it("should be able to detect an odd number.", function (){
            expect(calc.isEven(3)).toEqual(false)
        })

        it("should be false when using a character.", function (){
            expect(calc.isEven("A")).toEqual(false)
        })

        it("should be false when calling without a parameter.", function (){
            expect(calc.isEven()).toEqual(false)
        })
    })
})