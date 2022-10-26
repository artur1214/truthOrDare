export function stringFmt<P>(expression: string, valueObj: P): string {
  const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  return expression.replace(templateMatcher, (substring, value: keyof P, index: number): string => {
    return valueObj[value] as string;
  });
  //return text;
}

export function getRandom<P>(arr: Array<P>): P {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomExclude<P>(arr: Array<P>, exclude: P | P[]): P {
  if (exclude instanceof Array) {
    arr = arr.filter((value) => !exclude.includes(value));
  } else {
    arr = arr.filter(value => value != exclude);
  }
  return arr[Math.floor(Math.random() * arr.length)];
}
