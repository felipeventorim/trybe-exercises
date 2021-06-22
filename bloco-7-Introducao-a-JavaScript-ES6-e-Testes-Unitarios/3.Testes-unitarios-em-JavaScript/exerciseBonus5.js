/*
1. Create a Password verifications class called “PasswordVerifier”.

Add the following verifications to a master function called “Verify()”

i. password should be larger than 8 chars
ii. password should not be null
iii. password should have one uppercase letter at least
iv. password should have one lowercase letter at least
v. password should have one number at least
vi. Each one of these should throw an exception with a different message of your choosing
*/

const assert = require('assert');

const verifyLarger = (password) => {
  if (password.length > 8) {
    return true;
  }
  throw new Error('password deve conter mais que 8 caracteres');
};

const verifyNotNull = (password) => {
  if (password.length > 0) {
    return true;
  }
  throw new Error('insira um password');
};

const verifyHaveUppercase = (password) => {
  if (password.match(/[A-Z]/) !== null) {
    return true;
  }
  throw new Error('password deve conter pelo menos 1 letra maiuscula');
};

const verifyHaveLowercase = (password) => {
  if (password.match(/[a-z]/) !== null) {
    return true;
  }
  throw new Error('password deve conter pelo menos 1 letra minuscula');
};

const verifyHaveNumber = (password) => {
  if (password.match(/[1-9]/) !== null) {
    return true;
  }
  throw new Error('password deve conter pelo menos 1 numero');
};

const verify = (password) => {
  const tests = [];
  tests.push(verifyLarger(password));
  tests.push(verifyNotNull(password));
  tests.push(verifyHaveUppercase(password));
  tests.push(verifyHaveLowercase(password));
  tests.push(verifyHaveNumber(password));
  if (tests.every) {
    return true;
  }
  return false;
};

assert.throws(() => {
  verifyLarger('1bC45678');
  verifyNotNull('');
  verifyHaveUppercase('1a_456789');
  verifyHaveLowercase('1A_456789');
  verifyHaveNumber('aA_defghi');
});

assert.strictEqual(verifyLarger('1bC456789'), true);
assert.strictEqual(verifyNotNull('a'), true);
assert.strictEqual(verifyHaveUppercase('A23456789'), true);
assert.strictEqual(verifyHaveLowercase('a23456789'), true);
assert.strictEqual(verifyHaveNumber('1Bcdefghi'), true);

assert.strictEqual(verify('aA_123456'), true);
