const dark = "#000";
const white = "#fff";
const grey = "#1b1e21";

export interface theme {
  colors: {
    primary: string;
    background: string;
    body: string;
  };
}

export const lightTheme: theme = {
  colors: {
    primary: "#33e",
    background: white,
    body: dark,
  },
};

export const darkTheme: theme = {
  colors: {
    primary: "#e050ff",
    background: grey,
    body: white,
  },
};
