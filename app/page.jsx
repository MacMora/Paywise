import Documentation from "@/components/Documentation"
import SideBar from "@/components/SideBar"
import NavBar from "@/components/NavBar"

export default function HomePage() {
    return(
        <div className="h-screen overflow-hidden">
            <SideBar/>
            <Documentation/>
        </div>
    )
}