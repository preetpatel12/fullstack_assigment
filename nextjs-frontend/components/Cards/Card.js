import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { useRouter } from 'next/router';

const Cardomponent = (props) => {
  const router=useRouter()
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={props.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {props.description}
      </Typography>
    </CardContent>
    <CardActions>
    
      <Button size="small" onClick={()=>{
        router.push('Learn')
      }}>Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default Cardomponent