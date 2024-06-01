import { Typography } from '@mui/material'

//* Typography: variant="h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2"
//* h1: 96px | h2: 60px | h3: 48px | h4: 34px | h5: 24px | h6: 20px
//* subtitle1: 16px | subtitle2: 14px | body1: 16px | body2: 14px
//* body1: default font size for body text
//* body2: smaller font size for body text
//* component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2"
//* gutterBottom: adds bottom margin
//* paragraph: adds bottom margin
//* align: "inherit" | "left" | "center" | "right" | "justify" | "initial" | "unset" | "start" | "end" | "match-parent" | "inherit" | "left" | "center" | "right" | "justify" | "initial" | "unset" | "start" | "end" | "match-parent" 
//* color: "initial" | "inherit" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error" 
//* display: "initial" | "block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid" | "inline-grid" | "none" | "contents" | "flow-root" | "table" | "table-row" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row-group" | "flex" | "inline-flex" | "grid" | "inline-grid" | "none" | "contents" | "flow-root" | "table" | "table-row" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row-group"
//* noWrap: no wrap text
//* variantMapping: object to override or extend the variant definitions
//*LINK - https://mui.com/components/typography/
//*LINK - https://mui.com/customization/theming/#theme-variables
//*LINK - https://mui.com/customization/palette/
//*LINK - https://mui.com/customization/theming/#theme-provider
//*LINK - https://mui.com/customization/default-theme/
//*LINK - https://mui.com/customization/theming/#customizing
//*LINK - https://mui.com/customization/theming/#color
//*LINK - https://mui.com/customization/theming/#typography
//*LINK - https://mui.com/customization/theming/#typography-variants

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="subtitle1">h3. Heading</Typography>
        <Typography variant="subtitle2">h3. Heading</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi blanditiis, voluptatibus, nulla consequuntur ex reprehenderit quidem ea ullam, fugit iusto laudantium voluptatum? Perspiciatis iusto distinctio nemo modi explicabo iste cum nesciunt nam optio doloribus?</Typography>
        <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptate dolorem placeat quae obcaecati quos quod animi aliquam! Nisi quo fuga laborum, eveniet cum blanditiis quasi! Doloremque, facere amet perspiciatis voluptatibus aliquid adipisci molestias quo quis magni laboriosam hic similique nihil laborum ab eaque voluptatem?</Typography>
        
    </div>
  )
}

export default MuiTypography