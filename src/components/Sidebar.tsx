import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"

export const Sidebar = () => {
return <aside className={styles.sidebar}>
    <img className={styles.cover}src="https://media.istockphoto.com/photos/beaver-at-sea-observing-nature-picture-id175602763?b=1&k=20&m=175602763&s=170667a&w=0&h=hgBvEAniQmjqG7Dqf1eSNC6rd5iWlNYnYF3HfIobjyM="/>
    <div className={styles.profile}>
    <Avatar src="https://github.com/thiagoCalazans-dev.png"/>
    <strong>Thiago Calazans</strong>
    <span>Web Developer</span>
    </div> 
    <footer>       
        <a href="#"> <PencilLine/> Editar seu perfil</a>
    </footer>
</aside>
}