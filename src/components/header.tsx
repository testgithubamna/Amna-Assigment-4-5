import Link from "next/link";
export default function Header(){
    return(
        <div>
            <div className="header">
                <ul className="header-buttons">
                    <Link href={"/"}>
                    <li>Home</li>
                    </Link>
                    <Link href={"/about"}>
                    <li>about us</li>
                    </Link>
                    <Link href={"/contact-us"}>
                    <li>Contact us</li>
                    </Link>
                </ul>
            </div>
            </div>
    )
}