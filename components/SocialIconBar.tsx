import styles from "../styles/SocialIconBar.module.css";

const SocialIconBar = ({}) => {
  return (
    <div className={styles["social-icon-bar"]}>
      <a
        href=""
        title="Share on Twitter"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="twitter"
      >
        <i className="bi bi-twitter"></i>
      </a>
    </div>
  );
};

export default SocialIconBar;
