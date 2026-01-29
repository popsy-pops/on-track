import Link from "next/link";

const page = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1>on track</h1>
        <p>see your goals achievement on calendar, manage efficiently and get challenging <span>TODO</span>s every day</p>
        <div className="flex items-center gap-2 justify-start">
          <Link href="/account/signin" className="px-4 py-1.5 border">signin</Link>
          <Link href="/account/signup" className="px-4 py-1.5 border">singup</Link>
        </div>
      </div>
    </div>
  );
};
export default page;
