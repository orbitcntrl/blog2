import Container from "../components/container";
import Image from "next/image";
import Link from 'next/link';


function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hi, I'm Ed—an explorer driven by a passion for Earth's diverse cultures, science, technology, and creativity. 
            I share experiences and insights to connect with fellow adventurers and curious minds.
            This blog is my space to clear my head and document my journey as I explore our incredible planet.
          </h1>
          <p></p>
        

          <p>
          </p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/IMG_1044.JPEG"
          alt="IMG_1044.JPEG"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;
