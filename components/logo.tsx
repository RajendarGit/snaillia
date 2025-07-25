import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white tracking-wide">
        snaillia
      </h1>
    </Link>
  );
};

export default Logo;
