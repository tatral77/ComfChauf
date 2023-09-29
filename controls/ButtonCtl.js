import { Button } from "@mui/material";
export default function ButtonCtl(props) {
  return (
    <>
      <Button
        variant="contained"
        sx={{ backgroundColor: "black", color: "white" }}
      >
        {props.value}
      </Button>
    </>
  );
}
