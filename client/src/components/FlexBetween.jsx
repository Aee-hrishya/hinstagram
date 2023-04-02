import { Box } from "@mui/material";
import { styled } from "@mui/system";

//these are basically how we create styled components
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
