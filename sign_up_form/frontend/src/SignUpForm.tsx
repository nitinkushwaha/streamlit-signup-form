import React, { useEffect, useState } from "react"
import { TextField, Container, Typography, FormControl, InputLabel, InputAdornment, FilledInput, IconButton } from '@mui/material';
import Button from '@mui/material/Button';

import { Visibility, VisibilityOff } from '@mui/icons-material';

import "./style.css";

interface props {
    accountNumber: string;
    submitCallback: () => void;
}

export default function SignUpForm(props: props) {
    const [account, setAccount] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (props?.accountNumber) {
            setAccount(props.accountNumber);
        }
    }, [props.accountNumber]);
    useEffect(() => {
        if (account && username && password && !isFormValid) {
            setIsFormValid(true);
        } else if (!(account && username && password) && isFormValid) {
            setIsFormValid(false);
        }
    });

    const onButtonClick = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("Submitted");
        props.submitCallback();
    }
    return (
        <Container maxWidth="sm">
            <div className="form-container">
                <img src="samooha_Logo.png" className="logo" />
                <Typography variant="h5" gutterBottom className="form-title">
                    Sign up using your snowflake account
                </Typography>
                <TextField id="filled-basic" label="Account Locator" variant="filled" className="form-input" value={account} onChange={(e) => { setAccount(e.target.value) }} />
                <TextField id="filled-basic" label="Username" variant="filled" className="form-input" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <FormControl variant="filled" className="form-input">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password} onChange={(e) => { setPassword(e.target.value) }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end" onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword) }}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div className="form-text">
                    By signing up, I agree to the &nbsp;
                    <a href="https://samooha.tech/" target="_blank">Terms of Service</a>
                    &nbsp; and &nbsp;
                    <a href="https://samooha.tech/" target="_blank">Privacy policy</a>
                </div>
                <Button variant="contained" disabled={isFormValid ? false : true} onClick={onButtonClick}>Sign Up</Button>
                <div>
                    <div className="form-secondary-text">Note: You can later login to Samooha as a</div>
                    <div className="form-secondary-text-II"><strong>Provider</strong> or a <strong>Consumer</strong></div>
                </div>
            </div>
        </Container>
    )
}
