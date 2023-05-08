export const getInfo = (info) => {
  if (info !== null && info !== '') return info;
  return 'secret';
};

export const getDate = (info) => {
  return getInfo(info).slice(0, 10).split('-').reverse().join('.');
};
