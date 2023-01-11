import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../components/Main/MainFeaturedPost';
import FeaturedPost from '../components/Main/FeaturedPost';
import Markdown from "markdown-to-jsx";
import fs from 'fs'
import matter from "gray-matter";
import { Box, Typography } from '@mui/material';


let slug = 'blogpost1';
const getPostMetadata = () => {

  try {
    const fileContents = fs.readFileSync(`components/blogpost1.md`, "utf8");
    const matterResult = matter(fileContents);
    console.log(matterResult);
    return matterResult;
  }
  catch (error) {
    console.log(error);
  }



  // const matterResult = matter(fileContents);
  // return matterResult;
  // const matterResult = matter(fileContents);
  // Get gray-matter data from each file.

  // const fileContents = fs.readFileSync(`components/blogpost1.md`, "utf8");
  // const matterResult = matter(fileContents);

  //  return matterResult

};


// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

// const posts=[Post1,Post1,Post1]


const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  const postContent = getPostMetadata(slug);

  return (<>
  

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Box>
              <h1>Icons in React MUI</h1>
              <p>Icons are a huge part of material design. They are used in buttons to convey action and information. Icons are used to symbolize a command, file, device, or directory.

                They are also used to represent actions like trash, print, and save, and are commonly found in app bars, toolbars, buttons, and lists.</p>
              <Box className="my-12 text-center">
                Icons in MUI can be rendered using two methods: Icon for rendering font icons, and SvgIcon for rendering SVG paths.

                The SvgIcon component takes an SVG path element as its child and converts it to a React component that displays the path, allowing the icon to be styled and respond to mouse events. This can be seen in the example below:

                Material UI also has a package that ships with preset icons to be used in your React app. Here is a list of icons that you can use in your project.

                This piece of code will render a fill icon and an outlined one from the Material Icons package:
              </Box>

          
            </Box>
          </Grid>

        </Container>

      </ThemeProvider>
   
    
  </>
  );
}