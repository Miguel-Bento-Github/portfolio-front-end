export default function setImageUrl(img) {
  const width = window.innerWidth * 0.4;
  const noWidthUrl = img.slice(0, -3);
  return noWidthUrl + width;
}
