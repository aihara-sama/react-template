import { Typography } from "@mui/material";
import Helmet from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900&display=swap"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <body>
        <Typography>Home</Typography>
      </body>
    </>
  );
};

export default App;
