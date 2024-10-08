export default function createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);
  const int8Array = new Int8Array(array);

  if (position < 0 || position > length) {
    throw new Error('Position outside range');
  }

  int8Array[position] = value;

  return array;
}
