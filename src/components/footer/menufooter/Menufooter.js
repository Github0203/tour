import Tourcaocap from "./Ngoainuoc/Tourcaocap"
import Mienbac from "./Trongnuoc/Mienbac"
import Miennam from "./Trongnuoc/Miennam"
import Mientay from "./Trongnuoc/Mientay"
import Mientrung from "./Trongnuoc/Mientrung"

const Menufooter = () => {
    return (
        <div className="menufooter">
        <div className="container">
           <div className="tourtrongnuoc">
               <h3>Tour trong nước</h3>
           <ul className="ul_ngoai1">
               <li><Mienbac /></li>
               <li><Mientrung /></li>
               <li><Miennam /></li>
               <li><Mientay /></li>
           </ul>
           </div>
           <div className="tourngoainuoc">
           <h3>Tour nước ngoài</h3>
           <ul className="ul_ngoai1">
               <li><Tourcaocap /></li>
           </ul>
           </div>
           </div>
        </div>
    )
}

export default Menufooter