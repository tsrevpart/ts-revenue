export async function POST(req) {
  const body = await req.json();

  const { email, company } = body;

  const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.HUBSPOT_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      properties: {
        email: email,
        company: company
      }
    })
  });

  const data = await res.json();

  return Response.json({ success: true, data });
}
``
