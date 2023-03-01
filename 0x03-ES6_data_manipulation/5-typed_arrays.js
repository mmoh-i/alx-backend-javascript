export default function createInt8TypedArray(legth, position, value) {
  if (position >= lenght) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
