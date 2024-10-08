export default function createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const dataView = new DataView(array);

  dataView.setInt8(position, value);

  return dataView;
}
