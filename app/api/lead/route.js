export async function POST(req) {
  try {
    const body = await req.json();
    const { email, company } = body;

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

    // ✅ Fail fast if contact fails
    if (!contactRes.ok) {
      return Response.json(
        { error: "Contact failed", details: contactData },
        { status: 500 }
      );
    }

    const contactId = contactData.id;

    // ✅ 2. Create Deal
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

    // ✅ Fail fast if deal fails
    if (!dealRes.ok) {
      return Response.json(
        { error: "Deal failed", details: dealData },
        { status: 500 }
      );
    }

    const dealId = dealData.id;
