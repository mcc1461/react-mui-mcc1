import { Box } from "@mui/material";

export const MuiLayout = () => {
  return (
    //* "sx" is a shorthand for "style" in Material-UI and only can be used with Material-UI components
    //* MUI Componets can be like a div, span, button, etc.
    //* All the MUI components can be listed as;
    //* MUI Core Components: Box, Container, Grid, Paper, Typography
    //* MUI Form Components: Checkbox, Radio, Switch, TextField
    //* MUI Selection Components: Autocomplete, Select
    //* MUI Navigation Components: Breadcrumbs, Link, Menu, Tabs
    //* MUI Display Components: Avatar, Badge, Card, Chip, Divider, List, Table
    //* MUI Feedback Components: Alert, Dialog, Snackbar
    //* MUI Data Display Components: Avatar, Badge, Card, Chip, Divider, List, Table
    //* MUI Lab Components: Rating, Skeleton, ToggleButton, Pagination
    //* MUI Icons: Icons
    //* MUI Styles: ThemeProvider, CssBaseline, GlobalStyles
    //* MUI Hooks: useMediaQuery, useTheme
    //* MUI Utils: createTheme, responsiveFontSizes, styled
    //* MUI Third Party Libraries: Material-UI Data Grid, Material-UI Pickers, Material-UI Rich Text Editor
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15rem",
          width: "15rem",
          backgroundColor: "info.light",
          color: "primary.dark",
          fontSize: "h3.fontSize",
          fontWeight: "fontWeightMedium",
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "primary.contrastText",
          },
        }}
      >
        MuiLayout
      </Box>
      {/*
      //* xs: extra small, sm: small, md: medium, lg: large, xl: extra large
      //* xs: 0px, sm: 600px, md: 960px, lg: 1280px, xl: 1920px
      */}
      
      <Box
        sx={{
            width: {
                xs: '100%',   // Full width on extra small screens
                sm: '50%',    // 50% width on small and up
                md: '33%',    // 33% width on medium and up
                lg: '25%',    // 25% width on large and up
                xl: '20%',    // 20% width on extra large and up
              },
              padding: {
                xs: '8px',
                sm: '12px',
                md: '16px',
                lg: '24px',
                xl: '32px',
              },
              backgroundColor: {
                xs: 'red',
                sm: 'green',
                md: 'blue',
                lg: 'yellow',
                xl: 'purple',

              },
          margin: "1rem",
          justifyContent: "center",
          alignItems: "center",
          color: "primary.dark",
          fontSize: "h3.fontSize",
          fontWeight: "fontWeightMedium",
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "primary.contrastText",
          },
        }}
      >
        Merhaba
      </Box>
    </>
  );
};
