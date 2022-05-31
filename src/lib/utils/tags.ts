export function formatForURL(tag: string) {
  const formattedTag = tag.toLowerCase().replace(' ', '-');
  return formattedTag;
}

export function formatForDisplay(tag: string) {
  const tagArray = tag.replace('-', ' ').split(' ');

  for (let i = 0; i < tagArray.length; i++) {
    tagArray[i] = tagArray[i].charAt(0).toUpperCase() + tagArray[i].slice(1);
  }

  const formattedTag = tagArray.join(' ');

  return formattedTag;
}
