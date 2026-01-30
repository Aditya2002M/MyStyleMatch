import About from "@/components/mvpblocks/about";
import WaitlistPage from "@/components/mvpblocks/waitlist";


export default function Home() {
  return (
    <div className="w-full">
    <WaitlistPage></WaitlistPage>
    <About />
    
    </div>
  );
}
