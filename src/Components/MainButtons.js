import React from 'react'
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function MainButtons() {
  return (
    <div className="MainButtonsContainter">
      <div className="MainButtons">

        {/* <Stack direction="row" spacing={2}> */}
        <Box textAlign='center'>
            <Button size="large" style={{margin: "30px 10px", width: "35%"}} variant="outlined" href="mailto:jamescarr1018@gmail.com" startIcon={<EmailIcon />}>
                Email
            </Button>
            <Button size="large" style={{margin: "30px 10px", width: "35%"}} variant="outlined" href="https://www.linkedin.com/in/jamesalexandercarr/" endIcon={<LinkedInIcon />} >
                LinkedIN
            </Button>
        </Box>    
        {/* </Stack> */}
      </div>
    </div>
  );
}

export default MainButtons;