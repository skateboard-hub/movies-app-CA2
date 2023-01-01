import React, { useContext, useState } from "react";
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



const SignUpPage = () => {
    const context = useContext(MoviesContext);
    const isAuthenticated = context.isAuthenticated;
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState("");

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const register = () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
        let emailRegEx = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/; 
        const validPassword = passwordRegEx.test(password);
        const validEmail = emailRegEx.test(email);
        if ((validPassword && password === passwordAgain) && validEmail) {
            context.register(userName, password);
            setRegistered(true);
        }
        else{
            if(!validPassword){
                alert("Invalid password!");
            }
            else{
                if(password != passwordAgain){
                    alert("Different passwords!");
                }
                else{
                    alert("Invalid Email");
                }
            }
        }
    }

    if (registered === true) {
        return <Navigate to="/login" />;
    }

    return (
        <>

            <Grid container sx={{ padding: '20px' }}  >
                <Grid item xs={12} >
                    <Header title="Sign Up" />
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
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                    <br />
                                    
                                    <TextField
                                        required
                                        id="outlined-required"
                                        name="email"
                                        label="Email"
                                        InputLabelProps={{ shrink: true }}
                                        sx={{ width: '100%' }}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <br />
                                    <TextField
                                        name="password"
                                        id="outlined-multiline-static"
                                        label="Password"
                                        InputLabelProps={{ shrink: true }}
                                        sx={{ width: '100%' }}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <br />
                        
                                    <TextField
                                        name="password again"
                                        id="outlined-multiline-static"
                                        label="Password Again"
                                        InputLabelProps={{ shrink: true }}
                                        sx={{ width: '100%' }}
                                        onChange={e => {setPasswordAgain(e.target.value)}}
                                    />
                                    <br />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            width: '100%'
                                        }}
                                        onClick={register}
                                    >
                                        Sign Up <br />Through mobile
                                    </Button>
                                </div>
                            </Card>
                        ) : (
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
                                        required
                                        id="outlined-required"
                                        name="email"
                                        label="Email"
                                        InputLabelProps={{ shrink: true }}
                                        sx={{ width: '100%' }}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                    <TextField
                                        name="password again"
                                        id="outlined-multiline-static"
                                        label="Password Again"
                                        InputLabelProps={{ shrink: true }}
                                        sx={{ width: '100%' }}
                                        onChange={e => {setPasswordAgain(e.target.value)}}
                                    />
                                    <br />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            width: '100%'
                                        }}
                                        onClick={register}
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </Card>

                        )}

                    </Grid>
                </Box>
            </Grid >

        </>
    );
};

export default SignUpPage;