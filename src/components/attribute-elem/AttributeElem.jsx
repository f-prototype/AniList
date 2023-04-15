import styles from './AttributeElems.module.css';
export const AttributeElem = ({ name, info }) => {
  return (
    <div className={styles.attributeElem}>
      <div className={styles.status}>{name}:</div>
      <div className={styles.statusInfo}>{info}</div>
    </div>
  );
};
