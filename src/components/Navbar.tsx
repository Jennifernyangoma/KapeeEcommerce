import { Search, User, ShoppingCart } from "lucide-react";
function Navbar() {
  return (
    <>
    <div className="grid items-center grid-cols-6 px-4 py-3 text-sm text-black bg-yellow-400">
      {/* Left side: Language + Currency */}
      <div className="flex col-span-2 gap-6">
        <span className="cursor-pointer">ENGLISH ▾</span>
        <span className="cursor-pointer">$ DOLLAR (US) ▾</span>
      </div>

      {/* Empty middle space */}
      <div className="col-span-2"></div>

      {/* Right side: Welcome + Links */}
      <div className="flex justify-end col-span-2 gap-6">
        <span className="hidden sm:block">WELCOME TO OUR STORE!</span>
        <span className="cursor-pointer">BLOG</span>
        <span className="cursor-pointer">FAQ</span>
        <span className="cursor-pointer">CONTACT US</span>
      </div>
    </div>

    <div>
      <div className="flex justify-between items-center py-4 px-6 shadow-md">
      <h1 className="text-2xl font-bold">kapee.</h1>
      <div className="flex w-1/2">
        <input
          type="text"
          placeholder="Search for products, categories, brands..."
          className="flex-1 border border-gray-300 px-3 py-2 rounded-l"
        />
        <button className="bg-yellow-400 px-4 rounded-r">
          <Search />
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-1 cursor-pointer">
          <User />
          <span className="text-sm">Hello, <span className="font-semibold">Sign In</span></span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <ShoppingCart />
          <span className="text-sm">$0.00</span>
        </div>
      </div>
    </div>
    </div>
    {/*    End of navb2 */}
    </>

        );
        }

        export default Navbar;