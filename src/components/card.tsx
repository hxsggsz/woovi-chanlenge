import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { Box, Typography, Checkbox } from "@mui/material";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";

export interface CheckCardProps {
  multiplier: number;
  value: number;
}

export interface CardProps {
  label?: string;
  multiplier: number;
  value: number;
  roundedborder?: "top" | "bottom" | "full" | "none";
  greenMessage?: React.ReactNode;
  greyMessage?: React.ReactNode;
  bannerMessage?: React.ReactNode;
  checkCard: (values: CheckCardProps) => void;
}

const borderStyles = {
  top: "10px 10px 0 0",
  bottom: "0 0 10px 10px",
  full: "10px",
  none: "0",
};

function Card(props: CardProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(ev.target.checked);
    props.checkCard({
      value: props.value,
      multiplier: props.multiplier,
    });
  };

  const renderLabel = () => (
    <Box
      component="label"
      htmlFor={`checkbox-${props.value}`}
      sx={{
        left: "0",
        px: "20px",
        top: "-34px",
        color: "info.900",
        position: "absolute",
        bgcolor: "info.main",
        borderRadius: "100px",
      }}
    >
      {props.label}
    </Box>
  );

  const renderGreenMessage = () => (
    <Box
      sx={{
        color: "secondary.main",
      }}
    >
      {props.greenMessage}
    </Box>
  );

  const renderGreymessage = () => props.greyMessage;

  const renderBanner = () => (
    <Box
      sx={{
        py: "6px",
        pl: "10px",
        gap: "4px",
        color: "#fff",
        display: "flex",
        borderRadius: "4px",
        bgcolor: "primary.main",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
        clipPath: "polygon(0% 0%, 100% 0, 96% 50%, 100% 100%, 0% 100%)",
      }}
    >
      {props.bannerMessage}
    </Box>
  );

  return (
    <Box
      component="label"
      sx={{
        width: 1,
        p: "20px",
        cursor: "pointer",
        maxWidth: "430px",
        border: "2px solid",
        bgcolor: checked ? "secondary.50" : "",
        borderRadius: borderStyles[props.roundedborder ?? "none"],
        borderColor: checked ? "secondary.main" : "info.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        {props.label && renderLabel()}

        <Box sx={{ gap: "4px", display: "flex" }}>
          <Typography fontWeight={800} fontSize={24}>
            {props.multiplier}x
          </Typography>

          <Typography fontWeight={600} fontSize={24}>
            {formatCurrency(props.value)}
          </Typography>
        </Box>

        <Checkbox
          value={checked}
          color="secondary"
          sx={{ p: "2px" }}
          onChange={handleCheck}
          id={`checkbox-${props.value}`}
          checkedIcon={<CheckCircle />}
          icon={<RadioButtonUnchecked />}
        />
      </Box>

      {props.greenMessage && renderGreenMessage()}
      {props.greyMessage && renderGreymessage()}
      {props.bannerMessage && renderBanner()}
    </Box>
  );
}

export default Card;
