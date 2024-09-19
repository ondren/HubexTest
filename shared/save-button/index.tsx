import * as React from 'react'
import { Button } from '@mui/material'

const SaveButton = ({ propFunction }: { propFunction?: any }) => {
    return (
        <div>
            <Button
                variant="contained"
                sx={{ padding: '10px 22px' }}
                onClick={propFunction}
            >
                Save
            </Button>
        </div>
    )
}
export default SaveButton
