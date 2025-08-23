import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Minimal config: provider inferred from AUTH_GOOGLE_ID/SECRET
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // protect specific routes
      const protectedPaths = ["/dashboard", "/add-product"];
      const isProtected = protectedPaths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtected && !isLoggedIn) return false;
      return true;
    },
  },
});
