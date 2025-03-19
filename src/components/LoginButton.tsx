import { Button } from '@mui/material'
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    const { data: session } = useSession()

    const handleSignIn = () => {
        signIn("azure-ad");
    }

    const handleSignOut = () => {
        signOut();
    }

    return session ? (
        <>
            Signed in as {session.user?.email} <br />
            <Button onClick={handleSignOut}>Sign out</Button>
        </>
    ) : (
        <>
            Not signed in <br />
            <Button onClick={handleSignIn}>Sign in</Button>
        </>
    )
}
