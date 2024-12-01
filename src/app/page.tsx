import SearchPage from "@/components/searchPage";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
   return (
      <div>
         <Navbar />
         <main className="mt-24">
            <SearchPage />
         </main>
         <Footer />
      </div>
   );
}
