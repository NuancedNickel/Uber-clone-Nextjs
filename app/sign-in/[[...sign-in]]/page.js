import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
 
export default function Page() {
  return (
    <>
    <div className="flex">
    <Image
          src="/uberimage.webp"
          width={950}
          height={900}
          alt="Uber Image"
          className="object-cover"
        />

      <div className= "absolute top-40 right-10" >
      <SignIn />
      </div>

    </div>
    </>
  );
}