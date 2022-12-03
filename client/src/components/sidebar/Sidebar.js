import SidebarOption from "./SidebarOption";
import {FaHome, FaCog, FaUserCircle} from 'react-icons/fa'


function Sidebar() {
    //Icon = ...
  return (
    <div className="sidebar">
      <SidebarOption text="Home" Icon = {FaHome} destination = '/' />
      <SidebarOption text="Profile" Icon = {FaUserCircle} destination = '/profile'/>
      <SidebarOption text="Settings" Icon = {FaCog} destination = '/settings'/>
    </div>
  );
}

export default Sidebar;