import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry, we could`&apos;`nt find the page you`&apos;`re looking for.</p>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
