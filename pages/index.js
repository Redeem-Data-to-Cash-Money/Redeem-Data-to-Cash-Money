import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Redeem Data to Cash Money</h1>
      <p>Convert your mobile data to cash easily and securely.</p>

      <div style={{ marginTop: '20px' }}>
        <Link href="/login">
          <button style={{ marginRight: '10px', padding: '10px 20px' }}>Login</button>
        </Link>
        <Link href="/signup">
          <button style={{ padding: '10px 20px' }}>Sign Up</button>
        </Link>
      </div>

      <div style={{ marginTop: '40px' }}>
        <p>Already a user? <Link href="/profile">Go to your profile</Link></p>
      </div>
    </div>
  );
  }
