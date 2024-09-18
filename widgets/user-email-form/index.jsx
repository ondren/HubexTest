import React from 'react'
import {
    Box,
    Divider,
    Grid2,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import { formText } from './consts/formText.js'
import SaveButton from '../../shared/save-button/index.jsx'

function UserEmailForm() {
    return (
        <div className="MuiPaper-root">
            <Paper sx={{ padding: '32px' }}>
                <Box
                    component="section"
                    sx={{ padding: '16px' }}
                >
                    <Typography
                        variant="h6"
                        sx={{ marginBottom: '10px' }}
                    >
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
                            to be informed how we manage
                            your private data.
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
                                <Typography variant="p">
                                    {formText.ENTER_NAME}
                                </Typography>
                                <TextField
                                    sx={{
                                        marginTop: '15px',
                                        marginBottom:
                                            '20px',
                                    }}
                                    fullWidth
                                    label="First name *"
                                    variant="outlined"
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <Typography variant="p">
                                    {formText.ENTER_EMAIL}
                                </Typography>
                                <TextField
                                    sx={{
                                        marginTop: '15px',
                                        marginBottom:
                                            '20px',
                                    }}
                                    fullWidth
                                    label="Email *"
                                    variant="outlined"
                                />
                            </Grid2>
                        </Grid2>
                        <Grid2>
                            <Typography variant="p">
                                {formText.ENTER_BIO}
                            </Typography>
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
                                        marginBottom:
                                            '20px',
                                    }}
                                    fullWidth
                                    label="Country *"
                                    variant="outlined"
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <Typography variant="p">
                                    {formText.ENTER_CITY}
                                </Typography>
                                <TextField
                                    sx={{
                                        marginTop: '15px',
                                        marginBottom:
                                            '20px',
                                    }}
                                    fullWidth
                                    label="City *"
                                    variant="outlined"
                                />
                            </Grid2>
                        </Grid2>
                        <Grid2 sx={{ marginTop: '30px' }}>
                            <Typography variant="p">
                                {formText.ENTER_ADDRESS}
                            </Typography>
                            <TextField
                                sx={{
                                    marginTop: '15px',
                                    marginBottom: '20px',
                                }}
                                fullWidth
                                variant="outlined"
                                label="Address *"
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
                                        You may also
                                        consider to update
                                        your{' '}
                                        <a
                                            style={{
                                                color: 'rgb(107, 155, 237)',
                                            }}
                                            target="_blank"
                                            href="https://google.com"
                                        >
                                            billing
                                            information.
                                        </a>
                                    </span>
                                </Typography>
                            </Grid2>
                            <Grid2>
                                <SaveButton />
                            </Grid2>
                        </Grid2>
                    </form>
                </Box>
            </Paper>
        </div>
    )
}

export default UserEmailForm
