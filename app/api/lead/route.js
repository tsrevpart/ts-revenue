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
      return new Response(
        JSON.stringify({
          error: "Contact creation failed",
          details: contactData,
        }),
        { status: 500 }
      );
    }

    const contactId = contactData.id;

    // ✅ 2. CREATE DEAL (FIXED VERSION)
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

            // ✅ your pipeline ID (correct)
            pipeline: "903129528",

            // ✅ IMPORTANT: this must be INTERNAL VALUE (NOT numeric ID)
            dealstage: "1365758387" 
          },
        }),
      }
    );

    const dealData = await dealRes.json();
    console.log("DEAL:", dealData);

    if (!dealRes.ok) {
      return new Response(
        JSON.stringify({
          error: "Deal creation failed",
          details: dealData,
        }),
        { status: 500 }
      );
    }

    const dealId = dealData.id;

    // ✅ 3. ASSOCIATE CONTACT ↔ DEAL
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

    // ✅ SUCCESS RESPONSE (ALWAYS RETURNS)
    return new Response(
      JSON.stringify({
        success: true,
        contactId,
        dealId,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return new Response(
      JSON.stringify({
        error: "Server error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
``
