import ProfileCard from "@/components/ProfileCard";

export default function Landing() {
  return (
    <main className="min-h-screen bg-black px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center pt-[18vh] sm:pt-[22vh] gap-10">
          <h1 className="text-3xl tracking-wide text-white sm:text-4xl md:text-6xl">
            Who’s watching?
          </h1>

          <div
            className="
              grid w-full max-w-4xl grid-cols-1 gap-6
              sm:grid-cols-2 sm:gap-8
              place-items-center
            "
          >
            <div className="w-full max-w-[320px] sm:max-w-none">
              <ProfileCard
                label="Recruiter"
                imageSrc="/posters/gojo.jpg"
                href="/recruiter"
              />
            </div>

            <div className="w-full max-w-[320px] sm:max-w-none">
              <ProfileCard
                label="Explorer?"
                imageSrc="/posters/sadaharu.JPG"
                objectPosition="object-[50%_20%]"
                href="/explorer"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
