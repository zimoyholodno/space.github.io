export function calculateOffset() {
  const width = window.innerWidth;
  const padding = 15;

  if (width > 992) {
    return 0;
  }

  if (width < 769) {
    return (width - 640) / 2 > padding ? (width - 640) / 2 : padding;
  }

  if (width < 993) {
    return (width - 920) / 2 > padding ? (width - 920) / 2 : padding;
  }

  return padding;
}
