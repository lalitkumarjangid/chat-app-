import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (username, password) => {
    try {
      // Assuming loginUser is imported from your API lib
      const user = await loginUser(username, password);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/'); // Redirect to home or chat page after login
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <LoginForm onSubmit={handleLogin} />
      <p>
        Don't have an account? <Link href="/register">Register here</Link>
      </p>
    </div>
  );
}