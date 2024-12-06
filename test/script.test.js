const { name, address } = require('../script');

test('name should return the name', () => {
  expect(name("gopal", "dahal")).toBe("gopaldahal");
});

test('address should return the address', () => {
  expect(address("Nepal", "ilam")).toBe("Nepalilam");
});