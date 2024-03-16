import Image from "next/image";
import { LoggedInButton } from "../auth/LoggedInButton";

export const Header = async () => {
  return (
    <header className="w-full border-b border-border py-2">
    <div className="flex items-center gap-4">
        <div className="flex-1">
           <Image
        src="/icon.png"
        width={32}
        height={32}
        alt="get-testimonials.com logo"
      />   
        </div>
        <div>
          <LoggedInButton />   
        </div>
    </div>
    </header>
  );
};
