import {
  CaretDown,
  CaretLeft,
  CheckCircle,
} from "phosphor-react";
import { Footer } from "../components/Footer";
import { LinksProps, Navbar } from "../components/Navbar";
import SupherPets from "../assets/supherpets.png";

import Form from "../assets/pet-form.png";
import PetShop from "../assets/kit.png";
import Calendar from "../assets/calendar.png";
import Local from "../assets/local.jpeg";

import Yo from "../assets/yo.png";
import Giu from "../assets/giu.png";
import Ju from "../assets/ju.png";
import Rob from "../assets/rob.png";

import { ButtonNavbar } from "../components/Buttons/ButtonNavbar";
import useCollapse from "react-collapsed";
import { ContactForm } from "../components/Forms/ContactForm";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface AboutItemProps {
  title: string;
  text: string;
  icon: ReactElement;
}

interface DeveloperProps {
  name: string;
  descrption: string;
  image: ReactElement;
}

interface CollapseProps {
  question: string;
  response: string;
  number: string;
}

function AboutItem({ title, text, icon }: AboutItemProps) {
  return (
    <div className="flex md:flex-col flex-row items-center md:w-52 w-full gap-4 md:mt-10 mt-4">
      {icon}
      <div className="flex flex-col md:items-center items-start md:w-40 w-full gap-4">
        <p className=" text-cyan-900 lg:text-xl text-lg font-bold md:text-center text-left">
          {title}
        </p>
        <div className="md:w-52 w-full">
          <p className="text-zinc-600 lg:text-lg text-base md:text-center text-left">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function CollapsibleFaq({ question, response, number }: CollapseProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible w-full flex flex-col">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-row items-center gap-3 lg:gap-8">
          <div className="lg:w-16 lg:h-16 w-8 h-8 p-4 bg-green-400 rounded-full flex justify-center items-center shadow-lg">
            <p className="text-2xl text-bold text-yellow-50">{number}</p>
          </div>
          <p className="lg:text-xl text-lg text-zinc-800">{question}</p>
        </div>
        <div className="header" {...getToggleProps()}>
          {isExpanded ? (
            <CaretDown size={44} color="#b0b0b0" weight="fill" />
          ) : (
            <CaretLeft size={44} color="#b0b0b0" weight="fill" />
          )}
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <p className="lg:text-xl text-lg p-8 md:ml-20 my-4 text-zinc-600 bg-zinc-200 rounded-3xl">
            {response}
          </p>
        </div>
      </div>
    </div>
  );
}

function DeveloperItem({ name, descrption, image }: DeveloperProps) {
  return (
    <div className="border-zinc-400 border-2 h-fit w-full rounded-3xl flex flex-row p-6 items-center justify-between">
      <div className="gap-4 pl-5">
        <p className="lg:text-xl font-bold text-zinc-800">{name}</p>
        <p className="text-lg text-red-600">{descrption}</p>
      </div>
      <div>{image}</div>
    </div>
  );
}

export function Home() {
  const { t } = useTranslation();

  let ancors: LinksProps[];
  ancors = [
    { link: "#sobre", label: t('home.about') },
    { link: "#aos-hemocentros", label: t('home.toBloodCenters') },
    { link: "#faq", label: "FAQ" },
    { link: "#quem-somos", label: t('home.whoWeAre') },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar links={ancors}>
          <div className="py-2 items-end bottom-0 flex lg:flex-row flex-col lg:gap-8 w-full lg:w-fit">
            <ButtonNavbar
              type="button"
              label={t('buttons.register')}
              path="/register"
              role="secondary"
            />
            <ButtonNavbar
              type="button"
              label={t('buttons.login')}
              path="/login"
              role="primary"
            />
          </div>
        </Navbar>
      </header>
      <div className="lg:px-40 md:px-20 px-5 flex flex-col">
        <section
          className=" flex flex-row items-center justify-center lg:pt-28 pt-20"
          id="welcome"
        >
          <div className="flex md:flex-row justify-between flex-col-reverse">
            <div className="lg:w-3/5 w-full flex flex-col gap-3 lg:gap-0">
              <h1 className=" text-cyan-900 md:text-5xl text-xl font-bold">
                {t('home.makeYourPetAHero')}
              </h1>
              <div className="md:py-5 md:gap-2 flex flex-col">
                <p className="md:text-xl text-base mb-2 lg:mb-0">
                  {t('home.saveLivesThroughDoanation')}
                </p>
                <p className="flex flex-row gap-2 items-center md:text-xl text-base">
                  <CheckCircle
                    size={40}
                    className="text-green-400"
                    weight="fill"
                  />
                  {t('home.completeRegistration')}
                </p>
                <p className="flex flex-row gap-2 items-center md:text-xl text-base">
                  <CheckCircle
                    size={40}
                    className="text-green-400"
                    weight="fill"
                  />
                  {t('home.includePets')}
                </p>
                <p className="flex flex-row gap-2 items-center md:text-xl text-base">
                  <CheckCircle
                    size={40}
                    className="text-green-400"
                    weight="fill"
                  />
                  {t('home.searchRecievers')}
                </p>
              </div>
              <div className="lg:text-start text-center">
                <ButtonNavbar
                  label={t('buttons.register')}
                  path="/register"
                  role="primary"
                  type="button"
                />
              </div>
            </div>
            <div className="lg:w-2/5">
              <img src={SupherPets} className="w-full max-h-fit mt-4" />
            </div>
          </div>
        </section>

        <section className="flex flex-col pt-20 gap-6" id="sobre">
          <div className="flex flex-col items-center">
            <p className="md:text-4xl text-xl font-bold text-zinc-800 pb-4">
              {t('home.about')}
            </p>
            <p className="text-base md:w-3/5 w-full md:text-center text-justify md:text-xl">
              {t('home.aboutMessage')}
            </p>
          </div>
          <div className="md:pt-16 flex flex-col items-center">
            <p className="lg:text-xl font-bold text-zinc-400">{t('home.howItWorks')}</p>
            <p className="lg:text-4xl font-bold text-zinc-800">
              {t('home.features')}
            </p>
            <div className="flex md:flex-row flex-col justify-center items-center md:items-start lg:gap-40 gap-6">
              <AboutItem
                title={t('home.featurePets')}
                text={t('home.featurePetsMessage')}
                icon={
                  <img src={Form} className="lg:w-40 w-24 p-1 max-h-fit " />
                }
              />
              <AboutItem
                title={t('home.featureAppointments')}
                text={t('home.featureAppointmentsMessage')}
                icon={
                  <img src={Calendar} className="lg:w-40 w-24 p-1 max-h-fit" />
                }
              />
              <AboutItem
                title={t('home.featureBloodCenters')}
                text={t('home.featureBloodCentersMessage')}
                icon={
                  <img src={Local} className="lg:w-40 w-24 max-h-fit " />
                }
              />
            </div>
          </div>
        </section>

        <section className="pt-20" id="aos-hemocentros">
          <div className="md:py-16 md:px-10 lg:px-20 lg:gap-20 px-4 py-5 flex lg:flex-row justify-center items-center flex-col-reverse bg-white shadow rounded-3xl">
            <div className="w-full flex flex-col gap-4">
              <p className="lg:text-xl font-bold text-zinc-600">
                {t('home.toBloodCenters')}
              </p>
              <p className="lg:text-4xl text-xl font-bold text-zinc-800">
                {t('home.bloodCentersSubtitle')}
              </p>
              <p className="text-base text-justify">
                {t('home.toBloodCentersMessage')}
              </p>
              <div className="lg:text-start text-center">
                <ButtonNavbar
                  label={t('buttons.register')}
                  path="/register"
                  role="primary"
                  type="button"
                />
              </div>
            </div>
            <div className="items-center justify-center lg:items-end lg:justify-end text-center flex">
              <img src={PetShop} className="w-56 max-h-fit" />
            </div>
          </div>
        </section>

        <section
          className="lg:px-20 px-2 flex items-start flex-col pt-20"
          id="faq"
        >
          <p className="lg:text-xl font-bold text-zinc-600">FAQ</p>
          <p className="lg:text-4xl text-xl font-bold text-red-600">
            {t('home.frequentlyQuestions')}
          </p>
          <div className="flex flex-col w-full gap-4 mt-5">
            <CollapsibleFaq
              question={t('home.questions.allPetsCanDonate')}
              response={t('home.questions.allPetsCanDonateResponse')}
              number="1"
            />
            <CollapsibleFaq
              question={t('home.questions.benefits')}
              response={t('home.questions.benefitsResponse')}
              number="2"
            />
            <CollapsibleFaq
              question={t('home.questions.canMyPetDonate')}
              response={t('home.questions.canMyPetDonateResponse')}
              number="3"
            />
            <CollapsibleFaq
              question={t('home.questions.risks')}
              response={t('home.questions.risksResponse')}
              number="4"
            />
            <CollapsibleFaq
              question={t('home.questions.bloodTypes')}
              response={t('home.questions.bloodTypesReponse')}
              number="5"
            />
            <CollapsibleFaq
              question={t('home.questions.donationInterval')}
              response={t('home.questions.donationIntervalResponse')}
              number="6"
            />
            <CollapsibleFaq
              question={t('home.questions.amountOfBlood')}
              response={t('home.questions.amountOfBloodResponse')}
              number="7"
            />
            <CollapsibleFaq
              question={t('home.questions.whereToDonate')}
              response={t('home.questions.whereToDonateResponse')}
              number="8"
            />
          </div>
        </section>

        <section className="pt-20" id="quem-somos">
          <div className="lg:py-16 md:px-10 lg:px-20 py-5 px-4 flex items-start flex-col bg-white shadow rounded-3xl">
            <p className="lg:text-xl font-bold text-zinc-600">{t('home.whoWeAre')}</p>
            <p className="lg:text-4xl text-xl font-bold text-zinc-800">
              {t('home.meetTheCreators')}
            </p>
            <div className="mt-4 lg:w-full w-full grid lg:grid-cols-2 grid-cols-1 justify-center md:gap-8 gap-4">
              <DeveloperItem
                name="Giuliana Missio"
                descrption="Web Developer, 20 anos"
                image={<img src={Giu} className="w-20 max-h-fit" />}
              />
              <DeveloperItem
                name="Yolanda Ferreira"
                descrption="Web Developer, 20 anos"
                image={<img src={Yo} className="w-20 max-h-fit" />}
              />
              <DeveloperItem
                name="Julia Romani"
                descrption="Web Developer, 20 anos"
                image={<img src={Ju} className="w-20 max-h-fit" />}
              />
              <DeveloperItem
                name="Robson dos Anjos"
                descrption="Web Developer, 21 anos"
                image={<img src={Rob} className="w-20 max-h-fit" />}
              />
            </div>
          </div>
        </section>

        <section
          className="flex flex-col w-full items-end md:pr-20 pt-20"
          id="contato"
        >
          <ContactForm />
        </section>
      </div>
      <footer className="mt-8 bottom-0 w-full">
        <Footer links={ancors} />
      </footer>
    </div>
  );
}
