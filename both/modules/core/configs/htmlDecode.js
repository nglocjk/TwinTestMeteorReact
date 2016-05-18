export default function htmlDecode(value) {
  if (value) {
    return value.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  } else {
    return "";
  }
}
