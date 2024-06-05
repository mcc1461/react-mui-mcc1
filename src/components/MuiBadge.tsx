import {Stack } from '@mui/material'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LikesIcon from '@mui/icons-material/ThumbUp';
import HeartIcon from '@mui/icons-material/Favorite';
import Dislikes from '@mui/icons-material/ThumbDown';

const unreadEmails = ['one', 'two', 'three', 'four', 'five'];
// const unreadEmails = [];

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={"row"} m={3}>
        <Badge badgeContent={4} color="primary">
            <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
            <VisibilityIcon />
        </Badge>
        <Badge badgeContent={4} color="error">
            <LikesIcon />
        </Badge>
        <Badge badgeContent={4} color="warning">
            <HeartIcon />
        </Badge>
        <Badge badgeContent={""} color="info">
            <Dislikes />
        </Badge>
        <Badge badgeContent={null} color="info">
            <Dislikes />
        </Badge>
        <Badge badgeContent={undefined} color="info">
            <Dislikes />
        </Badge>
        <Badge badgeContent={0} color="secondary">
            <Dislikes color="secondary" />
        </Badge>
        <Badge badgeContent={0} color="secondary" showZero> {/* showZero prop is used to show zero value */}
            <Dislikes color="secondary" />
        </Badge>
        <Badge badgeContent={125} color="secondary" showZero> {/* default max is 99 */}
            <Dislikes color="secondary" />
        </Badge>
        <Badge badgeContent={345} color="secondary" showZero max={999}> {/* here max increased to 999 */}
            <Dislikes color="secondary" />
        </Badge>
        <Badge variant='dot' color='primary'> {/* variant='dot' prop is used to show a dot */}
            <HeartIcon color="warning" />
        </Badge>
        <Badge variant='dot' color='primary' invisible> {/* invisible prop is used to hide the dot */}
            <HeartIcon color="warning" />
        </Badge>
        <Badge variant='dot' color='primary' invisible={false}> {}
            <HeartIcon color="warning" />
        </Badge>
        <Badge badgeContent={unreadEmails.length === 0 ? null : unreadEmails.length} variant={unreadEmails.length === 0 ? "dot" : undefined} color='primary' >
            <MailIcon color="primary" />
        </Badge>




    </Stack>
  )
}

export default MuiBadge