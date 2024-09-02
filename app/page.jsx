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

// export default function UseCases() {
//     return(
//         <div className="h-screen overflow-hidden">
//             <SideBar/>
//             <UseCases/>
//         </div>
//     )
// }