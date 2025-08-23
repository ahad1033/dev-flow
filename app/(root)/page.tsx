import Link from "next/link";
// import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

import ROUTES from "@/constants/route";
import LocalSearch from "@/components/search/LocalSearch";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const HomePage = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  // const filteredQuestions = questions.filter((question) => question.includes(query?.toLowerCase()))
  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>

        <Button
          asChild
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>

      <section className="mt-11">
        <LocalSearch
          route="/"
          otherClasses="flex-1"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
        />
      </section>

      <div className="mt-10 flex w-full flex-col gap-6">
        <h1>question card</h1>
      </div>
    </>
  );
};

export default HomePage;
