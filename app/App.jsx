import React from 'react'
import UserEmailForm from '../widgets/user-email-form/index.jsx'
import { Container } from '@mui/material'

function App() {
    return (
        <Container className="App" sx={{maxWidth:'1280px'}}>
            <UserEmailForm />
        </Container>
    )
}
export default App
