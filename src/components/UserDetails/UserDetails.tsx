import styles from './UserDetails.module.scss';
import { useEffect, useState } from 'react';
import { UserData } from '../../types/table.ts';
import { api } from '../../services/api.ts';
import { LoadingComponent } from '../Loading/Loading.tsx';
interface IUserDetails {
  id: string;
}
export const UserDetails = ({ id }: IUserDetails) => {
  const [userData, setUserData] = useState<UserData>();
  const userNameSurname = id ? `${userData?.name} ${userData?.surname?.charAt(0)}.` : '';

  useEffect(() => {
    const controller = new AbortController();
    const fetchUserData = async (id: string) => {
      try {
        const response = await api.get(`/contacts/${id}`);
        const data = await response.data;
        setUserData(data);
      } catch (error) {
        console.error('Error while fetching data ', error);
      }
    };

    fetchUserData(id).then((r) => r);

    return () => {
      controller.abort();
    };
  }, [id]);

  const userDetailsData = [
    {
      label: 'Name:',
      value: userData?.name,
    },
    {
      label: 'City:',
      value: userData?.city,
    },
    {
      label: 'Email:',
      value: userData?.email,
    },
    {
      label: 'Phone:',
      value: userData?.phone,
    },
  ];

  return (
    <>
      {id ? (
        <div className={styles.container}>
          <span className={styles.userPictureContainer} />
          <span className={styles.title}>{userNameSurname}</span>
          <div className={styles.detailsWrapper}>
            {userDetailsData.map((item) => (
              <div key={item.value} className={styles.userDetailsContainer}>
                <div className={styles.userDetails}>
                  <span className={styles.labels}>{item.label}</span>
                </div>

                <div className={styles.userDetails}>
                  {item.label === 'Name:' && <span>{item.value}</span>}
                  {item.label === 'Email:' && (
                    <a href={`mailto:${item.value}`} className={styles.email}>
                      {item.value}
                    </a>
                  )}
                  {item.label !== 'Email:' && item.label !== 'Name:' && (
                    <span
                      style={{
                        textAlign: 'left',
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.noUserContainer}>
          <span>{userData ? 'Select user' : <LoadingComponent />}</span>
        </div>
      )}
    </>
  );
};
