export default async function handler(req, res) {
  const csrfState = Math.random().toString(36).substring(2);

  let url = "https://www.tiktok.com/auth/authorize/";

  url += `?client_key=${process.env.NEXT_PUBLIC_tiktok_client_key}`;
  url += "&scope=user.info.basic,video.list";
  url += "&response_type=code";
  url += "&redirect_uri=http://localhost:3000/dashboard";
  url += "&state=" + csrfState;

  res.redirect(url);
}
