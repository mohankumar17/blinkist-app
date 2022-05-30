import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import "./Footer.css";

type FooterTypes = {
  src: string;
};

function Footer({ src }: FooterTypes) {
  return (
    <div className="footer">
      <Stack
        spacing={3}
        direction="column"
        alignItems="flex-start"
        style={{ padding: "38px 0px" }}
      >
        <Box sx={{ height: 224 }}>
          <Stack spacing={1} direction="row">
            <Stack spacing={1} direction="column" width="410px">
              <Stack height="60px" width="99px">
                <img src={src} alt="logo-img" />
              </Stack>
              <Stack spacing={0.5} direction="column" height="60px">
                <Typography variant="h6">
                  Big ideas in small packages
                </Typography>
                <Typography variant="h6">Start learning now</Typography>
              </Stack>
            </Stack>

            <Stack spacing={1} direction="row" width="542px">
              <Stack spacing={1} direction="column" width="214px">
                <Typography variant="subtitle1">Editorial</Typography>
                <Typography variant="body2">Book Lists</Typography>
                <Typography variant="body2">What is Nonfiction?</Typography>
                <Typography variant="body2">What to read next?</Typography>
                <Typography variant="body2">Benefits of reading</Typography>
              </Stack>

              <Stack spacing={1} direction="column" width="132px">
                <Typography variant="subtitle1">Useful Links</Typography>
                <Typography variant="body2">Pricing</Typography>
                <Typography variant="body2">Blinkist Business</Typography>
                <Typography variant="body2">Gift cards</Typography>
                <Typography variant="body2">Blinkist magazine</Typography>
                <Typography variant="body2">Contact {"&"} help</Typography>
              </Stack>

              <Stack spacing={1} direction="column" width="132px">
                <Typography variant="subtitle1">Company</Typography>
                <Typography variant="body2">About</Typography>
                <Typography variant="body2">Careers</Typography>
                <Typography variant="body2">Partners</Typography>
                <Typography variant="body2">Code of Conduct</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ height: "22px" }}>
          <Typography variant="body2">
            © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
            Policies
          </Typography>
        </Box>
      </Stack>
    </div>
  );
}

export default Footer;
