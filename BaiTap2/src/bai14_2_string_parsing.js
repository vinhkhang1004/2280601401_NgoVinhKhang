const parseTemplate = (template, data) => {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] || '');
};

const parseQueryString = (url) => {
  const qs = url.split('?')[1];
  if (!qs) return {};
  return qs.split('&').reduce((acc, pair) => {
    const [k, v] = pair.split('=');
    acc[decodeURIComponent(k)] = decodeURIComponent(v);
    return acc;
  }, {});
};

module.exports = { parseTemplate, parseQueryString };