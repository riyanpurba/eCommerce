import Link from "next/link";
import { ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/24/solid'
import { menuData } from "../../json/menu";

const Header = () => {
    const dataMenu = menuData.menu;
  return (
    <header className="sticky top-0 w-full h-20 flex items-center py-3 bg-white z-50">
        <div className="container">
            <nav className="relative w-full h-auto flex items-center justify-between">
                <button className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden">
                    <span className="relative block w-5 h-5 cursor-pointer">
                        <span className="block absolute right-0 h-full w-full">
                            <span className="relative top-0 left-0 my-1 block h-0.5 !w-full rounded-sm bg-black delay-[0] duration-200 ease-in-out"></span>
                            <span className="relative top-0 left-0 my-1 block h-0.5 !w-full rounded-sm bg-black delay-150 duration-200 ease-in-out"></span>
                            <span className="relative top-0 left-0 my-1 block h-0.5 !w-full rounded-sm bg-black delay-200 duration-200 ease-in-out"></span>
                        </span>
                        <span className="absolute right-0 h-full w-full rotate-45">
                            <span className="absolute left-2.5 top-0 block !h-0 w-0.5 rounded-sm bg-black !delay-[0] duration-200 ease-in-out"></span>
                            <span className="absolute left-0 top-2.5 block !h-0 w-full rounded-sm bg-black !delay-200 duration-200 ease-in-out"></span>
                        </span>
                    </span>
                </button>
                <Link href="/" className="flex items-center text-black">
                    Shop Smart
                </Link>
                <div className="flex items-center md:order-2">
                    <Link href="/cart" className="relative bg-white text-white p-4 text-center mr-3 md:mr-0">
                        <ShoppingCartIcon className="h-6 w-6 text-black" />
                        <span className="absolute top-1 right-1 text-white text-sm bg-red-900 w-5 h-5 rounded-full">5</span>
                    </Link>
                    <Link href="/cart" className="relative bg-white text-white p-4 text-center mr-3 md:mr-0">
                        <HeartIcon className="h-6 w-6 text-black" />
                        <span className="absolute top-1 right-1 text-white text-sm bg-red-900 w-5 h-5 rounded-full">5</span>
                    </Link>
                    <Link href="/profile" className="relative bg-white text-white p-4 text-center mr-3 md:mr-0">
                        <UserIcon className="h-6 w-6 text-black" />
                    </Link>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {dataMenu.map((item, index) => (
                            <li className="mx-auto" key={index}>
                                <Link href={item.link} className="block py-2 pl-3 pr-4 text-black capitalize rounded md:p-0">{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
};

export default Header;