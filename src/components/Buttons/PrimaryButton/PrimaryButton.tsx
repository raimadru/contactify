import styles from './PrimaryButton.module.scss';

interface IPrimaryButton {
  label: string;
  onClick?: () => void;
}
export const PrimaryButton = ({ label, onClick }: IPrimaryButton) => {
  return (
    <button onClick={onClick} className={styles.main}>
      {label}
    </button>
  );
};
