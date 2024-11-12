import styles from './logo.module.scss';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/sharp-innovations-assessment/logo.svg"
        alt="logo"
        width={180}
        height={100}
      />
    </div>
  );
};

export default Logo;
