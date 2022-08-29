import { Footer } from "../components/Footer";
import { UserForm } from "../components/UserForm";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";

export function Register() {
  const [hasScroolbar, setHasScroolbar] = useState<boolean>()

  useEffect(() => {
    const updateWindow = () => {
      if ((document.documentElement.offsetHeight + 61) > window.innerHeight) {
        setHasScroolbar(true)
      } else {
        setHasScroolbar(false)
      }
    };
    updateWindow()
    window.addEventListener("resize", updateWindow);
    return () => window.removeEventListener("resize", updateWindow)
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="lg:mt-28 mt-24 mb-6">
        <UserForm isRegister />
      </section>
      <footer className={`w-full ${hasScroolbar ? 'static' : 'bottom-0 absolute'}`}>
        <Footer />
      </footer>
    </>
  )
}