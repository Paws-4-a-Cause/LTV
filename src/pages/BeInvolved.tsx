import Navbar from '../components/Navbar';


const BeInvolved = () => {
  return (
    <>
      <Navbar/>
      <>
      <div className="max-w-5xl mx-auto py-8 text-[#273878]">
        {/*title*/}
        <section className="text-center mb-10 pt-15">
        <h1 className="text-6xl font-extrabold mt-15">Be Involved</h1>
        </section>

        {/*3 columns*/}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*Donate Column*/}
          <div className="flex flex-col items-center bg-[#FFE4E0]">
            <img 
              src="src/assets/be-involved/Donate.avif" 
              alt="Donate" 
              className="w-full h-100 object-cover"
            />
            <h2 className="font-bold tracking-widest p-2 bg-[#FEF7ED] mt-[-1rem] px-10">Donate</h2>
            <h2 className="text-center mt-5 mb-5 text-xl font-bold">Donate / Volunteer</h2>
            <p className="text-center text-lg mb-10 px-7 leading-relaxed">Support our cause with your generosity and kindness.</p>
          </div>
          {/*Sponsor Column*/}
          <div className="flex flex-col items-center bg-[#FFE4E0]">
            <img 
              src="src/assets/be-involved/Sponsor.avif" 
              alt="Sponsor" 
              className="w-full h-100 object-cover"
            />
            <h2 className="font-bold tracking-widest p-2 bg-[#FEF7ED] mt-[-1rem] px-10">Sponsor</h2>
            <h2 className="text-center mt-5 mb-5 text-xl font-bold">Sponsor a Dog</h2>
            <p className="text-center text-lg mb-10 px-7 leading-relaxed">Sponsor a rescue to provide a roof over their heads, warm meals and medical attention.</p>
          </div>
          {/*Partnerships Column*/}
          <div className="flex flex-col items-center bg-[#FFE4E0]">
            <img 
              src="src/assets/be-involved/Partnerships.avif" 
              alt="Partnerships" 
              className="w-full h-100 object-cover"
            />
            <h2 className="font-bold tracking-widest p-2 bg-[#FEF7ED] mt-[-1rem] px-10">Partnerships</h2>
            <h2 className="text-center mt-5 mb-5 text-xl font-bold">Partner with Us</h2>
            <p className="text-center text-lg mb-10 px-7 leading-relaxed">Pet food brands, local pet businesses and merchants, corporates businesses and brands are welcome to partner with us!</p>
          </div>
        </section>

        {/*Donate and Volunteer Information*/}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-15">
          {/*Column 1*/}
          <div className="flex flex-col mx-10">
            <h1 className="font-semibold text-5xl leading-tight mb-5">Donate/ Volunteer</h1>
            <h2 className="text-[#FF8B7B] leading-relaxed text-xl">Daily needs, medical support and housing are major costs that come with every rescue. We appreciate any monetary donation or sponsorships.
              <br/><br/>*Kindly check in with us for inventory, preferred brand(s) and dietary requirements. </h2>
          </div>
          {/*Column 2*/}
          <div className="flex flex-col mx-10">
            <div className="mt-10">
            <h2 className="font-bold text-xl">01<br/>Direct Donations</h2>
            <p className="leading-relaxed text-l">Donations can be made directly to Love the Voiceless's Paynow Number @ 8101 6366.</p>
            </div>
            <div className="mt-15">
            <h2 className="font-bold text-xl">03<br/>Supplements/ Medication</h2>
            <p className="leading-relaxed text-l">Health supplements such as superboost, postbiotic, as well as tick/fleas and heartworm prevention - Nexgard Spectra</p>
            </div>
            <div className="mt-15">
            <h2 className="font-bold text-xl">05<br/>Safety Accessories</h2>
            <p className="leading-relaxed text-l">Airtags, martingale collar, flagline harness, leash,etc</p>
            </div>
          </div>
          {/*Column 3*/}
          <div className="flex flex-col mx-10">
            <div className="mt-10">
            <h2 className="font-bold text-xl">02<br/>Volunteer</h2>
            <p className="leading-relaxed text-l">Volunteer your time at the shelter (Able to commit at least once a week) and/or your skillsets such as marketing, social media, vet tech training or copywriting, etc.</p>
            </div>
            <div className="mt-15">
            <h2 className="font-bold text-xl">04<br/>Food/ Amenities</h2>
            <p className="leading-relaxed text-l">Kibbles, milk, raw/cooked/canned food, shampoo, pee-pads, tooth brush/paste, wipes, ear cleaning solution</p>
            </div>
            <div className="mt-15">
            <h2 className="font-bold text-xl">06<br/>Something extra</h2>
            <p className="leading-relaxed text-l">Dog toys, treats, sniffing mat, vouchers for dog outings or even NTUC vouchers!</p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#FCFCFC] text-[#273878]">
        

      </div>




      <div className="max-w-4xl mx-auto px-4 py-8 text-[#273878]">
          {/* partners */}
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Our Partners and Wishlists
            </h2>
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
      </>
    </>
  )
}

const partners = [
  {
    name: "Addiction",
    logo: "src/assets/logos/Addiction-Final-Logo-Lockup.avif",
    link: "/",
  },
  {
    name: "Happy Hounds",
    logo: "src/assets/logos/Happy-Hounds-Logo.avif",
    link: "https://www.happyhounds.com.sg/product-page/donate-to-love-the-voiceless-fromm-dry-dog-food",
  },
  {
    name: "Postman's Trinkets",
    logo: "src/assets/logos/Postmans-Trinkets-Logo.avif",
    link: "https://www.instagram.com/postmanstrinkets/?hl=en",
  },
  {
    name: "Polypet",
    logo: "src/assets/logos/Polypet-Logo.avif",
    link: "https://www.polypet.com.sg/collections/donate-to-love-the-voiceless",
  },
  {
    name: "The Twinship Co",
    logo: "src/assets/logos/The-Twinship-Co-Logo.avif",
    link: "https://thetwinship.co/collections/all/products/scooby-reversible-bandana",
  },
  {
    name: "The Barkery SG",
    logo: "src/assets/logos/Sgbarkery-Logo.avif",
    link: "https://sgbarkery.com/collections/for-the-shelters/products/love-the-voiceless-christmas-wishlist",
  },
  {
    name: "Wormhole",
    logo: "src/assets/logos/WH-Logo.avif",
    link: "https://wormhole.com.sg/products/fundraiser-cute-chonky-dogs-love-the-voiceless",
  },
];


export default BeInvolved