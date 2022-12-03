import {Link} from 'react-router-dom'
function SidebarOption({text, Icon ,destination}) {
  return (
    <div className= "sidebarOption">
        <Link to= {destination}>
            <h2>{text} {<Icon />}</h2>

        </Link>
    </div>
  );
}

export default SidebarOption;

/*
<div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
*/