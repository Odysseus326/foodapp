import styles from "./container.module.css";

export default function Container({ children }) {
  // Must accept the child component since it encloses it in App.jsx
  return <div className={styles.parentContainer}>{children}</div>;
}
