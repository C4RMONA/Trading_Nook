import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";

const Calendar = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
              <Container maxWidth="80%" sx={{ mt: 12, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '85vh',
                }}
              >
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '85vh',
                }}
              >hello
                {/* <Chart /> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>

    </Box>
  )
}

export default Calendar;