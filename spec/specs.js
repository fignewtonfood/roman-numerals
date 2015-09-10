describe('convert roman numeral to integer', function() {
    it("given 1 return I", function () {
        expect(romanNumeral(1)).to.equal("I");
    });

    it("given 3 return III", function(){
        expect(romanNumeral(3)).to.equal("III");
    });

    it("given 9 return IX", function(){
        expect(romanNumeral(9)).to.equal("IX");
    });

    it("given 994 return CMXCIV", function (){
        expect(romanNumeral(994)).to.equal("CMXCIV");
    });
});
