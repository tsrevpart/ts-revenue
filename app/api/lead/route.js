export async function POST(req) {
  try {
    console.log("API HIT");

    const body = await req.json();
    const { email, company } = body;

    console.log("INPUT:", email, company);

    // ✅ Create Contact
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

    const contactText = await contactRes.text();
    console.log("RAW CONTACT RESPONSE:", contactText);

    let contactData;
    try {
      contactData = JSON.parse(contactText);
    } catch {
      contactData = contactText;
    }

    if (!contactRes.ok) {
      return new Response(
        JSON.stringify({
          error: "Contact failed",
          details: contactData,
        }),
        { status: 500 }
      );
    }

    // ✅ SAFE RETURN (NO DEAL FOR NOW)
    return new Response(
      JSON.stringify({
        success: true,
        contact: contactData,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error("CRASHED:", error);

    return new Response(
      JSON.stringify({
        error: "Server crashed",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
``
