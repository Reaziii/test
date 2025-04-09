import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import Link from "./ui/Link";
const Header = () => {
  const isLoggedIn = false;
  return (
    <nav className="bg-background py-4 px-6 border-b border-border-500 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/">
          <div className="text-2xl font-bold text-forground-800 tracking-tight">
            P2PShare
          </div>
        </a>
        <div className="space-x-6 text-sm flex items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Contact</Link>
          {isLoggedIn ? (
            <Avatar>
              <AvatarImage
                src="https://avatar.iran.liara.run/public"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <a href="/signin">
              <Button>Sign in</Button>
            </a>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Header;
