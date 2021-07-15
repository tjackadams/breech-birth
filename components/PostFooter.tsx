import Image from "next/image";
import authorImage from "../public/faye_author.jpg";

const PostFooter = ({}) => {
  return (
    <>
      <div className="row justify-content-center"></div>
      <div style={{ clear: "both", paddingBottom: "10px" }}></div>
      <div
        style={{
          margin: "30px 0",
          padding: "24px 0",
          borderTop: "1px #A6A6A6 solid",
        }}
      >
        <div style={{ float: "left", marginRight: "20px" }}>
          <Image
            src={authorImage}
            alt="Photo of the post author"
            width={96}
            height={96}
            priority={true}
            className="avatar"
          ></Image>
        </div>
        <p className="h5">Faye</p>
        <div>
          <p></p>
          <p>
            <strong>Follow</strong>
            <a
              className="no-underline stayinformed"
              aria-label="Faye Twitter profile"
              target="_blank"
              href="https://twitter.com/faye_tomkins"
              rel="nofollow noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </p>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    </>
  );
};

export default PostFooter;
