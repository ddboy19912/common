// ISC, Copyright 2017-2018 Jaco Greeff
// @flow

/**
  @name isObject
  @signature isObject (value: mixed): boolean
  @summary Tests for an `object`.
  @description
    Checks to see if the input value is a JavaScript object.
  @example
    import { isObject } from '@polkadot/util';

    isObject({}); // => true
    isObject('something'); // => false
*/
module.exports = function isObject (value: mixed): boolean {
  return typeof value === 'object';
};
