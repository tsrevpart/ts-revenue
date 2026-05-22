export async function POST(req) {
  try {
    const body = await req.json();
    const { email, company } = body;

    console.log("INPUT:", email, company);

    // ✅ 1. CREATE CONTACT
    const contactRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
