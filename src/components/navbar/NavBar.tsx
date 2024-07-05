import HomePage from "@/app/page";
import Links from "./links/Links";
import styles from "./navbar.module.css"

const NavBar = () => {
    return(
        <div className={styles.container}>
                <div className={styles.logo}>Battle-Realm</div>
                <Links/>
        </div>
        
    ) 
  }
  export default NavBar;