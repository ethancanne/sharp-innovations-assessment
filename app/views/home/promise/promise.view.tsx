import Button from '@/app/components/button/button.component';
import styles from './promise.module.scss';
import Image from 'next/image';

type Props = {};

const Promise = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>our promise to you</h1>
        <p className={styles.description}>
          We are committed to providing the highest level of service you can
          find. Every day, every vehicle, every job. When you turn to us for
          fleet truck rental service, you’ll find a true partner in every sense
          of the word. We know that our 4×4 trucks are more than just vehicles –
          they’re essential tools that enable you and your crew to fulfill the
          promises you make to your customers. That’s why we go above and beyond
          what’s expected to deliver commercial truck rentals that provide you
          with maximum value. We will ensure that you have exactly what the job
          calls for, exactly when it needs to be there and without the strings
          attached by other providers.
        </p>
        <div className={styles.buttonContainer}>
          <Button text="About us" href="about-us" />
        </div>
      </div>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: 'url(/sharp-innovations-assessment/promiseCar.jpg)',
        }}
      ></div>
    </div>
  );
};

export default Promise;
