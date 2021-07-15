import styles from "../styles/Index.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import clsx from "clsx";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import PostMeta from "@components/PostMeta";
import PostFooter from "@components/PostFooter";
import SocialIconBar from "@components/SocialIconBar";
import remarkExternalLinks from "remark-external-links";
import path from "path";
import { promises as fs } from "fs";
import addClasses from "rehype-add-classes";
import gfm from "remark-gfm";
import slug from "rehype-slug";
import link from "rehype-autolink-headings";
import toc from "@jsdevtools/rehype-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

const Index = ({
  title,
  description,
  url,
  frontmatter,
  markdownBody,
  ...props
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const featuredImageUrl = `${url}${frontmatter.featured_image}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@faye_tomkins"></meta>
        <meta name="twitter:creator" content="@faye_tomkins"></meta>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={featuredImageUrl} />
      </Head>
      <SocialIconBar currentUrl={url} />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <main>
                <article className="markdown-body">
                  <div className="row justify-content-center postcontent">
                    <div className="col-12">
                      <PostMeta {...frontmatter} />
                      <ReactMarkdown
                        remarkPlugins={[remarkExternalLinks, gfm]}
                        rehypePlugins={[
                          [slug, { fragment: true }],
                          [
                            addClasses,
                            {
                              blockquote: "blockquote text-center mt-5 mb-5",
                              table: "table table-hover text-center",
                            },
                          ],
                          [
                            link,
                            {
                              content: {
                                type: "element",
                                tagName: "i",
                                properties: {
                                  className: ["bi", "bi-link-45deg"],
                                },
                                children: [],
                              },
                              properties: {
                                className: ["anchor"],
                                ariaHidden: true,
                                tabIndex: -1,
                              },
                            },
                          ],
                          [toc],
                          [rehypeAccessibleEmojis],
                        ]}
                      >
                        {markdownBody}
                      </ReactMarkdown>
                      <PostFooter {...frontmatter} />
                    </div>
                  </div>
                  <footer></footer>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const configData = await import(`../siteconfig.json`);

  const postsDirectory = path.join(process.cwd(), "posts");
  const filename = (await fs.readdir(postsDirectory))[0];
  const filePath = path.join(postsDirectory, filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  const document = matter(fileContents);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      url: configData.default.url,
      frontmatter: document.data,
      markdownBody: document.content,
    },
  };
};
