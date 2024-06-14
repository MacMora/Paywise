import Documentation from "@/components/Documentation"
import SideBar from "@/components/SideBar"

export default function HomePage() {
    return(
        <div className="h-screen overflow-hidden">
            <SideBar/>
            <Documentation/>
        </div>
    )
}