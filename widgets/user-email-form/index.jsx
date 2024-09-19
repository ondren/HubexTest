import React, { useEffect } from 'react'
import { Box, Divider, Grid2, Paper, TextField, Typography } from '@mui/material'
import { formText } from './consts/formText.js'
import SaveButton from '../../shared/save-button/index.tsx'
import { useDispatch, useSelector } from 'react-redux'
import {
    setAddress,
    setBio,
    setCity,
    setCountry,
    setDate,
    setEmail,
    setName,
} from '../../features/formDataSlice/formDataSlice.js'
import { currentDate, EMAIL_REGEXP } from '../../shared/consts/consts.js'

const UserEmailForm = () => {
    const dispatch = useDispatch()
    const formData = useSelector((state) => state.formData)
    const handleClick = () => {
        dispatch(setDate())
        console.log(formData)
    }
    useEffect(() => {
        dispatch(setDate())
    }, [])
    return (
        <div className="MuiPaper-root">
            <Paper sx={{ padding: '32px' }}>
                <Box component="section" sx={{ padding: '16px' }}>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                        {formText.PRIVATE_INFO}
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            marginBottom: '10px',
                            color: 'rgb(121, 122, 122)',
                        }}
                    >
                        <span>
                            Please read our{' '}
                            <a
                                style={{
                                    color: 'rgb(107, 155, 237)',
                                }}
                                target="_blank"
                                href="https://google.com"
                            >
                                terms of use
                            </a>{' '}
                            to be informed how we manage your private data.
                        </span>
                    </Typography>
                    <Box
                        sx={{
                            paddingTop: '32px',
                            paddingBottom: '32px',
                        }}
                    >
                        <Divider />
                    </Box>
                    <form>
                        <Grid2 container spacing={2}>
                            <Grid2 size={6}>
                                <Typography variant="p">{formText.ENTER_NAME}</Typography>
                                <TextField
                                    sx={{
                                        marginTop: '15px',
                                        marginBottom: '20px',
                                    }}
                                    fullWidth
                                    label="First name *"
                                    variant="outlined"
                                    value={formData.FIRST_NAME}
                                    onChange={(e) => dispatch(setName(e.target.value))}
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <Typography variant="p">
                                    {formText.ENTER_EMAIL}
                                </Typography>
                                <TextField
                                    sx={{
                                        marginTop: '15px',
                                        marginBottom: '20px',
                                    }}
                                    fullWidth
                                    label="Email *"
                                    variant="outlined"
                                    type="email"
                                    value={formData.EMAIL}
                                    error={Boolean(
                                        !formData.EMAIL.match(EMAIL_REGEXP) &&
                                            formData.EMAIL,
                                    )}
                                    onChange={(e) => dispatch(setEmail(e.target.value))}
                                />
                            </Grid2>
                        </Grid2>
                        <Grid2>
                            <Typography variant="p">{formText.ENTER_BIO}</Typography>
                            <TextField
                                sx={{
                                    marginTop: '15px',
                                    marginBottom: '20px',
                                }}
                                fullWidth
                                multiline
                                rows={5}
                                variant="outlined"
                                label="Bio"
                                value={formData.BIO}
                                onChange={(e) => dispatch(setBio(e.target.value))}
                            />
                        </Grid2>
                        <Grid2
                            sx={{
                                paddingTop: '32px',
                                paddingBottom: '32px',
                            }}
                        >
                            <Divider />
                        </Grid2>
                        <Grid2 container spacing={2}>
                            <Grid2 size={6}>
                                <Typography variant="p">
                                    {formText.ENTER_COUNTRY}
                                </Typography>
                                <TextField
                                    sx={{
                                        marginTop: '15px',
                                        marginBottom: '20px',
                                    }}
                                    fullWidth
                                    label="Country *"
                                    variant="outlined"
                                    value={formData.COUNTRY}
                                    onChange={(e) => dispatch(setCountry(e.target.value))}
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <Typography variant="p">{formText.ENTER_CITY}</Typography>
                                <TextField
                                    sx={{
                                        marginTop: '15px',
                                        marginBottom: '20px',
                                    }}
                                    fullWidth
                                    label="City *"
                                    variant="outlined"
                                    value={formData.CITY}
                                    onChange={(e) => dispatch(setCity(e.target.value))}
                                />
                            </Grid2>
                        </Grid2>
                        <Grid2 sx={{ marginTop: '30px' }}>
                            <Typography variant="p">{formText.ENTER_ADDRESS}</Typography>
                            <TextField
                                sx={{
                                    marginTop: '15px',
                                    marginBottom: '20px',
                                }}
                                fullWidth
                                variant="outlined"
                                label="Address *"
                                value={formData.ADDRESS}
                                onChange={(e) => dispatch(setAddress(e.target.value))}
                            />
                        </Grid2>
                        <Grid2
                            container
                            sx={{ marginTop: '30px' }}
                            spacing={2}
                            justifyContent="space-between"
                        >
                            <Grid2 alignContent="center">
                                <Typography>
                                    <span>
                                        You may also consider to update your{' '}
                                        <a
                                            style={{
                                                color: 'rgb(107, 155, 237)',
                                            }}
                                            target="_blank"
                                            href="https://google.com"
                                        >
                                            billing information.
                                        </a>
                                    </span>
                                </Typography>
                            </Grid2>
                            <Grid2>
                                <SaveButton propFunction={handleClick} />
                            </Grid2>
                        </Grid2>
                    </form>
                </Box>
            </Paper>
        </div>
    )
}

export default UserEmailForm
