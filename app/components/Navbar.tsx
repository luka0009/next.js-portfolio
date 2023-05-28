'use client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      className="relative z-99
       bg-[#1A0B2E] 
       bg-gradient-to-bl from-[#1A0B2E] via-slate-900 to-purple-900 
       w-full h-fit py-5 px-4 text-white flex justify-between items-center text-sm sm:text-base md:text-lg lg:text-xl"
    >
      <div className="hidden md:block">
        <span onClick={() => router.push('/')} className="cursor-pointer">Luka Barbakadze</span>
      </div>
      <div className="block md:hidden">
        <span className="cursor-pointer">Luka</span>
      </div>
      <div className="flex justify-center items-center gap-3">
          <span onClick={() => router.push('/')} className="cursor-pointer">Home</span>
          <span onClick={() => router.push('/about')} className="cursor-pointer">About/Skills</span>
          <span onClick={() => router.push('/projects')} className="cursor-pointer">Projects</span>
          <span onClick={() => router.push('/contact')} className="cursor-pointer">Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
