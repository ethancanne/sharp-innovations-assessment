import Button from '@/app/components/button/button.component';
import styles from './intro.module.scss';
import Image from 'next/image';

type Props = {};

const IntroView = (props: Props) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage:
          'url(/sharp-innovations-assessment/homeBackground.svg)',
      }}
    >
      <div className={styles.contentContainer}>
        <h1 className={styles.headerText}>
          <span>where</span> you need it, <span>when</span> you need it.
        </h1>
        <div className={styles.descriptionText}>
          You need trucks and need them quickly. We deliver them in seven to ten
          days nationwide, sometimes even the next day.
        </div>
        <Button text="browse our vehicle lineup" href="/vehicle-lineup" />
      </div>
      <div className={styles.carContainer}>
        <Image
          src={`/sharp-innovations-assessment/homeCar1.svg`}
          height={500}
          width={700}
          layout="responsive"
          alt="car 1"
        ></Image>
        <Image
          src={`/sharp-innovations-assessment/homeCar2.svg`}
          height={500}
          width={900}
          layout="responsive"
          alt="car 2"
        ></Image>
      </div>
    </div>
  );
};

export default IntroView;
