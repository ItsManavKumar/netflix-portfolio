import ProfileCard from "@/components/ProfileCard";

export default function Landing() {
  return (
    <main className="min-h-screen bg-black px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center pt-[18vh] sm:pt-[22vh] gap-10">
          <h1 className="text-3xl tracking-wide text-white sm:text-4xl md:text-6xl">
            Who’s watching?
          </h1>

          <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            <ProfileCard label="Recruiter" imageSrc="/posters/gojo.jpg" href="/recruiter" />
            <ProfileCard label="Developer" imageSrc="/posters/gon.jpg" objectPosition="object-[50%_80%]" href="/developer" />
            <ProfileCard label="Explorer" imageSrc="/posters/levi.jpg" objectPosition="object-[50%_80%]" href="/explorer" />
            <ProfileCard label="Curious" imageSrc="/posters/sadaharu.jpg" objectPosition="object-[50%_20%]" href="/curious" />
          </div>
        </div>
      </div>
    </main>
  );
}
