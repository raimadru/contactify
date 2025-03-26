import styles from './Header.module.scss';

interface IHeader {
  label: string;
}
export const Header = ({ label }: IHeader) => {
  return <span className={styles.header}>{label}</span>;
};
