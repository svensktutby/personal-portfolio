export const setEmptyStringObjectValues = (obj: ObjectType): ObjectType => {
  const copyObj = { ...obj };

  for (const key in copyObj) {
    copyObj[key] = '';
  }

  return copyObj;
};

type ObjectType = Record<string, string>;
