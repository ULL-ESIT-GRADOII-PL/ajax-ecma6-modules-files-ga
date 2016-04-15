var expect = chai.expect;

describe("CSV", function () {
    describe("Funcion Calculate", () => {
    
      it("Deberia aceptar una entrada simple", () => {  
   
          let cadena = '"1","2","3","4","a"';
          
          let r = calculate(cadena);
          
          expect(r[0].value[0]).to.equal('1');
          expect(r[0].value[1]).to.equal('2');
          expect(r[0].value[2]).to.equal('3');
          expect(r[0].value[3]).to.equal('4');
          expect(r[0].value[4]).to.equal('a');
      });
     
      it('Debería aceptar un número con coma', () => {
          let cadena = '"3,4"';
          let r = calculate(cadena);
          
          expect(r[0].value[0]).to.equal('3,4');
      });
      
      
      it("Debería aceptar una cadena con comas a los lados", () => {
          let cadena = '",CSV,"';
          let r = calculate(cadena);
      
          expect(r[0].value[0]).to.equal(',CSV,');
      });
      
      
      it("Deberia aceptar cadenas separadas por comas y espacios", () => {
          let cadena = ' ,"CSV"';
          let r = calculate(cadena);
      
          expect(r[0].value[0]).to.equal(' ');
          expect(r[0].value[1]).to.equal('CSV');
      });
   });
});
