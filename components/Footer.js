import useThemeContext from "../context/ThemeProvider";

const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <p
      className={`flex justify-center font-comic font-bold ${
        theme ? "text-black" : "text-white"
      }`}
    >
      Made with Next.js and React by Mariia MERCIER
    </p>
  );
};

export default Footer;
