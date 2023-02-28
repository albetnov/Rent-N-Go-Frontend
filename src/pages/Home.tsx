import RouterLink from "../components/RouterLink";

export default function Home() {
  return (
    <main>
      <RouterLink to="/auth/login">Login</RouterLink>
      <RouterLink to="/auth/register">Register</RouterLink>
    </main>
  );
}
