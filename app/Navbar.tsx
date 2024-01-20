"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiBugBeetleFill } from "react-icons/pi";

const Navbar = () => {
	const path = usePathname();
	console.log(path);
	return (
		<nav className="flex space-x-6 border-b px-5 h-14 items-center">
			<Link href={"/"}>
				<PiBugBeetleFill className="text-2xl" />
			</Link>
			<ul>
				<li>
					<Link
						href={"/issues"}
						className={`${
							path === "/issues" ? "text-zinc-900" : "text-zinc-500"
						}`}
					>
						Issues
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
