import styles from "../styles/PostMeta.module.css";

import Image from "next/image";
import authorImage from "../public/faye_author.jpg";
import clsx from "clsx";

type Props = {
  title: string;
  author: string;
  published_date: string;
};

const PostMeta = ({ title, author, published_date, ...props }: Props) => {
  return (
    <>
      <h1 className={styles["entry-title"]}>{title}</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div style={{ margin: "20px", textAlign: "center" }}>
            <Image
              src={authorImage}
              alt="Photo of the post author"
              width={58}
              height={58}
              priority={true}
              className="avatar"
            ></Image>
            <p style={{ fontSize: "20px" }}>{author}</p>
          </div>
        </div>
      </div>
      <div style={{ clear: "both", paddingBottom: "10px" }}></div>
      <div
        className={clsx({
          [styles["entry-meta"]]: true,
          [styles["entry-meta-layout"]]: true,
        })}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#616161",
          }}
        >
          {published_date}
        </p>
      </div>
      <div
        className={clsx({
          [styles["social-icon-bar-mobile"]]: true,
          row: true,
          "justify-content-center": true,
        })}
      >
        <a
          href="http://"
          target="_blank"
          title="Share on Twitter"
          rel="noopener noreferrer nofollow"
          className="twitter"
        >
          <i className="bi bi-twitter"></i>
        </a>
      </div>
    </>
  );
};

export default PostMeta;
