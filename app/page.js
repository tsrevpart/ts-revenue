'use client';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0B0B0C',
      color: '#E6E6E6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '700px' }}>
        
        <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>
          Build Revenue Systems. Not Campaigns.
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#999',
          marginBottom: '30px'
        }}>
          TS Revenue Partners helps enterprise teams turn inconsistent pipeline
          into structured, scalable revenue systems.
        </p>

        <a
          href="/briefing"
          style={{
            display: 'inline-block',
            padding: '15px 25px',
            background: '#A11212',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Book Executive Briefing
        </a>

      </div>
    </div>
  );
}
