'use client';

export default function HomePage() {
  return (
    <div style={{
      background: '#0B0B0C',
      color: '#E6E6E6',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>

      {/* ✅ HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        textAlign: 'center'
      }}>

        {/* ✅ LOGO */}
        <div style={{ marginBottom: '50px' }}>
          <img src="/logo.png" alt="TS Revenue Partners" style={{ width: '420px' }} />
        </div>

        {/* ✅ HEADLINE */}
        <h1 style={{
          fontSize: '52px',
          lineHeight: 1.1,
          maxWidth: '900px',
          marginBottom: '24px',
          fontWeight: 600
        }}>
          Pipeline Is Not the Constraint.<br />
          Predictability Is.
        </h1>

        {/* ✅ SUBHEAD */}
        <p style={{
          fontSize: '20px',
          color: '#AAA',
          maxWidth: '700px',
          marginBottom: '40px'
        }}>
          TS Revenue Partners designs AI-driven revenue systems that produce
          scalable, consistent pipeline—without reliance on individual
          performance or isolated channels.
        </p>

        {/* ✅ CTA */}
        <a href="/briefing">
          <button style={{
            padding: '18px 40px',
            fontSize: '16px',
            background: '#A11212',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            letterSpacing: '1px'
          }}>
            Apply for Executive Briefing
          </button>
        </a>

        {/* ✅ TRUST */}
        <div style={{
          marginTop: '20px',
          fontSize: '13px',
          color: '#666'
        }}>
          Built for CROs, VP Sales, and Revenue Leaders
        </div>

      </section>


      {/* ✅ PROBLEM SECTION */}
      <section style={{
        padding: '120px 20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>

        <h2 style={{
          fontSize: '32px',
          marginBottom: '20px'
        }}>
          Most Revenue Teams Are Operating Without a System
        </h2>

        <p style={{
          color: '#999',
          lineHeight: 1.8,
          fontSize: '18px'
        }}>
          Pipeline exists—but it is inconsistent.<br /><br />

          Generation depends on SDR performance, campaign timing,
          or individual channels.<br /><br />

          That creates volatility—not scale.<br /><br />

          The constraint is not effort.<br />
          The constraint is system design.
        </p>

      </section>


      {/* ✅ SOLUTION */}
      <section style={{
        padding: '120px 20px',
        background: '#111',
        textAlign: 'center'
      }}>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          <h2 style={{
            fontSize: '32px',
            marginBottom: '20px'
          }}>
            We Design Revenue Infrastructure
          </h2>

          <p style={{
            color: '#AAA',
            lineHeight: 1.8,
            fontSize: '18px'
          }}>
            TS Revenue Partners works directly with revenue leadership to design
            and implement structured, AI-enabled pipeline generation systems.<br /><br />

            These systems eliminate dependence on individual performance and
            create consistent, scalable growth.
          </p>

        </div>

      </section>


      {/* ✅ OUTCOMES */}
      <section style={{
        padding: '120px 20px',
        textAlign: 'center'
      }}>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          <h2 style={{
            fontSize: '32px',
            marginBottom: '30px'
          }}>
            What This Enables
          </h2>

          <div style={{
            fontSize: '20px',
            color: '#CCC',
            lineHeight: 2
          }}>
            <div>✔ Predictable pipeline generation</div>
            <div>✔ Reduced reliance on outbound teams</div>
            <div>✔ Scalable acquisition infrastructure</div>
            <div>✔ Visibility into revenue creation</div>
          </div>

        </div>

      </section>


      {/* ✅ FINAL CTA */}
      <section style={{
        padding: '140px 20px',
        textAlign: 'center'
      }}>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          <h2 style={{
            fontSize: '32px',
            marginBottom: '20px'
          }}>
            If pipeline consistency is limiting growth,<br />
            this will surface it quickly.
          </h2>

          <a href="/briefing">
            <button style={{
              marginTop: '30px',
              padding: '18px 40px',
              fontSize: '16px',
              background: '#A11212',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}>
              Apply for Executive Briefing
            </button>
          </a>

        </div>

      </section>

    </div>
  );
}
``
