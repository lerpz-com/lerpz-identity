import NextAuth from "next-auth"
import "next-auth/jwt"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

export const { handlers, auth, signIn, signOut } = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [MicrosoftEntraID],
    pages: {
        "signIn": "/auth/signin",
        "signOut": "/auth/signout",
    },
})
