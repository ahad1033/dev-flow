import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

import ROUTES from "@/constants/route";

const HomePage = () => {
  return (
    <div>
      <h1 className="font-bold">Welcome to DevFlow</h1>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button className="px-10 pt-[100px]">Log out</Button>
      </form>
    </div>
  );
};

export default HomePage;
