import BlogCard from "../components/our-stories/blogCard";

const OurStories = () => {
  const blogs = [
    {
      title: "LTV's first ever solo adoption drive!",
      date: "Feb 26, 2023",
      readTime: 2,
      description:
        "25th Feb Saturday marked LTV's first ever solo  adoption drive at Cafe Tailor Made (100 Turf Club)! It was a three-hour long event, featuring several of LTV's doggos who are up for adoption. Below is the full list of LTV's partners who generously donated a mix of goodie bags, food or 10% of their profits.",
      imageUrl: "/images/our-stories/adoptiondrive.webp",
      redirect: "",
    },
    {
      title: "Malibu",
      date: "Jul 15, 2022",
      readTime: 1,
      description:
        "90 Days with Zen Vegetarian from Addiction Malibu was plagued with a bad spell of hive/ allergy since he was returned to LTV earlier in the year. We’ve never managed to identify the triggers to his skin outbreaks; it could be environmental, stress or diet. Malibu was on Cytopoint injections and it doesn’t seem to address the root cause of his allergies. Ever since changing his diet to Zen Vegetarian; upon consulting his regular vet and Addiction Pet, we’ve seen a dramatic change in his overall skin heath and demeanour. Accompanied with regular moisturizer and diet management, Malibu is now hives-free.",
      imageUrl: "/images/our-stories/malibu.webp",
      redirect: "",
    },
    {
      title: "Mocha",
      date: "Mar 14, 2022",
      readTime: 2,
      description:
        "Journey of Zheng Family and Mocha We’ve always remarked how adopting Mocha was truly fate.When we casually visited the Plant and Herb puppies in LTV in 2021, we had no idea that we would eventually give one of the puppies a forever home. However, when we met Mocha (then named Monsterra), it was truly love at first sight. He had a beautiful tri-coloured coat, a constantly demure expression, and would quietly sit in our laps as we patted him. Though we loved Mocha a lot, what finally pushed us to adopt him was something Pauline (one of the organisers behind LTV) said. She remarked that in adopting a dog, we were actually saving two lives. We were both giving a forever home to a dog, and also freeing up resources so LTV could save another dog. That struck us deeply and truly changed our views in adopting instead of buying a dog.",
      imageUrl: "/images/our-stories/mocha.webp",
      redirect: "",
    },
    {
      title: "Jill",
      date: "Feb 19, 2022",
      readTime: 2,
      description:
        "Jill was a nursery dog who was extremely fearful. Jill was very skittish; was afraid of almost anything and everything is a trigger.  It started with a simple foster and rehabilitation but Jill has no intentions to leave. She charmed herself to a forever home and a grand.",
      imageUrl: "/images/our-stories/jill.webp",
      redirect: "",
    },
    {
      title: "Tin Tin",
      date: "Feb 19, 2022",
      readTime: 2,
      description:
        "TinTin was rescued at Loyang and was most likely abandoned due to her docile nature. Charlotte and her family spotted her on LTV’s Facebook page which kick-started the entire process. The family has been in search of a suitable dog for about 3 months and they’re hopeful that with time, they’ll be able to find a new family member.",
      imageUrl: "/images/our-stories/tintin.webp",
      redirect: "",
    },
    {
      title: "Cactus",
      date: "Feb 19, 2022",
      readTime: 4,
      description:
        "Adopted by Martin, Crystal & Ruby (senior husky) Interview with Cactus's Adoptors What's Cactus history? Cactus came to us on 17 November 2021. Cactus was a puppy when he came to us, close to 3 months old. He was rescued by Love The Voiceless (LTV) with his other siblings. For us, we are a happy family of three with a 10-year-old husky (Ruby) adopted a year ago. Our wish is to find one more forever fur-friend for Ruby, to play with, to grow up with and grow old together with.",
      imageUrl: "/images/our-stories/cactus.webp",
      redirect: "",
    },
    {
      title: "Koko",
      date: "Feb 19, 2022",
      readTime: 2,
      description:
        "Adopted by Wendy and Kayden Koko with her family and her former feeder Koko is a blind Singapore Special that was rescued by LTV from a farm where she lived with her family. Despite her disabilities, she is very spirited and full of life. Wendy and Kayden had lost their first adopted Pomeranian Spitz whom they absolutely adore and they’re ready to open their hearts and their home to another rescue. It was love at first “sight” for Koko adopters in mid-2020 at the worse of the Covid pandemic.",
      imageUrl: "/images/our-stories/koko.webp",
      redirect: "",
    },
    {
      title: "Rocket",
      date: "Feb 19, 2022",
      readTime: 2,
      description:
        "Adopted by Denisa and Leonard Journey of Denisa and Leonard Denisa and I have always loved dogs so we started looking at different animal welfare groups for opportunities to adopt as soon as we got our place. We knew that we wanted a puppy so that we could enjoy going through all his/her different life stages together. ",
      imageUrl: "/images/our-stories/rocket.webp",
      redirect: "",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-[#273878]">
      {/* title */}
      <section className="text-center mb-34">
        <h1 className="text-6xl font-extrabold">Our Rescues Today</h1>
      </section>

      {/* sub */}
      <section className="mb-10">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl">All Posts</h2>
          </div>
          <div className="font-light">
            <input
              className="p-1 text-[#273878] border-b border-[#273878] placeholder:text-[#273878] bg-transparent focus:outline-none"
              type="search"
              placeholder="Search"
            />
          </div>
        </div>
      </section>

      {/* blog cards */}
      <section className="mb-20">
        <div className="flex flex-col gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              date={blog.date}
              readTime={blog.readTime}
              description={blog.description}
              imageUrl={blog.imageUrl}
              redirect={blog.redirect}
            />
          ))}
        </div>
      </section>

      {/* partners */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-6">Our Partners and Wishlists</h2>
        <p className="mb-8">
          Click on the logos to view LTV wishlists purchase and support the
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
  );
};

const partners = [
  {
    name: "Addiction",
    logo: "images/logos/Addiction-Final-Logo-Lockup.avif",
    link: "/",
  },
  {
    name: "Happy Hounds",
    logo: "images/logos/Happy-Hounds-Logo.avif",
    link: "https://www.happyhounds.com.sg/product-page/donate-to-love-the-voiceless-fromm-dry-dog-food",
  },
  {
    name: "Postman's Trinkets",
    logo: "images/logos/Postmans-Trinkets-Logo.avif",
    link: "https://www.instagram.com/postmanstrinkets/?hl=en",
  },
  {
    name: "Polypet",
    logo: "images/logos/Polypet-Logo.avif",
    link: "https://www.polypet.com.sg/collections/donate-to-love-the-voiceless",
  },
  {
    name: "The Twinship Co",
    logo: "images/logos/The-Twinship-Co-Logo.avif",
    link: "https://thetwinship.co/collections/all/products/scooby-reversible-bandana",
  },
  {
    name: "The Barkery SG",
    logo: "images/logos/Sgbarkery-Logo.avif",
    link: "https://sgbarkery.com/collections/for-the-shelters/products/love-the-voiceless-christmas-wishlist",
  },
  {
    name: "Wormhole",
    logo: "images/logos/WH-Logo.avif",
    link: "https://wormhole.com.sg/products/fundraiser-cute-chonky-dogs-love-the-voiceless",
  },
];

export default OurStories;
