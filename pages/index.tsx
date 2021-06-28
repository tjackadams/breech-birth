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

type IndexProps = {
  title: string;
  description: string;
};
const Index = ({
  title,
  description,
  frontmatter,
  markdownBody,
  ...props
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <SocialIconBar />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <main>
                <article>
                  <div className="row justify-content-center postcontent">
                    <div className="col-12">
                      <PostMeta {...frontmatter} />
                      <ReactMarkdown
                        remarkPlugins={[remarkExternalLinks]}
                        rehypePlugins={[
                          [addClasses, { blockquote: "blockquote" }],
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
      frontmatter: document.data,
      markdownBody: document.content,
    },
  };
};
