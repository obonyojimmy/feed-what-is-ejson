/************************ Both ***********************************************/

typeOf = function (value) {
  if (typeof value.typeName === 'function')
    return value.typeName();
  else
    return Object.prototype.toString.call(value);
};

bufferToString = function (buffer) {
  return String.fromCharCode.apply(null, buffer);
};

person = {
  name: "Chris Mather",

  // Notice the value is of type "Date"
  createdAt: new Date(),

  // the value is of type Uint8Array
  // The value is just a binary version of the string "hello"
  // You can test this in the browser by typing bufferToString(person.file)
  file: new Uint8Array([104, 101, 108, 108, 111])
};

/*****************************************************************************/
