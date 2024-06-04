import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link
        href="https://mui.com/"
        color="inherit"
        underline={"hover" || "none"}
      >
        MUI
      </Link>
      <Link href="https://reactjs.org/" color="inherit" underline="hover">
        React
      </Link>
      <Typography variant="body2" color="secondary" sx={{fontWeight:"bold"}}>
        <Link
          href="https://www.typescriptlang.org/"
          color="inherit"
          underline="hover"
        >
          Express.js
        </Link>
        </Typography>
      <Link href="https://nextjs.org/" color="inherit" underline="hover">
        Next.js
      </Link>
      <Typography variant="h6">
        <Link
          href="https://www.typescriptlang.org/"
          color="inherit"
          underline="hover"
        >
          TypeScript
        </Link>
      </Typography>
    </Stack>
  );
};
