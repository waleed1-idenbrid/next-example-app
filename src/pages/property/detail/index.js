/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props.
 */
import React from "react";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/property/stickyTabOrClassic";
import Footer from "../../../layout/footers/Footer";
import NavbarTwo from "../../../layout/headers/NavbarTwo";

// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const StickyTabOrClassic = () => {
  return (
    <>
      <NavbarTwo />
      <BodyContent side={"left"} />
      <Footer />
    </>
  );
};

export default StickyTabOrClassic;
