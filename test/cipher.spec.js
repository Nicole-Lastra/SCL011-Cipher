//describe a quién voy a testear
describe('cipher', () => {

  // It: qué voy a testear
  it('debería ser un objeto', () => {
    //assert es mi comparación 
    assert.equal(typeof cipher, 'object');
  });
//describe el método que está dentro en este caso el "encode"
  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
    //parámetros fijos para recibir el resultado
    assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG')
  });
});

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33')
  });

});
