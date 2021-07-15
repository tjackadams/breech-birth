type SocialIconBarProps = {
  currentUrl: string;
};

const SocialIconBar = ({ currentUrl }: SocialIconBarProps) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}`;

  return (
    <div className="social-icon-bar">
      <a
        href={shareUrl}
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
