export const getText = (contentObj, language) => {
  if (!contentObj) return '';
  if (typeof contentObj === 'string') return contentObj;
  return contentObj[language] || contentObj['pt'] || '';
};
