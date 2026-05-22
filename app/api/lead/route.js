export async function POST(req) {
  try {
    const body = await req.json();
    const { email, company } = body;

    console.log("INPUT:", email, company);

    // ✅ 1. Create Contact
    const contactRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            email,
            company,
          },
        }),
      }
    );

    const contactData = await contactRes.json();
    console.log("CONTACT:", contactData);

    if (!contactRes.ok) {
      return new Response(
        JSON.stringify({ error: "Contact failed", details: contactData }),
        { status: 500 }
      );
    }

    const contactId = contactData.id;

    // ✅ 2. Create Deal (SAFE)
    let dealId = null;

    try {
      const dealRes = await fetch(
        "https://api.hubapi.com/crm/v3/objects/deals",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            properties: {
              dealname: `New Lead - ${company}`,
              pipeline: "903129528",
              dealstage: "1365758387",
            },
          }),
        }
      );
      
      const dealData = await dealRes.json();
      console.log("DEAL:", dealData);

      if (dealRes.ok) {
        dealId = dealData.id;

        // ✅ 3. Associate Deal ↔ Contact
        await fetch(
