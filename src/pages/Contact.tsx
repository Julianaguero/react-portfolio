import { motion, useScroll, useTransform } from "framer-motion";
import { FooterLinks, Header } from "../components";
import CVFRONT from "../assets/files/FRONT_EN_-_CV_Julian_Aguero.pdf";
import { colors, contactLinks } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { Helmet } from "react-helmet-async";

const ContactView = () => {
  const { scrollY } = useScroll();
  const { ref } = useSectionInView("Contact", 0.5);

  // Dividimos el scrollY en secciones para cada color
  const backgroundColor = useTransform(
    scrollY,
    colors.map((_, i) => i * window.innerHeight), // Cada sección corresponde a la altura de la ventana
    colors
  );

  return (
    <>
      <Helmet>
        <title>Contact | Julian Aguero</title>
        <meta
          name="description"
          content="Here you have all my contact links, reach me out."
        />
        <link rel="canonical" href="https://julianaguero.netlify.app/contact" />
      </Helmet>
      <main
        ref={ref}
        id="contact"
        className="relative h-[2000vh] overflow-hidden scrollbar-hide"
      >
        {/* Este div maneja el color de fondo */}
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor,
            zIndex: -1,
          }}
        />
        <div className="fixed top-0 w-full h-screen flex flex-col items-center ">
          <Header />
          <div className="w-full px-[30px] pt-40 md:48 lg:pt-40 pb-2 h-screen  lg:h-screen flex flex-col justify-between lg:justify-end">
            <div className="my-auto  ">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ stiffness: 80, delay: 0.02 }}
                className="flex flex-row flex-wrap justify-between items-center  leading-none bg-transparent"
              >
                <div className="font-medium cursor-default ">SCROLL</div>
                <a href={CVFRONT} download className="font-small md:mr-40">
                  GET MY CV
                </a>
              </motion.div>
              <div className="flex flex-col justify-center mb-20 ">
                <p className="font-small">contact me on</p>
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ stiffness: 120, delay: 0.04 * i }}
                    href={link.link}
                    target="_blank"
                    className="font-medium hover:text-white leading-[0.9]"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
            <FooterLinks />
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactView;
