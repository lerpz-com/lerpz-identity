import { signIn, signOut } from "@lerpz/auth"
import { Button } from "@mantine/core"

export function SignIn() {
  const handleSignIn = async () => {
    "use server"
    await signIn("microsoft-entra-id")
  }

  return (
    <Button onClick={handleSignIn} variant="contained" className="w-full">Sign in</Button>
  )
}

export function SignOut() {
  const handleSignOut = async () => {
    "use server"
    await signOut()
  }

  return (
    <Button onClick={handleSignOut} variant="contained" className="w-full">Sign out</Button>
  )
}
