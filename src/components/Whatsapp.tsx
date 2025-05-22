import Image from "next/image";
import Link from "next/link";

export default function Whatsapp() {
    return (
        <div className="hero-icon fixed bottom-5 right-5 z-50 w-20 h-20 rounded-full flex items-center justify-center">
            <Link
                href="https://chat.whatsapp.com/Cz1kgclOsszB8hgLcT4bn9"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-full flex items-center justify-center"
            >
                <svg
                    className="absolute w-full h-full animate-spin-slow"
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                        />
                    </defs>
                    <text fill="#25D366" fontSize="14.5">
                        <textPath
                            href="#circlePath"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            JOIN OUR WHATSAPP GROUP
                        </textPath>
                    </text>
                </svg>

                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-2xl z-10">
                    <Image
                        src="/assets/icons/new.svg"
                        alt="Join our Whatsapp Group Now"
                        width={28}
                        height={28}
                    />
                </div>
            </Link>
        </div>
    );
}
