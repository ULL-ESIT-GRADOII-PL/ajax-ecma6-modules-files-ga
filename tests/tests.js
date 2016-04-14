var expect = chai.expect;

describe("CSV", function () {
    describe("Funcion Calculate", function() {
    
      it("Debería aceptar una entrada simple", function() {  
   
          var cadena = "1,2,3,4,a";
          
          var r = calculate(cadena);
          
          expect(r[0].value[0]).to.equal('1');
          expect(r[0].value[1]).to.equal('2');
          expect(r[0].value[2]).to.equal('3');
          expect(r[0].value[3]).to.equal('4');
          expect(r[0].value[4]).to.equal('a');
          
      });
   });
});
