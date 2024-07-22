import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (username, email, password) => {
    try {
      // Assuming registerUser is imported from your API lib
      const user = await registerUser(username, email, password);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/'); // Redirect to home or chat page after registration
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      <RegisterForm onSubmit={handleRegister} />
      <p>
        Already have an account? <Link href="/login">Login here</Link>
      </p>
    </div>
  );
}