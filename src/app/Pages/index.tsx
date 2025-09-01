import Head from "next/head";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Saurabh Karki | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Saurabh Karki - Software Developer skilled in React, Next.js, Node.js, and full-stack development."
        />
        <meta
          name="keywords"
          content="Saurabh Karki, portfolio, software developer, web developer, React, Next.js"
        />
        <meta name="author" content="Saurabh Karki" />
      </Head>

      <main>
        <h1>Hello, I'm Saurabh 👋</h1>
        <p>Software Developer | Full Stack | React | Next.js</p>
      </main>
    </>
  );
};

export default Home;
