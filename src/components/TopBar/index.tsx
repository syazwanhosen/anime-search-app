import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const TopBar = () => {
    return (
        <AppBar position="static" color="primary" elevation={2}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" fontWeight={600}>
                        Anime Search
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
