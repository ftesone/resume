import React from 'react'
import './App.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Header from './features/header/Header'
import Footer from './features/footer/Footer'
import WorkExperience from './features/work-experience/WorkExperience'
import Education from './features/education/Education'
import Technologies from './features/technologies/Technologies'
import AboutMe from './features/about-me/AboutMe'
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
                <Container maxWidth="xl">
                    <Header />
                    <Divider style={{marginBottom: '15px'}} />
                    <Grid item spacing={12}>
                        <AboutMe />
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item lg={8}>
                            <WorkExperience />
                            <Education />
                        </Grid>
                        <Grid item lg={4}>
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
