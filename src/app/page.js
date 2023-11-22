import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my Next.js app!</p>
      <br />
      <Link href='/aboutus' legacyBehavior>
        <a>About us</a>
      </Link>
      <br />
      <Link href="/aboutus/1" legacyBehavior>
        <a>About Yash</a>
      </Link>
      <br />
      <Link href="/aboutus/2" legacyBehavior>
        <a>About Vaibhav</a>
      </Link>
      <br />
      <Link href="/aboutus/3" legacyBehavior>
        <a>About Suresh</a>
      </Link>
      <br />
      <br />

     
    </div>
  );
};

export default HomePage;
