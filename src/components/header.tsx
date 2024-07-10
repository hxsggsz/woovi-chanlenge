import { Box } from "@mui/material";
import ToggleTheme from "@/components/toggle-theme";
import ToggleLang from "@/components/toggle-lang";

function Header() {
  return (
    <Box
      sx={{
        top: 0,
        width: 1,
        right: 0,
        p: "4px",
        gap: "4px",
        display: "flex",
        position: "fixed",
        justifyContent: "flex-end",
        backdropFilter: "blur(4px)",
      }}
    >
      <ToggleTheme />
      <ToggleLang />
    </Box>
  );
}

export default Header;
