'use client';

export default function HomePage() {
  return (
    <div style={{
      background: '#0B0B0C',
      color: '#E6E6E6',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>

      {/* ✅ HERO (LEFT-ALIGNED, NOT CENTERED) */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 80px'
      }}>

        <div style={{ maxWidth: '1200px', width: '100%' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>

            {/* LEFT SIDE */}
            <div>

              {/* LOGO */}
              <img src="/logo.png" style={{
                width: '260px',
                marginBottom: '40px'
              }} />

              {/* HEADLINE */}
              <h1 style={{
                fontSize: '54px',
                lineHeight: 1.1,
                marginBottom: '24px',
                fontWeight: 600
              }}>
                Pipeline Is Not the Constraint.
                <br />
                Predictability Is.
              </h1>

              {/* SUBHEAD */}
              <p style={{
                fontSize: '20px',
                color: '#AAA',
                maxWidth: '520px',
                marginBottom: '40px'
              }}>
                We design AI-driven revenue systems that create consistent,
                scalable pipeline—independent of individual performance.
              </p>

              {/* CTA */}
              <a href="/briefing">
                <button style={{
                  padding: '18px 36px',
                  background: '#A11212',
                  border: 'none',
                  color: '#FFF',
                  fontSize: '15px',
                  cursor: 'pointer',
                  letterSpacing: '1px'
                }}>
                  Apply for Executive Briefing
                </button>
              </a>

            </div>


            {/* RIGHT SIDE (STRUCTURAL VISUAL BLOCK) */}
            <div style={{
              height: '400px',
              border: '1px solid #222',
              background: 'linear-gradient(135deg, #111 0%, #0B0B0C 100%)'
            }} />

          </div>

        </div>

      </section>


      {/* ✅ PROBLEM (TIGHTER + OFFSET) */}
      <section style={{
        padding: '120px 80px',
        maxWidth: '900px'
      }}>

        <h2 style={{
          fontSize: '32px',
          marginBottom: '20px'
        }}>
          Most Revenue Teams Don’t Operate on Systems.
        </h2>

        <p style={{
          fontSize: '18px',
          color: '#999',
          lineHeight: 1.8
        }}>
          Pipeline exists — but it is inconsistent.<br /><br />

          Generation depends on people, channels, and timing.<br /><br />

          That creates volatility — not scale.<br /><br />

          The constraint is not activity.<br />
          The constraint is system design.
        </p>

      </section>


      {/* ✅ SOLUTION (WIDER + CONTRAST BLOCK) */}
      <section style={{
        padding: '120px 80px',
        background: '#111'
      }}>

        <div style={{
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px'
        }}>

          <div>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
              We Build Revenue Infrastructure
            </h2>
          </div>

          <div style={{
            fontSize: '18px',
            color: '#AAA',
            lineHeight: 1.8
          }}>
            TS Revenue Partners works with leadership teams to design and
            implement structured, AI-enabled revenue systems.<br /><br />

            These systems eliminate dependency on reps, campaigns,
            and inconsistent channels — replacing them with predictable,
            scalable pipeline generation.
          </div>

        </div>

      </section>


      {/* ✅ OUTCOMES (CLEAN GRID) */}
      <section style={{
        padding: '120px 80px'
      }}>

        <div style={{
          maxWidth: '1000px'
        }}>

          <h2 style={{
            fontSize: '32px',
            marginBottom: '40px'
          }}>
            What This Enables
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            fontSize: '18px',
            color: '#CCC'
          }}>
            <div>✔ Predictable pipeline generation</div>
            <div>✔ Reduced reliance on outbound teams</div>
            <div>✔ Scalable acquisition systems</div>
            <div>✔ Visibility into revenue creation</div>
          </div>

        </div>

      </section>


      {/* ✅ FINAL CTA */}
      <section style={{
        padding: '140px 80px'
      }}>

        <h2 style={{
          fontSize: '32px',
          marginBottom: '20px',
          maxWidth: '600px'
        }}>
          If Pipeline Consistency Is Limiting Growth,
          You Already Have the Signal.
        </h2>

        <a href="/briefing">
          <button style={{
            marginTop: '30px',
            padding: '18px 36px',
            background: '#A11212',
            border: 'none',
            color: '#FFF',
            fontSize: '15px',
            cursor: 'pointer'
          }}>
            Apply for Executive Briefing
          </button>
        </a>

      </section>

    </div>
  );
}
