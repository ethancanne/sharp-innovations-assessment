import Link from 'next/link';
import Logo from '../logo/logo.component';
import styles from './footer.module.scss';

type Props = {};

const Footer = (props: Props) => {
  type FooterLink = {
    text: string;
    isLink?: boolean;
    href?: string;
    isBold?: boolean;
  };

  type FooterSection = {
    title: string;
    data: FooterLink[];
  };
  const footerData: FooterSection[] = [
    {
      title: 'the lineup',
      data: [
        { text: '330 S Warminster Rd' },
        { text: 'Suite 334' },
        { text: 'Hatboro, PA 19040' },
        { text: '1-800-826-7368', isBold: true },
      ],
    },
    {
      title: 'quick links',
      data: [
        { text: 'Vehicle Lineup', isLink: true, href: '/vehicle-lineup' },
        { text: 'Our Services', isLink: true, href: '/our-services' },
        { text: 'Customer Login', isLink: true, href: '/customer-login' },
        { text: 'Contact Us', isLink: true, href: '/contact-us' },
      ],
    },
    {
      title: 'info',
      data: [
        { text: 'Privacy Policy', isLink: true, href: '/privacy-policy' },
        { text: '©2023 Express 4x4 Truck Rental' },
        { text: 'Site Design by: Sharp Innovations' },
      ],
    },
    {
      title: 'social',
      data: [{ text: 'Facebook' }],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>

        {footerData.map((item) => (
          <div className={styles.infoItem}>
            <span className={styles.title}>{item.title}</span>
            <div className={styles.data}>
              {item.data.map((d) =>
                d.isLink ? (
                  <Link href={d.href as string}>{d.text}</Link>
                ) : (
                  <span
                    className={styles.dataItem}
                    style={{ fontWeight: d.isBold ? 600 : 200 }}
                  >
                    {d.text}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
