'use client';

export default function HomePage() {
  return (
    <div style={{
      background: '#0B0B0C',
      color: '#E6E6E6',
      fontFamily: 'Arial, sans-serif'
    }}>

      {/* ✅ HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px'
      }}>
        <div style={{ maxWidth: '900px' }}>

          {/* ✅ LOGO */}
          <div style={{ marginBottom: '40px' }}>
            <img src="/logo.png" alt="logo" style={{ height: '40px' }} />
          </div>

          {/* ✅ HEADLINE */}
          <h1 style={{
            fontSize: '44px',
            lineHeight: 1.2,
            marginBottom: '20px'
          }}>
            Most Revenue Teams Don’t Have a Pipeline Problem.<br />
            They Have a Predictability Problem.
          </h1>

          {/* ✅ SUBHEAD */}
          <p style={{
            fontSize: '20px',
            color: '#999',
            marginBottom: '40px'
          }}>
            We help enterprise sales organizations design structured revenue systems
            that generate consistent, scalable pipeline — without relying on
            unpredictable campaigns or isolated channels.
          </p>

          {/* ✅ CTA */}
          <a
            href="/briefing"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              background: '#A11212',
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              borderRadius: '4px'
            }}
          >
            Apply for Executive Briefing
          </a>

          {/* ✅ TRUST LINE */}
          <p style={{
            marginTop: '20px',
            fontSize: '14px',
            color: '#666'
          }}>
            Designed for CROs, VP Sales, and Revenue Leaders
          </p>

        </div>
      </section>

      {/* ✅ PROBLEM SECTION */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
          Pipeline Exists. Predictability Doesn’t.
        </h2>

        <p style={{ color: '#999', lineHeight: 1.6 }}>
          Most organizations don’t struggle to generate pipeline.<br /><br />
          They struggle to generate it consistently.<br /><br />

          Results depend on individual performance, isolated campaigns,
          and specific channels — creating volatility instead of scale.<br /><br />

          The issue isn’t effort.<br />
          It’s system design.
        </p>
      </section>

      {/* ✅ SOLUTION SECTION */}
      <section style={{
        padding: '80px 20px',
        background: '#111',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
            We Don’t Run Campaigns. We Build Systems.
          </h2>

          <p style={{ color: '#999', lineHeight: 1.6 }}>
            TS Revenue Partners works with revenue leadership teams to
            diagnose pipeline inconsistency, identify structural constraints,
            and implement scalable demand systems.<br /><br />

            This isn’t about doing more.<br />
            It’s about building something that works consistently.
          </p>

        </div>
      </section>

      {/* ✅ OUTCOMES SECTION */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>
            What This Creates
          </h2>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            color: '#999',
            fontSize: '18px',
            lineHeight: 2
          }}>
            <li>✔ Consistent pipeline generation</li>
            <li>✔ Reduced reliance on individual reps</li>
            <li>✔ Scalable outbound infrastructure</li>
            <li>✔ Predictable revenue flow</li>
          </ul>

        </div>
      </section>

      {/* ✅ FINAL CTA */}
      <section style={{
        padding: '100px 20px',
        textAlign: 'center',
        background: '#0B0B0C'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
            If pipeline consistency is limiting growth, this will surface it.
          </h2>

          <a
            href="/briefing"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '16px 32px',
              background: '#A11212',
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              borderRadius: '4px'
            }}
          >
            Apply for Executive Briefing
          </a>

        </div>
      </section>

    </div>
  );
}
``
