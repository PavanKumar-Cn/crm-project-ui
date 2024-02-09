import { Box, Button, FormControl, Paper, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { UserInput } from "../../types/types";
import axios from "axios";


const LoginPage = ()=>{

    const [loginInput, setLoginInput] = useState<UserInput>({} as UserInput);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const [formErrors, setFormErrors] = useState({
        username: {
            error: false,
            errorMessage: 'Username is required'
        },
        password: {
            error: false,
            errorMessage: 'Password is required'
        }
    });

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormErrors((preValues) => {
            return { ...preValues, [name]: { error: false } }
        });
        setLoginInput(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = () => {
        let validationFlag = false;
        if (loginInput.userName === '' || loginInput.userName === undefined) {
            formErrors['username'].error = true
            validationFlag = true;
        }

        if (loginInput.password === '' || loginInput.password === undefined) {
            formErrors['password'].error = true
            validationFlag = true;
        }
        if (validationFlag) {
            setFormErrors(() => { return { ...formErrors }; });
            return;
        }
        setIsProcessing(true);
        setIsDisabled(true);

        alert(JSON.stringify(loginInput));
    }

    // let formik = useFormik({
    //     initialValues:{
    //         userName:"",
    //         password:""
    //     },
    //     onSubmit: function(){}
    // })
    return (
        <React.Fragment>
            <Box sx={{
            display: 'flex',
            //alignItems: 'flex-end',
            flexDirection: 'column',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
            width: "98%",
            alignItems: "center"
        }}>
            <Stack flexDirection={"column"} display="flex" alignItems="flex-end">
            <Paper
                    elevation={5}
                    variant="elevation"
                    sx={{ p: 1, width: 600, marginTop: 30 }}
                    >

                    <h2 style={{ color: '#233044', textAlign:'center' }}>LOGIN</h2>

                    <FormControl
                        sx={{ width: "100%" }} >
                        <TextField
                            id="userName"
                            label="Username"
                            type="text"
                            name="userName"
                            sx={{ mb: 3 }}
                            value={loginInput.userName || ""}
                            required
                            onChange={handleChange}
                            autoComplete='off' fullWidth
                            size='small'
                            error={formErrors.username.error}
                            helperText={formErrors.username.error && formErrors.username.errorMessage} 
                            />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            sx={{ mb: 3 }}
                            value={loginInput.password || ""}
                            required
                            onChange={handleChange}
                            autoComplete='off' fullWidth
                            size='small'
                            // error={formErrors.password.error}
                            // helperText={formErrors.password.error && formErrors.password.errorMessage} 
                            />
                    </FormControl>
                    <Stack
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end">
                        <Button
                            color="primary"
                            type="submit"
                            variant='contained'
                            onClick={handleSubmit}
                             >Login</Button>
                    </Stack>
                </Paper>

            </Stack>

            </Box>
        </React.Fragment>
        
    );
}

export default LoginPage;