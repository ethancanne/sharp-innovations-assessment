import Button from '@/app/components/button/button.component';
import styles from './lineup.module.scss';
import Image from 'next/image';

type Props = {};

const LineUp = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>the lineup</h1>
        <p className={styles.description}>
          We have 4×4 crew cab trucks to handle jobs of all sizes. Our current
          lineup includes ½-ton, ¾-ton and 1-ton vehicles — all ready to face
          the challenges of your job site. These feature all-terrain tires and
          tow packages, giving them the capabilities necessary to handle the
          most demanding and challenging jobs. With payloads that can exceed
          3,600 pounds, you can tackle your project with confidence knowing that
          you’ll have the muscle to get it done.
          <br /> <br />
          Our options also come fully equipped with the latest safety features.
          These include rearview cameras, exterior back-up alarms and ABS
          brakes. When you turn to us for your commercial fleet truck rental
          service, you’ll get the safest, most capable equipment available.
        </p>
        <div className={styles.buttonContainer}>
          <Button text="See the trucks" href="/vehicle-lineup?id=1" />
        </div>
      </div>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: 'url(/sharp-innovations-assessment/lineupImage.JPG)',
        }}
      ></div>
    </div>
  );
};

export default LineUp;
