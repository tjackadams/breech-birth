import Image from "next/image";
import authorImage from "../public/faye_author.jpg";
import clsx from "clsx";

type Props = {
  title: string;
  author: string;
  published_date: string;
  currentUrl: string;
};

const PostMeta = ({
  title,
  author,
  published_date,
  currentUrl,
  ...props
}: Props) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}`;
  return (
    <>
      <h1 className="entry-title">{title}</h1>
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
      <div className="entry-meta entry-meta-layout">
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
      <div className="flex-row justify-content-center social-icon-bar-mobile">
        <a
          href={shareUrl}
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
