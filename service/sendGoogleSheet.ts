import { ContactType } from "@/components/Forms/ContactType";

export default async function sendToGoogleSheets(data: ContactType) {
  const response = await fetch(process.env.SHEETS_POST_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: data.message,
      secretCode: process.env.SECRET_CODE,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Google Sheets error: ${error}`);
  }

  return response.json();
}
