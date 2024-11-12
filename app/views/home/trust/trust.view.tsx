import styles from './trust.module.scss';
import Image from 'next/image';

type AdvantageItemProps = {
  image: string;
  text: string;
};
const TrustItem = (props: AdvantageItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={'/sharp-innovations-assessment/' + props.image}
          width={250}
          height={120}
          alt="trust"
          layout="responsive"
        ></Image>
      </div>
      <div className={styles.textContainer}>{props.text}</div>
    </div>
  );
};

const Trust = () => {
  const trustItemData = [
    {
      text: 'wind',
      image: '/windImg.svg',
    },
    {
      text: 'wind',
      image: '/windImg.svg',
    },
    {
      text: 'wind',
      image: '/windImg.svg',
    },
    {
      text: 'wind',
      image: '/windImg.svg',
    },
    {
      text: 'wind',
      image: '/windImg.svg',
    },
    {
      text: 'wind',
      image: '/windImg.svg',
    },
    {
      text: 'wind',
      image: '/windImg.svg',
    },
    {
      text: 'wind',
      image: '/windImg.svg',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>trusted providers for many industries</h1>
        <p className={styles.description}>
          We provide truck rental services that help customers across multiple
          sectors get their work done. Whether that's hauling debris away from a
          construction site, delivering crews to remote renewable power projects
          or carrying equipment for telecom maintenance, we have the truck
          rental solutions for the job. If you have a short-term need for
          vehicles that can conquer virtually any terrain, you can turn to us
          for convenient 4x4 truck rental service that fits your needs and your
          budget.
        </p>
      </div>
      <div className={styles.items}>
        {trustItemData.map((item, i) => {
          return <TrustItem {...item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Trust;
