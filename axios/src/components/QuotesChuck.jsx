import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const QuotesChuck = () => {

    const [ quote, setQuote] = useState();
    const [ positive, setPositive ] = useState(0);
    const [negative, setNegative] = useState(0);

    const colors = [
        "#FF5733",
        "#FFA833",
        "#DEECA4",
        "#A4C3EC",
        "#ECA4D6",
        "#EC3D58"
     ];
    
    const colorFull = colors[Math.floor(Math.random() * 6)]
    document.body.style = `background: ${colorFull}`;

     useEffect(() => {}, []);

    const changePhrase = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res => setQuote(res.data))
    .catch((error) => {
        console.log(error);
      });
    }

    const count = (setCounter, counter) => {
        setCounter(counter + 1);
        changePhrase();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} id='changeColor'>
        {quote ? (   
        <Card
        sx={{
            width: 500,
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            padding: '5px',
          }}
          variant="outlined"
        >    
            <p>{quote.value}</p>
        <div style={{ display:'flex'}}>    
        <div style={{ padding: '10px', color: 'green' }}>
            <ThumbUpAltIcon onClick={() => count(setPositive, positive)}/>
            {positive}
        </div>
        <div style={{ padding: '10px', color: 'red' }}>
            <ThumbDownAltIcon onClick={() => count(setNegative, negative)} />
            {negative}
        </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
            <Button variant="outlined" color="primary" onClick={changePhrase}>Change Joke</Button>
        </div>
        </Card>
        ) : (
        <div style={{ marginTop: '10rem' }}>    
            <Button variant="contained" color="success" onClick={changePhrase}>See Jokes</Button>
        </div>
        )}
        </div>
    );
};

export default QuotesChuck;