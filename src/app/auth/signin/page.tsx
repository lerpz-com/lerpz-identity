import { auth } from '@/auth';
import { SignIn, SignOut } from '@/components/auth';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default async function Page() {
  const session = await auth()
  
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
        <Typography variant="h4" sx={{ mb: 2 }}>
          Lerpz - Identity
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Self-service portal.
        </Typography>
        {session ? (
          <div>
            <Typography sx={{ mb: 2 }}>
              Welcome {session.user?.email}
            </Typography>
            <SignOut />
          </div>
        ) : (
          <div>
            <Typography sx={{ mb: 2 }}>
              Sign in to continue.
            </Typography>
            <SignIn />
          </div>
        )}
      </Box>
    </Container>
  );
}
