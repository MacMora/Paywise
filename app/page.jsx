"use client"; // This is a client component
import Documentation from "@/components/Documentation"
import SideBar from "@/components/SideBar"
// import UseCases from "@/components/UseCases"

export default function HomePage() {
    return(
        <div className="h-screen overflow-hidden">
            <SideBar/>
            <Documentation/>
        </div>
    )
}