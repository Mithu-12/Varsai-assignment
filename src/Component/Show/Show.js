import React from 'react';
import './Show.css'
import img4 from '../Image/Img.png'
import img2 from '../Image/img2.png'
import img3 from '../Image/img3.png'
import img from '../Image/img4.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const Show = () => {
    return (
        <div className='show-container'>
            <div className="show-wrapper">
                <div className="show-content">
                    <h2 className='show-title'>Upcoming Shows</h2>
                    <div className="show-card">
                    <Card sx={{ maxWidth: 460 }} className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={img}
                        />
                        <CardContent className='card-details'>
                        <Typography className='card-item'>
                                Folk
                            </Typography>
                            <Typography gutterBottom variant="h5" className="show-heading" component="div">
                            Benny Dayal
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Info  <ArrowForwardIcon></ArrowForwardIcon></Button>
                            <Button size="small"><QrCodeScannerIcon></QrCodeScannerIcon></Button>
                        </CardActions>
                        </Card>
                    <Card sx={{ maxWidth: 460 }} className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={img2}
                        />
                        <CardContent className='card-details'>
                            <Typography className='card-item card-item1'>
                                Bollywood
                            </Typography>
                            <Typography gutterBottom variant="h5" className="show-heading" component="div">
                            Vijay Yesudas
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Info  <ArrowForwardIcon></ArrowForwardIcon></Button>
                            <Button size="small"><QrCodeScannerIcon></QrCodeScannerIcon></Button>
                        </CardActions>
                        </Card>
                    <Card sx={{ maxWidth: 460 }} className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={img3}
                        />
                        <CardContent className='card-details'>
                        <Typography className='card-item'>
                                Folk
                            </Typography>
                            <Typography gutterBottom variant="h5" className="show-heading" component="div">
                            Andrea Jeremiah
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Info  <ArrowForwardIcon></ArrowForwardIcon></Button>
                            <Button size="small"><QrCodeScannerIcon></QrCodeScannerIcon></Button>
                        </CardActions>
                        </Card>
                    <Card sx={{ maxWidth: 460 }} className='card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={img4}
                        />
                        <CardContent className='card-details'>
                            <Typography className='card-item'>
                                Folk
                            </Typography>
                          <Typography gutterBottom variant="h5" className="show-heading" component="div">
                          Shilpa Rao
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Info  <ArrowForwardIcon></ArrowForwardIcon></Button>
                            <Button className='show-button' size="small"><QrCodeScannerIcon></QrCodeScannerIcon></Button>
                        </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;