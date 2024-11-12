import Image from 'next/image';
import styles from './lineup-list.module.scss';

type VehicleProps = {
  image: string;
  title: string;
  maxTowingFeatures: string;
  payload: string;
  safetyFeatures: string;
  engineTransmission: string;
  fuel: string;
};

const Vehicle = (props: VehicleProps) => {
  return (
    <div className={styles.vehicleContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={props.image}
          className={styles.image}
          width={100}
          height={100}
          layout="responsive"
          alt="vehicle"
        />
      </div>
      <h1 className={styles.title}>{props.title}</h1>
      <hr />
      <div className={styles.detail}>
        <p className={styles.detailTitle}>Max. Towing & Features:</p>
        <span>{props.maxTowingFeatures}</span>
      </div>
      <hr />

      <div className={styles.detail}>
        <span className={styles.detailTitle}>Max. Payload: </span>
        <span>{props.payload}</span>
      </div>
      <hr />

      <div className={styles.detail}>
        <p className={styles.detailTitle}>Safety Features</p>
        <span>{props.safetyFeatures}</span>
      </div>
      <hr />

      <div className={styles.detail}>
        <p className={styles.detailTitle}>Engine & Transmission</p>
        <span>{props.engineTransmission}</span>
      </div>
      <hr />

      <div className={styles.detail}>
        <span className={styles.detailTitle}>Fuel: </span>
        <span>{props.fuel}</span>
      </div>
    </div>
  );
};

type Props = {
  vehicleList: VehicleProps[];
};

const LineupList = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.vehicleList.map((v) => (
        <Vehicle {...v} key={v.title} />
      ))}
    </div>
  );
};

export default LineupList;
