import React from 'react'
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import EmailIcon from '@mui/icons-material/Email';

function MainButtons() {
  return (
    <div className="MainButtonsContainter">
      <div className="MainButtons">

        {/* <Stack direction="row" spacing={2}> */}
        <Box textAlign='center'>
            <Button size="large" style={{margin: "30px 10px", width: "40%"}} variant="outlined" startIcon={<EmailIcon />}>
                Email
            </Button>
            <Button size="large" style={{margin: "30px 10px", width: "40%"}} variant="outlined" component="span">
                LinkedIN
            </Button>
        </Box>    
        {/* </Stack> */}
      </div>
    </div>
  );
}

export default MainButtons;