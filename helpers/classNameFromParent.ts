const generateClassNames = (
  styles: {
    readonly [key: string]: string;
  },
  classNames: string[]
) => {
  if (!styles || !classNames) {
    return ""
  }

  const classes = classNames.map((item) => {
    if (styles[item] === undefined) {
      return ""
    }

    return styles[item];
  });

  return classes.join(" ");
};

export default generateClassNames;
