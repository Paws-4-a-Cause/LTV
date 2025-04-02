import Navbar from '../components/Navbar';

const AdoptFoster = () => {
  return (
      <>
        <Navbar />
        <>
        <div className="max-w-4xl mx-auto px-4 py-8 text-[#273878]">
          {/* title */}
          <section className="text-center mb-10 pt-15">
            <h1 className="text-6xl font-extrabold">Adopt/Foster a Rescue Dog</h1>
          </section>
  
          {/* description & button */}
          <section className="text-center">
            <p className="font-poppins-extralight text-xl mb-10 mx-auto w-170 tracking-wide leading-normal">
            If you're keen on adopting a rescue , please note that it's a process of 2-
            6 weeks upon application and depend on requirements. Please only
            adopt if you're financially able to provide long-term care and shelter,
            open to LTV's recommended training regimes or assigned dog trainers,
            and be prepared to love and be loved for at least 15 years or more. 
            </p>
  
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_A1paNNNhYwGDFnzKmgoYXqZX4jqVw58gDJ-Jp01RB_egdg/viewform" target="_blank" rel="noopener noreferrer">
              <button className="font-poppins-extralight bg-[#273878] text-white font-bold text-xxl px-6 py-3 tracking-widest rounded-lg hover:bg-[#407586] mb-10">
                Apply Here (Adopt/Foster)
              </button>
            </a>
          </section>
        </div>
  
        <div>
          {/* photo banner */}
          <section className="w-full m-0 p-0">
            <img
              src="src/assets/adopt-foster/LTV_AdoptFoster.avif"
              alt="Adoption Banner" 
              className="w-full h-[500px] object-cover"
            />
          </section>
        </div>
  
  
        <div className="max-w-4xl mx-auto px-4 py-8">
        
          {/* Subtitle */}
          <section className="text-center mb-10 pt-15 text-[#273878]">
            <h1 className="text-6xl font-extrabold mb-10">Do you have space in your heart and your home?</h1>
            <p className="font-poppins-extralight text-xl mb-10 mx-auto w-170 tracking-wide leading-normal">
            Our adoptable furkids, get to know them!
            </p>
          </section>
  
          {/*Dog Profiles*/}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img 
                src="src/assets/adopt-foster/Scoob.avif" 
                alt="Scooby" 
                className="w-55 h-55 object-cover rounded-full mx-auto"
              />
              <h3 className="text-3xl font-bold text-center mt-4 mb-1 text-[#273878]">Scooby, 7yo</h3>
              <p className="text-m text-center font-light mb-5">In Shelter</p>
              <button className="font-poppins-extralight bg-[#e8e6e6] mx-auto font-bold text-m px-5 py-2 tracking-widest rounded-lg hover:rounded-full mb-10">
                Read More
              </button>
            </div>
  
            <div className="flex flex-col items-center">
              <img 
                src="src/assets/adopt-foster/Patch.avif" 
                alt="Patch" 
                className="w-55 h-55 object-cover rounded-full mx-auto"
              />
              <h3 className="text-3xl font-bold text-center mt-4 mb-1 text-[#273878]">Patch, 12yo</h3>
              <p className="text-m text-center font-light mb-5">Foster Care</p>
              <button className="font-poppins-extralight bg-[#e8e6e6] mx-auto font-bold text-m px-5 py-2 tracking-widest rounded-lg hover:rounded-full mb-10">
                Unavailable
              </button>
            </div>
  
            <div className="flex flex-col items-center">
              <img 
                src="src/assets/adopt-foster/Molly.avif" 
                alt="Molly" 
                className="w-55 h-55 object-cover rounded-full mx-auto"
              />
              <h3 className="text-3xl font-bold text-center mt-4 mb-1 text-[#273878]">Molly, 7yo</h3>
              <p className="text-m text-center font-light mb-5">Foster Care</p>
              <button className="font-poppins-extralight bg-[#e8e6e6] mx-auto font-bold text-m px-5 py-2 tracking-widest rounded-lg hover:rounded-full mb-10">
                Read More
              </button>
            </div>
                
          </section>
        </div>
  
        <div className="w-full bg-[#FFE4E0] text-[#273878] py-20">
          {/* Adopter Advice */}
          <h1 className="text-6xl text-center font-extrabold mb-10">Our Adoptors' Advice</h1>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-15 max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <p className="font-light text-xl text-center leading-relaxed mb-7">“Having a furkid is just like having a child. 
                Give ur best to them and they will give u their entire world. 
                Ur pawrenting journey will definitely be worth it!”</p>
              <p className="font-bold text-center">Jill's Adoptors</p>
            </div>
  
            <div className="flex flex-col items-center">
              <p className="font-light text-xl text-center leading-relaxed mb-7">“Be patient, accepting and responsible. Having a 
                dog shouldn’t be a spur of the moment decision, so think clearly before adopting.”</p>
              <p className="font-bold text-center">TinTin's Adoptors</p>
            </div>
  
            <div className="flex flex-col items-center">
              <p className="font-light text-xl text-center leading-relaxed mb-7">“Let it be an open communication with the organisation, 
                be open-minded and patient as adopted pets need more tender loving care than other pets. Don't give up on them!”</p>
              <p className="font-bold text-center">Koko's Adoptors</p>
            </div>
          </section>
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
    );
  };
  
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
  

export default AdoptFoster