import {
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Box,
} from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1564135624576-c5c88640f235",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1530224264768-7ff8c1789d79",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    title: "Home Office",
  },
];
const itemData3 = [
    {
        img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
        title: "Bed",
    },
    {
        img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        title: "Kitchen",
    },
    {
        img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
        title: "Books",
    },
    {
        img: "https://images.unsplash.com/photo-1564135624576-c5c88640f235",
        title: "Chairs",
    },
    {
        img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
        title: "Coffee",
    },
    {
        img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
        title: "Storage",
    },
    {
        img: "https://images.unsplash.com/photo-1530224264768-7ff8c1789d79",
        title: "Forest",
    },
    {
        img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        title: "Home Office",
    }
];


const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList
        component="ul"
        sx={{ width: 500, height: 450 }}
        rowHeight={200}
        cols={3}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {/* <img src={item.img} alt={item.title} /> */}
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton>{/* Add your action icon here */}</IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        component="ul"
        sx={{ width: 500, height: 450 }}
        rowHeight={200}
        cols={3}
        gap={10}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            {/* <img src={item.img} alt={item.title} /> */}
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
                position={"below" || "top" || "bottom"}
                title={item.title}
                sx={{
                    alignSelf: "flex-end",
                }}
                actionIcon={
                    <IconButton>{/* Add your action icon here */}</IconButton>
                }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box>
        <ImageList
          component="ul"
          sx={{ width: 500, height: 450 }}
          rowHeight={200}
          cols={3}
          gap={10}
        >
          {itemData3.map((item) => (
            <ImageListItem key={item.img}>
              {/* <img src={item.img} alt={item.title} /> */}
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton>{/* Add your action icon here */}</IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MuiImageList;
