import Image from "next/image";
import ai from '../../public/images/ai.jpeg';
import communication from '../../public/images/communication.jpeg';
import education from '../../public/images/education.jpeg';
import gaming from '../../public/images/gaming.jpeg';
import job from '../../public/images/job.jpeg';
import onlineshopping from '../../public/images/onlineshopping.jpeg';
import Link from "next/link";

export default function Responsive() {
  return (
    <section className="py-10">
        <div className = "ParentContainer mx-auto">
            <div className = "ChildContainer w-full max-w-lg mx-auto mb-10 bg-red-100">
                <h1 className = "italic text-center font-bold text-xl underline">"Latest Trend in Digital Innovation and Services".</h1>
            </div>
            <div className = "grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-red-100">
                {Posts()}
                {Posts01()}
                {Posts02()}
                {Posts03()}
                {Posts04()}
                {Posts05()}
            </div>
        </div>
    </section>
  );
}
function Posts (){
    return(
        <div className = "Items">
            <div className = "Images">
                <Image src={ai} alt="img" width={210} className= " scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/> 
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
                <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">"presentation on AI trends or technologies":{""}</p>
                <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Artificial Intelligence (AI) offers numerous benefits that are transforming industries and enhancing daily life... {""}</p>
                <Link href = "/ai">
                <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
                </Link>
            </div>
        </div>
    );
}
function Posts01(){
    return (
        <div className = "Items">
            <div className = "Images">
                <Image src={communication} alt="shimmer" width={210} className=" scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">"Effective Communication: Key to Success in the Modern World":{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Communication is a vital skill that influences every aspect of life, from personal relationships to professional success...{""}</p>
            <Link href="/communication">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts02 (){
      return( 
          <div className = "Items">
            <div className = "Images">
            <Image src={education} alt="dimmer" width={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">"The Future of Education: Shaping Tomorrow's Leaders":{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px3">Education is the foundation for personal growth, societal advancement, and global development. It equips individuals with the knowledge and skills they need to navigate the complexities of the modern world...{""}</p>
            <Link href="/education">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts03 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src={gaming} alt="img" width={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">"Beyond Entertainment: The Expanding Role of Gaming in Modern Culture":{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Gaming has evolved from simple arcade experiences into a global industry that blends cutting-edge technology with creativity...{""}</p>
            <Link href="/gaming">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts04 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src={job} alt="village name" width={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">"Navigating the Modern Job Market: Skills, Opportunities, and Growth":{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">The job market today is constantly evolving, shaped by technological advancements, globalization, and shifting economic landscapes...{""}</p>
            <Link href="/job">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1;">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts05 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src={onlineshopping} alt="village name" width={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">"Shopping in the Digital Age: Trends and Benefits of Online Retail":{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Online shopping has revolutionized the way consumers purchase goods and services, offering unparalleled convenience and variety...{""}</p>
            <Link href="/onlineshopping">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 padding-top: 0px;">Read More</button>
            </Link>
            </div>
        </div>
    );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
