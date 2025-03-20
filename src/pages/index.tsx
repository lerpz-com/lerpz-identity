import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LoginButton from '@/components/LoginButton';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Lerpz - Identity
        </Typography>
        <Typography variant="h6" component="h1" sx={{ mb: 2 }}>
          Self-service portal.
        </Typography>
        <LoginButton />
      </Box>
    </Container>
  );
}
