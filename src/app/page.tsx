import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[#FFF9F4]">
        <header className="p-4 flex justify-between items-center">
          <div className="text-2xl font-cursive text-[#FFB830]">FoodHouse</div>
          <nav>
            <ul className="flex space-x-12 text-[20px] gap-[30px] my-[42px]">
              <li>
                <Link href="/" className="text-[#FFB830]">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="text-gray-500">
                  RESTAURANT
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-500">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-500">
                  CART
                </Link>
              </li>
            </ul>
          </nav>
          <button className="text-gray-500 text-[23px] mr-[53px]">
            Sign In
          </button>
        </header>

        <main className="container mx-auto px-4 py-12 flex">
          <div className="w-1/2 pr-9 my-[70px]">
            <h1 className="text-6xl font-bold mb-4">
              Enjoy Delicious
              <br />
              Food in <span className="text-[#FFB830]">Helthy Life</span>
            </h1>
            <p className="mb-text-gray-900 font-light text-[25px] my-[53px] ">
              Tandoori masala is an Indian spice blend consisting of a variety
              of spices Tandoori masala is an Indian spice blend consisting of a
              variety of spices
            </p>
            <button className="my-[60px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg">
              ORDER NOW
            </button>
          </div>
          <div className="w-1/2 relative ml-[250px]">
            <Image
              src="/images/chicken.png"
              alt="Roasted Chicken"
              width={800}
              height={10}
              className="rounded-full"
            />
          </div>
        </main>
      </div>

      <div className="font-bold  mt-8 text-center text-[45px]">
        <p className="italic">Online store</p>
        <h1 className="font-bold text-center text-[40px]">Popular Foods </h1>
        <div className="border-b-4 border-yellow-400 w-20 mx-auto mb-12"></div>
      </div>

      <div className="flex ml-[10px] ml-[180px]">
        <div className="w-1/2 relative text-centre">
          <Image
            src="/images/fruitdish.png"
            alt="Roasted Chicken"
            width={250}
            height={10}
            className="rounded-full"
          />
          <p className="text-[30px] font-medium ml-[50px] ">Fruit Dish</p>
          <p className="ml-[60px] font-light">Dinko Food</p>
          <p className="ml-[54px]">&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[8px] mr-[20px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full ml-[12px]">
            Add to cart $ 678
          </button>
        </div>
        <div className="w-1/2 relative mr-[53px]">
          <Image
            src="/images/fruitdish2.png"
            alt="Roasted Chicken"
            width={250}
            height={10}
            className="rounded-full"
          />
          <p className="text-[30px] font-medium  ml-[50px]">Fruit Dish</p>
          <p className="ml-[60px]">Dinko Food</p>
          <p className="ml-[54px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <button className="my-[8px] mr-[20px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full ml-[12px]">
            Add to cart $ 678
          </button>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/images/sea fish.png"
            alt="Roasted Chicken"
            width={250}
            height={10}
            className="rounded-full"
          />
          <p className="text-[30px] font-medium ml-[20px]">Sea Fish dish</p>
          <p className="ml-[60px]">Dinko Food</p>
          <p className="ml-[54px]">&#11088;&#11088; &#11088; &#11088;</p>
          <button className="my-[8px] mr-[20px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full ml-[8px]">
            Add to cart $ 678
          </button>
        </div>

        <div className="w-1/2 relative">
          <Image
            src="/images/pizza.png"
            alt="Roasted Chicken"
            width={250}
            height={10}
            className="rounded-full"
          />
          <p className="text-[30px] font-medium ml-[100px]">Pizza</p>
          <p className="font-light text-[15px] ml-[100px]">Dinko Food</p>
          <p className="ml-[100px]">&#11088;&#11088; &#11088; &#11088;</p>
          <button className="my-[8px] ml-[20px] bg-yellow-500 text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[15px] rounded-full ml-[50px]">
            Add to cart $ 678
          </button>
        </div>
      </div>

      <div className="text-justify text-center ml-[300px]">
        <div className="mt-[50px] my-[40px]">
          <button className="my-[8px] ml-[170px] bg-yellow-500 text-neutral-50 min-w-[60px] text-amber-500 min-h-[30px] text-[15px] rounded-full ">
            -50%
          </button>
        </div>
        <div className="">
          <h1 className="text-[40px] ml-[150px]">Our Special Offer</h1>
        </div>
        <button className="my-[8px] ml-[100px] bg-yellow-500 text-neutral-100 min-w-[150px] text-amber-500 min-h-[40px] text-[15px] rounded-full ml-[170px]">
          See All Menu
        </button>
        <div className="ml-[10px] flex">
          <div>
            <p className="ml-[150px] text-[25px]">
              Best cooks and best delivery guys all at your
              <br></br>
              service. Hot tasty food will reach you in 60 minutes.
            </p>
            <div className="ml-[300px] ">
              <Image
                src="/images/special.png"
                alt="Roasted Chicken"
                width={500}
                height={10}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>Quality Food</p>
        <h1 className="font-bold text-center text-[40px]">
          Get The Best Offers{" "}
        </h1>
        <p>
          The food at your doorstep. Why starve when you have us. You hunger
          <br />
          partner. Straight out of the oven to your doorstep.
        </p>
      </div>

      <div className="flex gap-[150px] ml-[250px] my-[70px]">
        <div className="flex ">
          <div className="pt-20">
            <h2 className=" font-medium text-[25px]">
              Any day
              <br /> offers
            </h2>
            <p className="font-light">
              New phenomenon <br /> Burger taste
            </p>
            <p className="text-[#FFB830]">$12.90</p>
            <div className="border-b-4 border-yellow-400 w-6 mx-auto mb-12 ml-[20px]"></div>
          </div>
          <div>
            <Image
              src="/images/One.png"
              alt="Roasted Chicken"
              width={250}
              height={10}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="pt-20">
            <h2 className=" font-medium text-[25px]">
              Any day
              <br /> offers
            </h2>
            <p className="font-light">
              New phenomenon <br /> Burger taste
            </p>
            <p className="text-[#FFB830]">$12.90</p>
            <div className="border-b-4 border-yellow-400 w-6 mx-auto mb-12 ml-[20px]"></div>
          </div>
          <div>
            <Image
              src="/images/two.png"
              alt="Roasted Chicken"
              width={250}
              height={10}
              className="rounded-full"
            />{" "}
          </div>
        </div>

        <div className="flex ">
          <div className="pt-20">
            <h2 className=" font-medium text-[25px]">
              Any day
              <br /> offers
            </h2>
            <p className="font-light">
              New phenomenon <br /> Burger taste
            </p>
            <p className="text-[#FFB830]">$12.90</p>
            <div className="border-b-4 border-yellow-400 w-6 mx-auto mb-12 ml-[20px]"></div>
          </div>
          <div>
            <Image
              src="/images/three.png"
              alt="Roasted Chicken"
              width={250}
              height={10}
              className="rounded-full"
            />{" "}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[55px] font-bold text-center mt-[160px]">
          Our Services
        </h1>
      </div>
      <div className="flex mt-[100px] gap-[120px] ml-[400px]">
        <div>
          <img
            src="./images/toy1.png"
            alt="rest"
            className="object-cover w-[567]"
          />
          <p className="text-center font-semibold text-[25px] mt-[30px]">
            55+ Restaurants
          </p>
        </div>
        <div>
          <img
            src="images/toy2.png"
            alt="quality"
            className="object-cover w-[567]"
          />
          <p className="text-center font-semibold text-[25px] mt-[30px]">
            Good Quality
          </p>
        </div>
        <div>
          <img
            src="./images/toy3.png"
            alt="discount"
            className="object-cover w-[5 67px]"
          />
          <p className="text-center font-semibold text-[25px] mt-[30px]">
            Discount System
          </p>
        </div>
        <div>
          <img
            src="./images/toy4.png"
            alt="delivery"
            className="object-cover w-[567]"
          />
          <p className="text-center font-semibold text-[25px] mt-[50px]">
            Fast Delivery
          </p>
        </div>
      </div>
      <div className="text-center mt-[150px]">
        <h1 className="font-bold text-[20px]">Testimonial</h1>
        <h1 className="text-[55px] font-bold text-center mt-[20px]">
          What Our Clients Say
        </h1>
        <img
          src="./image/icon1.png"
          alt=""
          className="object-cover ml-[840px]"
        />
        <p className="font-light text-[20px] text-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod
          tempor incididunt
        </p>
        <p className="font-light text-[20px] text-[25px]">
          ut labore dolore aliqua. Ut enim ad veniam, quis nostrud exercitation
        </p>
        <p className="font-light text-[20px] text-[25px]">
          ullamco laboris nisi ut aliquip ex ea cammodo
        </p>
      </div>
      <div className="flex ml-[700px] mt-[100px]">
        <img src="./images/woman.png" alt="woman" className="object-cover" />
        <img src="./images/man3.png" alt="man1" className="object-cover" />
        <img src="./images/man2.png" alt="man2" className="object-cover" />
        <img src="./images/man3.png" alt="man3" className="object-cover" />
        <img src="./images/man4.png" alt="man4" className="object-cover" />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-[20px]">Mitchelle Marsh</h1>
        <p>CEO, Bexon Agency</p>
        <div className="flex ml-[900px] ">
          <div className="w-[20px] h-[20px]">
            <img
              src="./images/back.png"
              alt="delivery"
              className="object-cover w-[567]"
            />
          </div>
          <div className="w-[20px] h-[20px]">
            <img
              src="./images/arrowhead.png"
              alt="delivery"
              className="object-cover w-[567]"
            />
          </div>
        </div>
      </div>

      <div className="flex ml-[600px] my-[50px]">
        <div>
          <img
            src="images/phone.png"
            alt="mobile phone"
            className="object-cover w-[567]"
          />
        </div>
        <div className="mt-[200px] ml-[70px]">
          <p className="text-[#FFB830]">Download Our App</p>

          <h4 className="font-bold text-[30px]">
            It's all here. All in one app.
          </h4>
          <p>
            Discover local on-demand delivery at pickup
            <br />
            from restaurant, nearby grocery and convenience stores
            <br />, and more.
          </p>
          <div className="w-[300px] h-[300px]">
          <img
            src="images/app.png"
            alt="mobile phone"
            className="object-cover w-[200]"
          />
        </div>
        </div>
      </div>
      <div className="flex gap-80 pl-60">
        <div>
          <h1 className="font-bold text-[30px]">Subscribe our newsletter</h1>
          <p>
            Subscribe on our newsletter to get our <br />
            news
          </p>
        </div>
        <div>
          <input type="email" name="email" placeholder=" input email address" />
          <button className="my-[30px] ml-[40px] bg-yellow-500 text-neutral-100 min-w-[180px] text-amber-500 min-h-[60px] text-[15px]">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="bg-[#1a0f0f] text-white">
        <div className="container mx-auto px-3 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">FoodHouse.</h2>
              <p className="text-sm text-gray-400 mb-4">
                Best cooks and best delivery guys all at your service. Hot tasty
                food will reach you in 60 minutes.
              </p>
              <div className="flex space-x-4"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#">Career</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Press Info</Link>
                </li>
                <li>
                  <Link href="#">Features</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Fudo</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#">Why Fudo</Link>
                </li>
                <li>
                  <Link href="#">How it Works</Link>
                </li>
                <li>
                  <Link href="#">Why Choose Us</Link>
                </li>
                <li>
                  <Link href="#">Client Stories</Link>
                </li>
                <li>
                  <Link href="#">Gallery</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#">Breakfast</Link>
                </li>
                <li>
                  <Link href="#">Lunch</Link>
                </li>
                <li>
                  <Link href="#">Dinner</Link>
                </li>
                <li>
                  <Link href="#">Fast Foods</Link>
                </li>
                <li>
                  <Link href="#">Drinks</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-yellow-400 py-4 text-center text-[#1a0f0f]">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <p className="decoration-white	">
              Copyright 2021 Besnik All Right Reserved
            </p>
            <div className="space-x-4 decoration-white	">
              <Link href="#" className="hover:underline">
                Terms
              </Link>
              <Link href="#" className="hover:underline">
                Privacy
              </Link>
              <Link href="#" className="hover:underline">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
