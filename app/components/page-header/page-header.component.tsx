import styles from './page-header.module.scss';

type Props = {
  backgroundImage: string;
  title: string;
  subTitle: string;
};

const PageHeader = (props: Props) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${
          '/sharp-innovations-assessment/' + props.backgroundImage
        })`,
      }}
    >
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subTitle}>{props.subTitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
``;
