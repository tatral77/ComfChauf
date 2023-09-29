import styles from "./PageHeading.module.css";
import { Box, Typography } from "@mui/material";
export default function PageHeading(props) {
  return (
    <Box className={styles.heading}>
      <Typography variant="Body1">{props.title}</Typography>
    </Box>
  );
}
