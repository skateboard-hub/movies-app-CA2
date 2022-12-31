import React, { useContext,useState } from "react";
import { MoviesContext } from "../contexts/moviesContext";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Navigate, useLocation } from "react-router-dom";



const logInPage = () => {
  const context = useContext(MoviesContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  let location = useLocation();

  const login = async () => {
    await context.authenticate(userName, password);
    
  };
  

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
        <>
          <Grid container sx={{ padding: '20px' }}  >
            <Grid item xs={12} >
              <Header title="Log In" />
            </Grid>
            <Box sx={{
              flexGrow: 1, padding: '40px',
              '& .MuiOutlinedInput-root': { m: 1 },
            }}>
              <Grid container sx={{ justifyContent: 'center', margin: 'auto', height: '600px' }}>
                {isMobile ? (
                  <Card sx={{ width: '100%', display: 'flex' }}>
                  <div style={{ justifyContent: 'center', margin: 'auto' }}>
                    <TextField
                      required
                      id="outlined-required"
                      name="username"
                      label="Username"
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      onChange={(event) => combineContent(event)}
                    />
                    <br />
                    <TextField
                      name="password"
                      id="outlined-multiline-static"
                      label="Password"
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      onChange={(event) => combineContent(event)}
                    />
                    <br />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{
                        width: '100%'
                      }}
                      onClick={(event) => submitContent2(event)}
                    >
                      Log In <br/>Through mobile
                    </Button>
                  </div>
                </Card>
                ): (
                <Card sx={{ width: '40%', display: 'flex' }}>
                  <div style={{ justifyContent: 'center', margin: 'auto' }}>
                    <TextField
                      required
                      id="username"
                      name="username"
                      label="Username"
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <br />
                    <TextField
                      name="password"
                      id="password"
                      label="Password"
                      InputLabelProps={{ shrink: true }}
                      sx={{ width: '100%' }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{
                        width: '100%'
                      }}
                      onClick={login}
                    >
                      Log In
                    </Button>
                  </div>
                </Card>
                                
                )}

              </Grid>
            </Box>
          </Grid >
        </>
      
      

    </>
  );
};

export default logInPage;