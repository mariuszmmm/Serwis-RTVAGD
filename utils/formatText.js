const formatText = (text) => {
  const shortWords = ['a', 'i', 'o', 'u', 'w', 'z', 'do', 'na', 'nad', 'oraz'];
  const regex = new RegExp(`\\b(${shortWords.join('|')})\\s`, 'gi');

  if (typeof text !== 'string') return text;
  return text.replace(regex, '$1\u00A0');
}

export default formatText;