const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof velue === "object" && Object.keys(value).lenght === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;
