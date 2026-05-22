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
            email: email,
            company: company,
          },
        }),
      }
    );

    const contactData = await contactRes.json();
    console.log("CONTACT:", contactData);

    if (!contactRes.ok) {
      return Response.json(
        { error: "Contact creation failed", details: contactData },
        { status: 500 }
      );
    }

    const contactId = contactData.id;

    // ✅ 2. Create Deal (REPLACE IDS BELOW)
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

    if (!dealRes.ok) {
      return Response.json(
        { error: "Deal creation failed", details: dealData },
        { status: 500 }
      );
    }

    const dealId = dealData.id;

    // ✅ 3. Associate Deal ↔ Contact (correct v3 endpoint)
    await fetch(
      `https://api.hubapi.com/crm/v3/objects/deals/${dealId}/associations/contacts/${contactId}/deal_to_contact`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return Response.json({
      success: true,
      contactId,
      dealId,
    });

  } catch (error) {
    console.error("ERROR:", error);


        
