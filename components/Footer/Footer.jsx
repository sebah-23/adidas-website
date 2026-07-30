import adidas from "../../assets/images/adidas.png";
import vector from "../../assets/images/Vector.png";
import vector2 from "../../assets/images/Vector2.png";
import vector3 from "../../assets/images/Vector3.png";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#231F20] text-white mt-20 py-12">

      <div className="max-w-7xl mx-auto px-12">

        <div className="grid grid-cols-5 gap-10 items-start">

          <div>
            <h2 className="text-3xl font-bold mb-5">INFO</h2>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer">
                Terms and Conditions
              </li>

              <li className="hover:text-white cursor-pointer">
                Cookies
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy Politics
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-5">
              COLLECTIONS
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>Ultraboost</li>
              <li>Confirmed</li>
              <li>NMD</li>
              <li>Originals</li>
            </ul>
          </div>

          <div className="text-center">

            <img
              src={adidasLogo}
              alt="Adidas"
              className="w-20 mx-auto mb-4"
            />

            <h2 className="text-3xl font-bold mb-5">
              SPORTS
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>Football</li>
              <li>Basketball</li>
              <li>Running</li>
              <li>Training</li>
            </ul>

          </div>

          <div>
            <h2 className="text-3xl font-bold mb-5">
              SUPPORT
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>Customer</li>
              <li>F.A.Q.</li>
              <li>Shipping</li>
              <li>adiClub</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-5">
              FOLLOW US
            </h2>

            <div className="grid grid-cols-2 gap-6 text-4xl">

              <FaFacebookF className="cursor-pointer hover:text-gray-400 transition" />

              <FaYoutube className="cursor-pointer hover:text-gray-400 transition" />

              <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />

              <FaTwitter className="cursor-pointer hover:text-gray-400 transition" />

            </div>

          </div>

        </div>

        <div className="flex justify-center gap-8 mt-14">

          <img src={vector} alt="American Express" className="h-8" />

          <img src={vector2} alt="Mastercard" className="h-8" />

          <img src={vector3} alt="Visa" className="h-8" />

        </div>

      </div>

    </footer>
  );
}

export default Footer;
