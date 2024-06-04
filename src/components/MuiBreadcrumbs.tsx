import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs 
            aria-label="breadcrumb"
            separator={"||" || "~" || <NavigateNextIcon fontSize="small"/>}
            maxItems={3}
            itemsAfterCollapse={2}
            itemsBeforeCollapse={1}
            >
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
                Catalog
            </Link>
            <Link underline="hover" color="inherit" href="/">
                Main
            </Link>
            <Link underline="hover" color="inherit" href="/getting-started/installation/">
                Special
            </Link>
            <Link underline="hover" color="inherit" href="/getting-started/installation/">
                Accessories 
            </Link>
            <Typography color="text.primary">Breadcrumb</Typography>
        </Breadcrumbs>

    </Box>
  )
}

export default MuiBreadcrumbs