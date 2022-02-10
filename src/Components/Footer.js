import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box'


function Footer() {
  return (
    <div className="Footer">
      
        <div className="FooterText">

        <Box textAlign='center'>

        <IconButton>
            <TwitterIcon style={{margin: "0px 8px"}} color="success" sx={{ fontSize: 40 }}  />
        </IconButton>
        <IconButton>
            <FacebookIcon style={{margin: "0px 8px"}} color="success" sx={{ fontSize: 40 }}  />
        </IconButton>
        <IconButton>
            <InstagramIcon style={{margin: "0px 8px"}} color="success" sx={{ fontSize: 40 }}  />
        </IconButton>
        <IconButton>
            <GitHubIcon style={{margin: "0px 8px"}} color="success" sx={{ fontSize: 40 }}  />
        </IconButton>
        </Box>

        </div>

    </div>
  );
}

export default Footer;
