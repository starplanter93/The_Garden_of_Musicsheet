import { MyPageTop } from '../../UI/organisms';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/firebase';
import { User } from 'firebase/auth';

const MyPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user as User);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (user) {
    const username = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;

    return (
      <>
        {username && email && photoURL && (
          <>
            <MyPageTop
              username={username}
              email={email}
              photoURL={photoURL}
              cash="100,000"
            />
          </>
        )}
      </>
    );
  } else {
    return null;
  }
};

export default MyPage;
