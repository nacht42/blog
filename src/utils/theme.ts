const dark = "#000";
const white = "#fff";
const grey = "#1b1e21";

export interface Theme {
  colors: {
    primary: string;
    background: string;
    body: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: "#33e",
    background: white,
    body: dark,
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: "#e050ff",
    background: grey,
    body: white,
  },
};
