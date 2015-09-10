describe('convert roman numeral to integer', function() {
    it("given 1 return I", function () {
        expect(romanNumeral(1)).to.equal("I");
    });

    it("given 3 return III", function(){
        expect(romanNumeral(3)).to.equal("III");
    });

    it("given 4 return IV", function(){
        expect(romanNumeral(4)).to.equal("IV");
    });

});
