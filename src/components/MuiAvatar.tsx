import { Stack, Avatar, AvatarGroup, Box } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar
          sx={{ bgcolor: "primary.light" }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <Avatar
          sx={{ bgcolor: "secondary.light" }}
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        />
        <Avatar
          sx={{ bgcolor: "success.light" }}
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>MD</Avatar>
        <Avatar sx={{ bgcolor: "secondary.light" }}>TS</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }} />
        <Avatar sx={{ bgcolor: "warning.light" }}>OP</Avatar>
        <Avatar
          sx={{ bgcolor: "success.light" }}
          src="https://randomuser.me/api/portraits/women/33.jpg"
          alt="Jane Doe"
        />
        <Avatar
          sx={{ bgcolor: "success.light" }}
          src="https://randomuser.me/api/portraits/men/85.jpg"
          alt="John Way"
        />
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={5}>
          <Avatar sx={{ bgcolor: "success.light" }} />
          <Avatar
            sx={{ bgcolor: "success.light" }}
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt="Jane Doe"
          />
          <Avatar
            sx={{ bgcolor: "success.light" }}
            src="https://randomuser.me/api/portraits/men/85.jpg"
            alt="John Way"
          />
          <Avatar sx={{ bgcolor: "secondary.light" }}>TS</Avatar>
          <Avatar sx={{ bgcolor: "warning.light" }}>OP</Avatar>
          <Avatar sx={{ bgcolor: "warning.light" }}>AP</Avatar>
          <Avatar sx={{ bgcolor: "warning.light" }}>BC</Avatar>
          <Avatar sx={{ bgcolor: "warning.light" }}>BD</Avatar>
          <Avatar sx={{ bgcolor: "warning.light" }}>BE</Avatar>
          <Avatar sx={{ bgcolor: "warning.light" }}>CE</Avatar>
          <Avatar sx={{ bgcolor: "warning.light" }}>DE</Avatar>
        </AvatarGroup>
      </Stack>
      <Box style={{ margin: "3rem" }}> {/* Add margin to the Box - sx prop does not work here !!! */} 
        <Stack direction={"column"}>
          <Avatar
            sx={{ bgcolor: "primary.light" }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{ bgcolor: "secondary.light" }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ bgcolor: "success.light" }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
        </Stack>
      </Box>
      <Stack direction={"row"} spacing={3}>
        <Avatar sx={{ bgcolor: "success.light" }} variant="rounded" />
        <Avatar
          sx={{ bgcolor: "success.light" }}
          src="https://randomuser.me/api/portraits/women/33.jpg"
          alt="Jane Doe"
        />
        <Avatar
          sx={{ bgcolor: "success.light" }}
          src="https://randomuser.me/api/portraits/men/85.jpg"
          alt="John Way"
        />
        <Avatar sx={{ bgcolor: "secondary.light" }}>TS</Avatar>
      </Stack>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ width: "200px", margin: "3rem", padding:"1rem", backgroundColor: "#3a3a77", borderRadius: "10px", color: "white", textAlign: "center", boxShadow: "0 0 10px rgba(0,0,0,0.5)"}}
        >
          <Stack direction={"column"} spacing={4}>
            <Avatar
                variant="rounded"
              sx={{ bgcolor: "primary.light" }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Avatar
                variant="square"
              sx={{ bgcolor: "secondary.light" }}
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
            <Avatar
                variant={ "circular" || "rounded" || "circular" || "square"}
              sx={{ bgcolor: "success.light" }}
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
          </Stack>
        </Box>
      </div>
    </Stack>
  );
};

export default MuiAvatar;
