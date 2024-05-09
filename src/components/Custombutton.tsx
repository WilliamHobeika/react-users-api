import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type CustomButtonProps = {
  text: string;
};

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

function CustomButton({ text }: CustomButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" size="medium">
        {text}
      </Button>
    </ThemeProvider>
  );
}

export default CustomButton;
