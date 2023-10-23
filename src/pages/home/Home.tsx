import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Home() {
    return (
        <div>
            <div>안녕 서비스임</div>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    )
}