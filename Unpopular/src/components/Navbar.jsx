import ScriptIcon from "./ScriptIcon";
import UserIcon from "./UserIcon";

function Navbar () {

return (
    <div className="Navbar">
        <div className="Script">
            <div className="ScriptBox">
               <ScriptIcon />    
            </div>
        </div>
        <div className="User">
            <div className="UserBox">
               <UserIcon />

            </div>
        </div>
        
    </div>
)   
}
export default Navbar;