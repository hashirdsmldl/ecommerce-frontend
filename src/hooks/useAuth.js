import { useSelector } from 'react-redux';

export function useAuth() {
  const { phone, token, username } = useSelector((state) => state.auth);

  return {
    isAuth: !!phone,
    username,
    token,
  };
}
