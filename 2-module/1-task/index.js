function sumSalary(salaries) {
  let count = 0;
  for (let key in salaries) {
    if (isFinite(salaries[key])) {
      count += salaries[key];
    }
  }

  return count;
}