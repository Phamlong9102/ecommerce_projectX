import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SelectTextFields from '~/SelectTextFields/SelectTextFields';

function ChangeAdress() {
   return (
      <div>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
               <Typography className="css-yw020d-MuiAccordionSummary-expandIconWrapper css-1elwnq4-MuiPaper-root-MuiAccordion-root css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root css-o4b71y-MuiAccordionSummary-content css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root css-yw020d-MuiAccordionSummary-expandIconWrapper css-yw020d-MuiAccordionSummary-expandIconWrapper">Change Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <SelectTextFields />
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

export default ChangeAdress; 
