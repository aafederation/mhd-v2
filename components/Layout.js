import { HeadMatter } from "./HeadMatter";
import { TopBar } from "./TopBar";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    // <div
    //   style={{
    //     margin: "3rem",
    //   }}
    // >
    //   <Head>
    //     <title>Tina App</title>
    //     <meta name="description" content="A TinaCMS Application" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <header>
    //     <Link href="/">
    //       <a>Home</a>
    //     </Link>
    //     {" | "}
    //     <Link href="/posts">
    //       <a>Posts</a>
    //     </Link>
    //   </header>
    //   <main>{props.children}</main>
    // </div>
    <>
      <HeadMatter />
      <TopBar />
      <Menu />
      {children}
      <Footer />
    </>
  );
};
