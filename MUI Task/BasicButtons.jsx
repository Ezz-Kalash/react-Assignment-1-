import * as React from 'react';
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';




export default function BasicButtons() {
    const [Height, setHeight] = useState('300px'); 
    const [switchOn, setSwitchOn] = useState(false);

  return (
    <Stack spacing={2} direction="column">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Switch defaultChecked onClick={() => {
                setSwitchOn(!switchOn);

    if (switchOn) {
        setHeight('300px');
      } else {
        setHeight('100px'); 
      }
    }  } />

          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={{backgroundColor:"orange" ,height:Height,transition:"400ms"}}>
        <h1>hello world</h1>
      </div>
      
      

    </Stack>
  );
}
