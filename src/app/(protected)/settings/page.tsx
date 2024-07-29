import { auth, signOut } from "@/src/auth";

export default async function SettingsPage() {
  const session = await auth();
  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Log out</button>
      </form>
    </div>
  );
}
