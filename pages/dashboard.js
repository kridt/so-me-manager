import Navigation from "components/Navigation";
import { useAuth } from "utils/user-auth";
import NotSignedIn from "components/Navigation";

export default function dashboard() {
  const { user } = useAuth();
  if (!user) {
    return <NotSignedIn />;
  }

  return (
    <>
      <Navigation dashboard />
      <h1>dashboard</h1>
      <a
        href={`https://www.tiktok.com/auth/authorize/client_key=${process.env.NEXT_PUBLIC_tiktok_client_key}&response_type=code&scope=user.info.basic&redirect_uri=https://so-me-manager.vercel.app/dashboard&state=${process.env.NEXT_PUBLIC_RS}`}
      >
        login with tiktok
      </a>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://open.tiktokapis.com/v2/user/info/", {
//     headers: {
//       Authorization: "Bearer " +
//     },
//   });
//   const data = await res.json();

//   return { props: { data } };
// }

// async function tiktokLogin() {
//   const res = await fetch("/api/tiktok");
//   const data = await res.json();

//   console.log(data);
// }
