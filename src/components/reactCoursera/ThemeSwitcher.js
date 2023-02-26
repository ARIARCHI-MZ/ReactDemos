import React from "react";
import { ThemeProvider, useTheme } from "./themSB/ThemeContext";
import Switch from "./themSB/Switch/index";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => (
  <div>
    <Paragraph>
      We are a pizza loving family. And for years, I searched and searched and
      searched for the perfect pizza dough recipe. I tried dozens, or more. And
      while some were good, none of them were that recipe that would make me
      stop trying all of the others.
    </Paragraph>
  </div>
);

const Header = () => (
  <header>
    <Title>Little Lemon 🍕</Title>
    <Switch />
  </header>
);

const Page = () => (
  <div className="Page">
    <Title>When it comes to dough</Title>
    <Content />
  </div>
);

function ThemeSwitcher() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Page />
      </div>
    </ThemeProvider>
  );
}

export default ThemeSwitcher;
