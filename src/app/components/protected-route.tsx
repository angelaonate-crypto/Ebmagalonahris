import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router';

export function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const faceVerified = localStorage.getItem('faceVerified');
    const needsFaceVerification = localStorage.getItem('needsFaceVerification');

    if (!isAuthenticated) {
      // Not logged in, redirect to login
      navigate('/login');
    } else if (needsFaceVerification === 'true' || !faceVerified) {
      // Logged in but needs face verification
      navigate('/face-verification');
    }
  }, [navigate]);

  return <Outlet />;
}
