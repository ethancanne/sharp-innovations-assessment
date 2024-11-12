import Button from '@/app/components/button/button.component';
import styles from './advantage.module.scss';
import { FaCalendarDays } from 'react-icons/fa6';
import { PiShieldCheckFill } from 'react-icons/pi';
import { TbArrowLeftRight } from 'react-icons/tb';

type AdvantageItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const AdvantageItem = (props: AdvantageItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemIcon}>{props.icon}</div>
      <div className={styles.itemDetails}>
        <h1 className={styles.itemTitle}>{props.title}</h1>
        <p className={styles.itemDescription}>{props.description}</p>
      </div>
    </div>
  );
};

const Advantage = () => {
  const advantageItemData = [
    {
      icon: <FaCalendarDays />,
      title: '7-10 day delivery nationwide',
      description:
        "You'll get the trucks you need to the right jobsite in under a week.",
    },
    {
      icon: <PiShieldCheckFill />,
      title: 'wear and tear forgiveness',
      description:
        "You won't be penalized for using our trucks to get the job done.",
    },
    {
      icon: <TbArrowLeftRight />,
      title: 'more flexibility',
      description:
        'Adjust the size of your fleet to meet the demands of your business.',
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>the express 4x4 advantage</h1>
      <div className={styles.items}>
        {advantageItemData.map((item, i) => {
          return <AdvantageItem {...item} key={i} />;
        })}
      </div>
      <Button text="Rent Trucks Now" href="/vehicle-lineup" />
    </div>
  );
};

export default Advantage;
