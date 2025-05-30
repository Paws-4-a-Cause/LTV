import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8 text-[#273878]">
        {/* title */}
        <section className="text-center mb-34">
          <h1 className="text-6xl font-extrabold">Love the Voiceless</h1>
        </section>

        {/* about */}
        <section className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-5 flex items-center">
            <img
              src="/assets/dog1.avif"  // Updated path to work with public folder
              alt="dog1"
              className="rounded-full object-cover aspect-square"
            />
          </div>
          <div className="col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center">
              The Making of LTV
            </h2>
            <p className="text-lg mb-6 text-justify">
              Love the Voiceless (LTV) was founded by a team of committed animal
              lovers in 2019. Once a group of 4 members, the team has now grown
              to a network of passionate volunteers, feeders, rescuers, and
              like-minded dog lovers.
              <br />
              <br />
              With the rapid urbanization of our neighborhoods, unethical
              breeding, mistreatment, abandonment of our furry companions,
              accompanied by the cultural taboos of Singapore Specials; our
              mission at LTV is to <span className="emphasis italic">love</span>
              , <span className="emphasis italic">educate</span>, and{" "}
              <span className="emphasis italic">heal</span>.
              <br />
              <br />
              Our focus is on foster care with humane rehabilitation training
              techniques and rehoming of stray dogs.
              <br />
              <br />
              The team at LTV actively rescues, rehomes, rehabs, educates, and
              organizes adoption drives for dogs under our care. We also
              collaborate with other similar welfare groups, feeders, schools,
              communities, or independent rescuers in supporting our cause.
            </p>
          </div>
        </section>

        {/* box */}
        <section className="mb-32">
          <div className="flex bg-[#FFE4E0] py-8 px-40 rounded-4xl mb-12 items-center text-center h-38 relative">
            <p className="text-xl italic">
              "A paw-shake is the beginning of a lifetime of loyalty and love.
              Take your first steps and reach out."
            </p>
            <img
              src="/assets/noun-paw-prints-1114674.avif"  // Updated path
              alt="paw-prints"
              className="absolute rotate-12 right-10 bottom-4 w-20 h-16"
            />
          </div>
        </section>

        {/* mission */}
        <section className="mb-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-7 my-auto">
              <h2 className="text-4xl font-bold mb-14">Our Mission</h2>
              <ul className="space-y-4 text-xl list-disc ml-4">
                <li>
                  To <span className="emphasis">Love</span> every dog like our
                  own.
                </li>
                <li>
                  To <span className="emphasis">Educate</span> every adult &
                  child on the beauty of adoption and dogs' welfare.
                </li>
                <li>
                  To <span className="emphasis">Heal</span> all dogs under our
                  care; physically and mentally.
                </li>
              </ul>
            </div>
            <div className="col-span-5 flex items-center">
              <img
                src="/assets/dog2.avif"  // Updated path
                alt="dog2"
                className="rounded-full object-cover aspect-square"
              />
            </div>
          </div>
        </section>

        {/* partners */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Partners and Wishlists
          </h2>
          <p className="mb-8">
            Click on the logos to view LTV wishlists, purchase, and support the
            rescues!
          </p>
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-5"
                >
                  <a href={partner.link} target="_blank">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[150px] hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const partners = [
  {
    name: "Addiction",
    logo: "/assets/logos/Addiction-Final-Logo-Lockup.avif", // Updated path
    link: "/",
  },
  {
    name: "Happy Hounds",
    logo: "/assets/logos/Happy-Hounds-Logo.avif", // Updated path
    link: "https://www.happyhounds.com.sg/product-page/donate-to-love-the-voiceless-fromm-dry-dog-food",
  },
  {
    name: "Postman's Trinkets",
    logo: "/assets/logos/Postmans-Trinkets-Logo.avif", // Updated path
    link: "https://www.instagram.com/postmanstrinkets/?hl=en",
  },
  {
    name: "Polypet",
    logo: "/assets/logos/Polypet-Logo.avif", // Updated path
    link: "https://www.polypet.com.sg/collections/donate-to-love-the-voiceless",
  },
  {
    name: "The Twinship Co",
    logo: "/assets/logos/The-Twinship-Co-Logo.avif", // Updated path
    link: "https://thetwinship.co/collections/all/products/scooby-reversible-bandana",
  },
  {
    name: "The Barkery SG",
    logo: "/assets/logos/Sgbarkery-Logo.avif", // Updated path
    link: "https://sgbarkery.com/collections/for-the-shelters/products/love-the-voiceless-christmas-wishlist",
  },
  {
    name: "Wormhole",
    logo: "/assets/logos/WH-Logo.avif", // Updated path
    link: "https://wormhole.com.sg/products/fundraiser-cute-chonky-dogs-love-the-voiceless",
  },
];

export default About;
