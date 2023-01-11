
import React from 'react'
import Cardomponent from '../components/Cards/Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Shop = () => {

  const data = [
    {
      title: 'Featured post',
      description:
        'Food blogging is a feature of food journalism interlinking a gourmet interest in food, blog writing, and food photography. Food blogs are generally written by food enthusiasts often referred to as a “foodies” and can be used commercially by the blogger to earn a profit.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4S8FCS-v2zZ-VFE2O0uUVuQde_b4QDzAvLw&usqp=CAU',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      description:
        'I love food. Ever since I was a little kid I have had this immense passion for cooking. I thought to myself. Why not share with the rest of the world wholesome healthy foods and ways to be happy and healthy that will keep even the most snobby foodie asking for more',
      image: 'http://cdn.shopify.com/s/files/1/0394/4087/5687/articles/how_healthy_food_is_good_for_us.jpg?v=1670572068',
      imageLabel: 'Image Text',
    },

    {
      title: 'Post title',
      description:
        'I love food. Ever since I was a little kid I have had this immense passion for cooking. I thought to myself. Why not share with the rest of the world wholesome healthy foods and ways to be happy and healthy that will keep even the most snobby foodie asking for more',
      image: 'http://cdn.shopify.com/s/files/1/0394/4087/5687/articles/how_healthy_food_is_good_for_us.jpg?v=1670572068',
      imageLabel: 'Image Text',
    },
    {
      title: 'Featured post',
      description:
        'Food blogging is a feature of food journalism interlinking a gourmet interest in food, blog writing, and food photography. Food blogs are generally written by food enthusiasts often referred to as a “foodies” and can be used commercially by the blogger to earn a profit.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4S8FCS-v2zZ-VFE2O0uUVuQde_b4QDzAvLw&usqp=CAU',
      imageLabel: 'Image Text',
    },
    {
      title: 'Indian post',
      description:
        'Food blogging is a feature of food journalism interlinking a gourmet interest in food, blog writing, and food photography. Food blogs are generally written by food enthusiasts often referred to as a “foodies” and can be used commercially by the blogger to earn a profit.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6F4w6dh2xv8UiXjF2OZQQ5ynDzBZQ6119g&usqp=CAU',
      imageLabel: 'Image Text',
    },
    {
      title: 'Biryani',
      description:
        'Food blogging is a feature of food journalism interlinking a gourmet interest in food, blog writing, and food photography. Food blogs are generally written by food enthusiasts often referred to as a “foodies” and can be used commercially by the blogger to earn a profit.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOMo8EvRpoYiwsk_Bg0OJmd_0z0JoiTchqQ&usqp=CAU',
      imageLabel: 'Image Text',
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((post, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Cardomponent title={post.title} image={post.image} description={post.description} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Shop