import Container from "../components/container";
import Image from "next/image";
import Link from 'next/link';


function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
             Hi, I'm Ed, an explorer passionate about Earth's diverse cultures, science, technology,
            and creativity. I aim to share experiences and insights
            that connect with fellow adventurers and curious minds.
          </h1>
          <p>This blog is my way to clear my head and share my adventures
            as I explore our amazing planet.</p>
        

          <p>I might write in Spanish, English, and possibly some gibberish.
          </p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;
