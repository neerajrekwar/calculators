import Link from "next/link";
import { BackgroundLinesDemo } from "./components/BackgroundLines";
import Image from "next/image";



export default function Home() {
  return (
    <main className="pt-16 text-ts bg-primary">
      <section id="home" className="min-h-screen text-tPrimary bg-third">
        <BackgroundLinesDemo />
      </section>
      <section className="min-h-screen flex md:flex-row flex-col justify-center items-center p-2 gap-4 max-w-6xl m-auto">
        <div className="basis-1/2">
          <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">Welllite: BMI Calculator – Made Easy</h2>
          <p className="text-base text-ts">Welllite your make accurate your Body Mass Index (BMI) is a key number that tells you if you're in a healthy weight range. Whether you want to <strong className="text-accent font-normal"><a href="/home">check your progress</a></strong> on a fitness journey or get a quick health overview, understanding your BMI is the first step.</p>

        </div>
        <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">

          <Image
            className="bg-"
            src={'/1.svg'}
            width={250}
            height={250}
            alt="willlite add"
          />
        </div>
      </section>
      <section className="min-h-screen flex md:flex-row-reverse flex-col justify-center items-center p-2 gap-4 max-w-6xl m-auto">
        <div className="basis-1/2">
          <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">How is BMI calculated and what does it mean?</h2>
          <p className="text-base text-ts">Welllite, a simple yet powerful tool, offers a glimpse into your health. Calculated by dividing weight by height squared, it estimates body fat percentage. A high BMI signals potential health risks, while a low one might indicate underweight. However, remember, BMI is just one piece of the puzzle. Consult a healthcare professional for a comprehensive assessment.</p>

        </div>
        <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">

          <Image
            className="bg-"
            src={'/2.svg'}
            width={250}
            height={250}
            alt="willlite add"
          />
        </div>
      </section>
      <section className="min-h-screen flex md:flex-row flex-col justify-center items-center p-2 gap-4 max-w-6xl m-auto">
        <div className="basis-1/2">
          <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">Is BMI a good measure of health?</h2>
          <p className="text-base text-ts">While BMI is a quick estimate of body fat, it's not a perfect health indicator. It doesn't account for muscle mass, bone density, or body composition. Athletes or people with muscular builds might be misclassified. For a more comprehensive picture, consult a healthcare professional and consider factors like waist circumference and overall health markers.</p>

        </div>
        <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">
          <Image
            className="bg-"
            src={'/3.svg'}
            width={250}
            height={250}
            alt="willlite add"
          />
        </div>
      </section>
      <section className="min-h-screen flex md:flex-row-reverse flex-col justify-center items-center p-2 gap-4 max-w-6xl m-auto">
        <div className="basis-1/2">
          <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">What is a healthy BMI range?</h2>
          <p className="text-base text-ts">A healthy BMI range typically falls between 18.5 and 24.9. However, these numbers are general guidelines and may vary based on individual factors. It's essential to consult with a healthcare provider to determine your specific BMI range and discuss any concerns or questions you may have.</p>

        </div>
        <div className="basis-1/2 border aspect-video flex justify-center items-center border-muted p-3 rounded-lg ">

          <Image
            className="bg-"
            src={'/Tennis-bro.svg'}
            width={250}
            height={250}
            alt="willlite add"
          />
        </div>
      </section>
      <section className="min-h-screen flex md:flex-row flex-col justify-center items-center p-2 gap-4 max-w-6xl m-auto">
        <div className="basis-1/2">
          <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">Does BMI vary by age, gender, or body type?</h2>
          <p className="text-base text-ts">BMI can vary slightly by age, gender, and body type. For Welllite, children and older adults may have different BMI ranges compared to adults. Additionally, individuals with muscular builds might have a higher BMI due to increased muscle mass. It's important to consider these factors when interpreting your BMI and consulting with a healthcare professional for personalized guidance.</p>

        </div>
        <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">

          <Image
            className="bg-"
            src={'/4.svg'}
            width={250}
            height={250}
            alt="willlite add"
          />
        </div>
      </section>
      <section className="min-h-screen flex md:flex-row-reverse flex-col justify-center items-center p-2 gap-4 max-w-6xl m-auto">
        <div className="basis-1/2">
          <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">How often should I check my BMI?</h2>
          <p className="text-base text-ts">It's recommended to check your BMI periodically, such as once or twice a year. This can help you track changes in your body composition and identify any potential health concerns early on. However, it's important to consult with a healthcare professional for personalized guidance and to discuss any specific factors that may influence your BMI.</p>

        </div>
        <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">

          <Image
            className="bg-"
            src={'/7.svg'}
            width={250}
            height={250}
            alt="willlite add"
          />
        </div>
      </section>
    </main>
  );
}
