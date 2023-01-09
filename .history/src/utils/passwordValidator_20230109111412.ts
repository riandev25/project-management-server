const passwordValidator = (value: string) => {
  return /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(value);
};
