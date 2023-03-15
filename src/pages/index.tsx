import Container from "@/components/Layout/Container";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <p>{t("Welcome_home")}</p>
      </Container>
    </>
  );
}
