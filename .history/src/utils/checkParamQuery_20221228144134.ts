// interface ICheckQueryParam {
//   checked?: string | QueryString
// }

export const checkQueryParam = (checked: string | undefined) => {
  let checkedParam = { isChecked: false };
  if (checked === 'true') {
    checkedParam.isChecked === true;
  } else {
    checkedParam.isChecked === false;
  }
  return checkedParam;
};
