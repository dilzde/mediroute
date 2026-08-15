import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone Number", type: "text", placeholder: "+2547..." },
        password: { label: "OTP / Password", type: "password" }
      },
      async authorize(credentials, req) {
        // TODO: Implement backend verification via NestJS API for Patient OTP or Admin Password
        if (credentials?.phone === "+254700000000" && credentials?.password === "1234") {
          return { id: "1", name: "Test Patient", phone: "+254700000000" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/patient/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    }
  }
});

export { handler as GET, handler as POST };
