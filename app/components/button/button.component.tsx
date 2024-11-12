import Link from 'next/link';
import styles from './button.module.scss';
import { FaChevronRight } from 'react-icons/fa';

type Props = {
  text: string;
  href: string;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <Link href={props.href} className={`${props.className}`}>
      <div className={styles.button}>
        {props.text}
        <div className={styles.icon}>
          <FaChevronRight />
        </div>
      </div>
    </Link>
  );
};

export default Button;
