export const concatUrlPath = (root: string, paths: string[]): string => {
  // remove root end char /
  if (root.endsWith("/")) {
    root = root.substring(0, root.length - 1);
  }
  //
  paths.forEach((path) => {
    path.replaceAll("/", "");
    root += "/";
    root += path;
  });

  return root;
};

export const toQueryString = (obj: { [key: string]: any }): string => {
  let str = "";
  Object.keys(obj).forEach((key, index) => {
    if (index === 0) {
      str += "?";
    } else {
      str += "&";
    }

    // ignore function
    if (typeof obj[key] !== "function") {
      str += `${key}=${obj[key]}`;
    }
  });

  return str;
};
