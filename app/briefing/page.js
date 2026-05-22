'use client';

export default function BriefingPage() {
  async function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const company = e.target.company.value;

    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify({ email, company }),
    });

    alert("Application submitted");
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#0B0B0C',
      color: '#E6E6E6'
    }}>
      <div style={{ width: '400px' }}>
        <h1 style={{ marginBottom: 20 }}>
          Executive Revenue Briefing
        </h1>

        <p style={{ marginBottom: 30, color: '#999' }}>
          Identify pipeline gaps and uncover scalable growth opportunities.
        </p>

        <form onSubmit={handleSubmit}>
          
          <input
            name="email"
            placeholder="Work Email"
            required
            style={{
              width: '100%',
              padding: 12,
              marginBottom: 10,
              background: '#111',
              border: '1px solid #222',
              color: 'white'
            }}
          />

          <input
            name="company"
            placeholder="Company Name"
            required
            style={{
              width: '100%',
              padding: 12,
              marginBottom: 20,
              background: '#111',
              border: '1px solid #222',
              color: 'white'
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: 15,
              background: '#A11212',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Apply for Briefing
          </button>

        </form>
      </div>
    </div>
  );
}
