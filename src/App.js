import React from 'react'
import './App.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Header from './features/Header/Header'
import Footer from './features/Footer/Footer'
import WorkExperience from './features/WorkExperience/WorkExperience'
import Education from './features/Education/Education'
import Technologies from './features/Technologies/Technologies'
import { MuiThemeProvider, createTheme } from '@material-ui/core'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1dd1a7',
        },
    }
})

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Container maxWidth="md">
                    <Header />
                    <Divider style={{marginBottom: '15px'}} />
                    <Grid container spacing={4}>
                        <Grid item md={7}>
                            <WorkExperience style={{marginBottom: '15px'}} />
                            <Education />
                        </Grid>
                        <Grid item md={5}>
                            <Technologies />
                        </Grid>
                    </Grid>
                    <Footer />
                </Container>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
