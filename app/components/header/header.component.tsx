'use client';
import styles from './header.module.scss';
import Link from 'next/link';
import Logo from '../logo/logo.component';
import vehicleLineupData from '../../data/vehicle-lineup-data.json';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

type Props = {};

const Header = (props: Props) => {
  const searchParams = useSearchParams();
  const lineupId = searchParams.get('id');

  const navigationData = [
    {
      name: 'vehicle lineup',
      href: '/vehicle-lineup?id=1',
      subNav: Object.values(vehicleLineupData).map((i) => ({
        name: i.title,
        id: i.id,
        href: `/vehicle-lineup?id=${i.id}`,
      })),
    },
    { name: 'our service', href: '/our-service' },
    { name: 'why rent?', href: '/why-rent' },
    { name: 'about us', href: '/about-us' },
    { name: 'careers', href: '/careers' },
    { name: 'contact us', href: '/contact-us' },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <div className={styles.navContainer}>
          <div className={styles.contact}>
            <div className={styles.number}>(800) 826-7368</div>
            <div className={styles.login}>
              <Link href={'/login'}>customer login</Link>
            </div>
          </div>
          <div className={styles.navigation}>
            {navigationData.map((item) => {
              return (
                <div className={styles.navItemContainer}>
                  <Link href={item.href} className={styles.navItem}>
                    {item.name}
                  </Link>
                  {item.subNav ? (
                    <div className={styles.subNavContainer}>
                      {item.subNav.map((subNavItem) => (
                        <Link
                          href={subNavItem.href}
                          className={`${styles.subNavItem} ${
                            lineupId === subNavItem.id && styles.selected
                          }`}
                        >
                          {subNavItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Header;
