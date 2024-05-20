export const handle = (date: any) => {
  const year = date.getFullYear();
  const setMonth = date.getMonth() + 1;
  const month: string = setMonth < 10 ? '0' + setMonth : setMonth;
  const day: string =
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return `${day}-${month}-${year}`;
};

export const handleCreate = (date: any) => {
  const year = date.getFullYear();
  const setMonth = date.getMonth() + 1;
  const month: string = setMonth < 10 ? '0' + setMonth : setMonth;
  const day: string =
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return `${year}-${month}-${day}`;
};
