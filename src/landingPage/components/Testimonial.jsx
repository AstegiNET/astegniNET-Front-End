
export default function Testimonial() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-md font-light leading-8 text-gray-500 sm:text-2xl sm:leading-9">
              <p>
              “I love your services. It helps me so much when I am not able to get help at home with homework. All of the tutors that I have had are great and are so helpful! AstegniNET is the best tutoring website I have ever used.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-50 w-50 rounded-full"
                src="https://media.licdn.com/dms/image/D4E03AQEAyW8xE536LA/profile-displayphoto-shrink_200_200/0/1686160438163?e=1692835200&v=beta&t=642zKHXSc_WNg65iCQYJvTEC4tVhFm87oZf0e84agpg"
                alt="user prifile"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Hana Girma</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Grade 12 student</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  