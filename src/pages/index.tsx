import Container from "@/components/Layout/Container";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

export default function Home() {
  const { t } = useTranslation("common");
  const { user } = useCurrentUser();
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="border-b-[2px] border-l-[2px] border-r-[2px] border-gray-200 dark:border-dark-400 rounded-b-2xl pt-[100px] sticky top-[calc(-32rem)] md:top-[calc(-32rem)] px-4 -mt-[100px] background--custom">
          <div className="h-[30rem] flex items-center justify-between">
            <div>
              <h1 className="uppercase text-3xl font-bold">
                Your adventure starts here
              </h1>
              <p>{t("Welcome_home")}</p>
              {user && <div>logged as: {user.username}</div>}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 gap-x-10 gap-y-10 md:gap-y-0 mt-10">
          <div className="col-span-2 md:col-span-1">
            <div className="bg-red-100 h-96 md:h-full border rounded-2xl border-gray-200 dark:border-dark-400">
              <div className="p-4">
                <div>A propos</div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <div className="col-span-1">
                <div className="bg-blue-100 h-48 border rounded-2xl border-gray-200 dark:border-dark-400">
                  <div className="p-4">
                    <div>Info 1</div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-blue-100 h-48 border rounded-2xl border-gray-200 dark:border-dark-400">
                  <div className="p-4">
                    <div>Info 2</div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-blue-100 h-48 border rounded-2xl border-gray-200 dark:border-dark-400">
                  <div className="p-4">
                    <div>Info 3</div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-blue-100 h-48 border rounded-2xl border-gray-200 dark:border-dark-400">
                  <div className="p-4">
                    <div>Info 4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-purple-100 h-48 border rounded-2xl border-gray-200 dark:border-dark-400 mt-10">
              <div className="p-4">
                <div>Box skills</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
