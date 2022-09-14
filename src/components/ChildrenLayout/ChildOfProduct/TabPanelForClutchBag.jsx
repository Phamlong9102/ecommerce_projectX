import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ReviewForClutchBag from './ReviewForClutchBag';

function TabPanelForClutchBag(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanelForClutchBag.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

export default function BasicTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box className="selection-default" sx={{ width: '100%' }}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs className="" value={value} onChange={handleChange} aria-label="basic tabs example">
               <Tab
                  className="css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected css-1h9z7r5-MuiButtonBase-root-MuiTab-root "
                  label="Description"
                  {...a11yProps(0)}
               />
               <Tab className="" label="Additional Information" {...a11yProps(1)} />
               <Tab className="" label="Review(1)" {...a11yProps(2)} />
            </Tabs>
         </Box>
         <TabPanelForClutchBag className="css-19kzrtu" value={value} index={0}>
            <div className="css-ahj2mt-MuiTypography-root">
               <span className="css-ahj2mt-MuiTypography-root">
                  Lorem ipsum dolor sit amet, saepe vitae gubergren pro cu, sit eros animal invidunt ei, ex nec munere
                  legere incorrupte. Eum an vocent commodo
               </span>
               <span className="css-ahj2mt-MuiTypography-root">
                  referrentur, no veniam maiestatis vim. Est verear nusquam delicata id, mea natum movet eripuit at. Eu
                  quot virtute usu, nonumy eruditi suscipit
               </span>
               <span className="css-ahj2mt-MuiTypography-root">
                  duo et. Nam eu dicta tamquam apeirian, has ei verear periculis vituperatoribus. Est summo nemore ne.
                  Nam ex posse argumentum eloquentiam,
               </span>
               <span className="css-ahj2mt-MuiTypography-root">
                  saepe similique interpretaris nec ex, ridens suscipit scriptorem ex mel.
               </span>
            </div>
         </TabPanelForClutchBag>
         <TabPanelForClutchBag value={value} index={1}>
            <div className="additional-infomation flex flex-col">
               <div>
                  <span>Weigth: &nbsp;&nbsp;&nbsp;&nbsp;  2kg</span>
               </div>
               <div>
                  <span>Dimension 20 x 10 x 5</span>
               </div>
            </div>
         </TabPanelForClutchBag>
         <TabPanelForClutchBag value={value} index={2}>
            <ReviewForClutchBag />
         </TabPanelForClutchBag>
      </Box>
   );
}
