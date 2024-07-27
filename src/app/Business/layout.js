import { BusinessNavbar } from "./Components/Navbar";
import { SideBar } from "./Components/SideBar";

export default function BusinessLayout({ children }) {
  return (
    <div>
      <BusinessNavbar />
      <div className="footer-container grid grid-cols-6">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
