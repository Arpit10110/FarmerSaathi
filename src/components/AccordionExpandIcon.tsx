import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  return (
    <div  className='flex flex-col w-[95%] m-auto gap-[1rem] text-[1.3rem] '  > {/* Grayish background for whole container */}
      <Accordion sx={{ backgroundColor: '#424242', color: 'white', mb: 2 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: 'white' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Do I need a soil report to use crop prediction?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, a soil report is required to use the crop prediction feature. The AI analyzes the soil's nutrient levels, pH, and other properties to suggest the best crops for your land.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: '#424242', color: 'white', mb: 2 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: 'white' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">How do I upload my soil report?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can upload your soil report directly through the platform by clicking the 'Upload Report' button. Supported formats include PDF, JPG, and PNG files.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: '#424242', color: 'white', mb: 2 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: 'white' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">What if the system shows the wrong disease?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you suspect an incorrect diagnosis, you can retake the image or consult agricultural experts via the platform for a second opinion. Continuous improvements are made to enhance AI accuracy.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: '#424242', color: 'white', mb: 2 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: 'white' }} />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography component="span">Can I chat in my regional language?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the platform supports multiple regional languages for a better and more comfortable user experience. Simply choose your preferred language in the settings.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: '#424242', color: 'white', mb: 2 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: 'white' }} />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography component="span">How accurate is the disease detection system?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The AI-powered disease detection system has a high accuracy rate based on extensive training with diverse crop disease datasets. However, for critical cases, it's recommended to cross-check with agricultural experts.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}