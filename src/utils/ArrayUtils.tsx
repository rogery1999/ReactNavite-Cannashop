export const agroupArray = <T extends Object>(dataGroup: T[], cant: number) => {
  const data: T[][] = [];
  dataGroup.forEach((item, index) => {
    if (index % cant === 0) {
      data.push([{ ...item }]);
    } else {
      data[parseInt(`${index / cant}`, 10)].push({ ...item });
    }
  });
  return data;
};
