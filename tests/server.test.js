import test from 'ava';

import '../server/server';


test('first passing test', (t) => {
  t.pass();
});


const port = 8080;
const promise = Promise.reject(new TypeError(port));

test('rejects', async (t) => {
  const error = await t.throws(promise);
  t.is(error.message, '8080');
});


test((t) => {
  t.plan(1);
  return Promise.resolve(3).then((n) => {
    t.is(n, 3);
  });
});
