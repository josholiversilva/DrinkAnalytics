import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: '290575140718-7i94ac4uhbn0gvu6akju74hb0qc893bp.apps.googleusercontent.com',
          clientSecret: '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',
        })
      ],
      callbacks: {
        async session({ session, token }) {
            [session.user.firstname, session.user.lastname] = session.user.name.split(" ")
            session.user.tag = session.user.name
                .split(" ")
                .join("")
                .toLocaleLowerCase()
            session.user.uid = token.sub
            return session
        },
        async signIn({ account, profile }) {
            return true // Do different verification for other providers that don't have `email_verified`
        },
      }
})