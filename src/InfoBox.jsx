import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=1024x1024&w=is&k=20&c=FzBhkGLI-zWZ36jW-uKKSeJJcFSNLFJ0b_kWmGlscuk="
    

    return(
        <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Min. Temperture = {info.tempMin}&deg;C</p>
          <p>Max. Temperature = {info.tempMax}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>The Weather is <b>{info.weather}</b> and Feels Like = {info.feelsLike}&deg;C</p>
          
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}