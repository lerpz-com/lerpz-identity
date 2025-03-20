import { Button } from '@mui/material'
import { signIn, signOut } from "@/auth"

export function SignIn() {
    const handleSignIn = async () => {
        "use server"
        await signIn("microsoft-entra-id");
    }

    return (
        <form onClick={handleSignIn}>
            <Button variant="contained" className="w-full">Sign in</Button>
        </form>
    )
}

export function SignOut() {
    const handleSignOut = async () => {
        "use server"
        await signOut();
    }

    return (
        <form action={handleSignOut}>
            <Button variant="contained" className="w-full">Sign out</Button>
        </form>
    )
}
