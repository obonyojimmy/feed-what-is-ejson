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
  createdAt: new Date(),
  file: new Uint8Array([104, 101, 108, 108, 111])
};

/*****************************************************************************/

/************************ Client *********************************************/

if (Meteor.isClient) {
}

/*****************************************************************************/


/************************ Server *********************************************/

if (Meteor.isServer) {
}

/*****************************************************************************/
