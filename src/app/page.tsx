import Button from "@/components/Button";
import FeatureBlock from "@/components/FeatureBlock";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";
import PricingSection from "@/components/PricingSection";
import TestimonialCard from "@/components/TestimonialCard";
import { clients } from "@/constants/clients";
import { featuresBlock, features } from "@/constants/features";
import { testimonials } from "@/constants/testimonials";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        {/* Home section */}
        <Image
          src={"/bg.png"}
          alt="banner-bg"
          width={1920}
          height={1080}
          className="absolute -top-20 left-0 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen opacity-10 -z-50"
        />
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md">
                new features is nom available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="A CRM dashboard for engineering teams" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team&rsqo;s productivity with ocean CRM
                dashboard that stramlines projects panagement, collaboration,
                and data-driven descision-making
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  Get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href={"#/pricing"}>
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src={"/Hero-image.svg"}
              alt="hero image"
              width={670}
              height={370}
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* Home section */}

        {/* Client section */}
        <section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.imageUrl}
                alt={item.alt}
                width={120}
                height={80}
                className="w-40 md:w-full mx-auto"
              />
            );
          })}
        </section>
        {/* Client section */}

        {/* Features section */}
        <section
          id="feature"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
        >
          {/* Part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src={"/bg2.png"}
              alt="second banner"
              width={1920}
              height={1080}
              className=" absolute top-0 left-0 -z-50 w-full opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerfull features to help you manage all your leads." />
              <p className="max-w[34rem] leading-normal sm:text-lg sm:leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                esse, molestiae est nihil quae ut. Minus, id eum. Harum
                architecto! Cupiditate, officia.
              </p>
              <Button>Get started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>
          </div>
          {/* Part 1 */}

          {/* Part 2 */}
          <div className="space-y-20">
            {featuresBlock.map((item, index) => (
              <FeatureBlock key={index} {...item} />
            ))}
          </div>
          {/* Part 2 */}
        </section>
        {/* Features section */}

        {/* Pricing section */}
        <PricingSection />
        {/* Pricing section */}

        {/* Testimonials section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((item, idx) => (
              <TestimonialCard key={idx} {...item} />
            ))}
          </div>
        </section>
        {/* Testimonials section */}

        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Let's try our service now!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                esse, molestiae est nihil quae ut. Minus, id eum. Harum
                blanditiis rerum magni earum.
              </p>
            </div>
            <Button>
              get started
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        {/* Contact section */}
      </div>
    </main>
  );
}
