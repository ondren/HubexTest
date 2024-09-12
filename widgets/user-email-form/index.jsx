import React from 'react'
import {
    Box,
    Divider,
    FormControl,
    FormLabel,
    Grid2,
    Input,
    InputBase,
    InputLabel,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import SaveButton from '../../shared/save-button/index.jsx'

function UserEmailForm() {
    return (
        <div className="MuiPaper-root">
            <Paper>
                <Box component="section" sx={{ p: 2 }}>
                    <Typography variant="h6">
                        Change your private information
                    </Typography>
                    <Typography variant="h6">
                        Please read our terms of use to be informed how we
                        manage your private data.
                    </Typography>
                    <Box sx={{ paddingTop: '32px', paddingBottom: '32px' }}>
                        <Divider />
                    </Box>
                    <form>
                        <Grid2 container spacing={2}>
                            <Grid2 size={6}>
                                <Typography variant="h6">
                                    Enter your first name
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="First name *"
                                    variant="outlined"
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <Typography variant="h6">
                                    Enter your email
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="Email *"
                                    variant="outlined"
                                />
                            </Grid2>
                        </Grid2>
                        <br />
                        <br />
                        <Grid2>
                            <Typography variant="h6">Bio</Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Bio"
                            />
                        </Grid2>
                        <Grid2
                            sx={{ paddingTop: '32px', paddingBottom: '32px' }}
                        >
                            <br />
                            <Divider />
                        </Grid2>
                        <Grid2 container spacing={2}>
                            <Grid2 size={6}>
                                <Typography variant="h6">Country</Typography>
                                <TextField
                                    fullWidth
                                    label="Country *"
                                    variant="outlined"
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <Typography variant="h6">City</Typography>
                                <TextField
                                    fullWidth
                                    label="City *"
                                    variant="outlined"
                                />
                            </Grid2>
                        </Grid2>
                        <Grid2>
                            <Typography variant="h6">
                                Enter your address
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Address *"
                            />
                        </Grid2>
                        <br />
                        <br />
                        <Grid2
                            container
                            spacing={2}
                            justifyContent="space-between"
                        >
                            <Grid2>
                                <Typography>
                                    You may also consider to update your billing
                                    information.
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
