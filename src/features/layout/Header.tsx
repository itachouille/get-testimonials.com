import Image from "next/image";
import { LoggedInButton } from "../auth/LoggedInButton";
import { Layout } from "@/components/layout";
import { ModeToggle } from "../theme/ModeToggle";

export const Header = async () => {
  return (
    <header className="w-full border-b border-border py-2">
      <Layout className="flex flex-row items-center gap-4 py-0 ">
        <div className="flex-1">
          <Image
            src="/icon.png"
            width={32}
            height={32}
            alt="get-testimonials.com logo"
          />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  );
};
