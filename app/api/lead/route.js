export async function POST(req) {
  const body = await req.json();
  const { email, company } = body;

  // 1. Create Contact
  const contactRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
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

  const contactData = await contactRes.json();

  // 2. Create Deal (TEST ONLY)
  const dealRes = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.HUBSPOT_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      properties: {
        dealname: `New Lead - ${company}`,
        pipeline: "903129528",
        dealstage: "1365758387"
      }
    })
  });

  const dealData = await dealRes.json();

  console.log("DEAL RESPONSE:", dealData);
``
}
