# Primitive Types
Primitive types in JS are:
- Stored on the stack
- The real value is stored, not a reference
- Passed by value
- Immutable

The following types are considered primitive:
- [Null](./null.js)
- [Undefined](./undefined.js)
- [Boolean](./boolean.js)
- [Number](./number.js)
- [String](./string.js)
- [Symbol](./symbol.js)

Primitive type detection could be done using the [typeof operator](./typeof.js).

There are also wrapper objects for primitive types (which are created under the hood as well when you invoke functions on primitives).
Working with these wrappers can be problematic and cause errors. To see some examples check out the [instanceof operator](./instanceof.js). 
