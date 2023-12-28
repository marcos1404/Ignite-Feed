import { PencilSimpleLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://s3-alpha-sig.figma.com/img/7b4c/c8ab/47e4b9b0ce3b2198883be1830957f349?Expires=1704067200&Signature=lrYMPaOPVEsPC~9LDFDVnwTqBlNcngPotR5rz-Agoaq2aIl-~bQvlhPBdV2oDESFBIalMiHayMtApW9gk5X-va4fsv02qiVXPlWg6Q5paYa9wdw8uchVuEmdkyxqxXvuKx8bJnYG~~b038VGwL21Ka29AfYtOXkAJOiMCEZSNbJs4Ri7irTKrbW6ZmYxKv6DZWOPGWL2OtFleW7M8ZGgAy-QkZmOzJAeFspCjPtFq2fQ16sx17K9z3xdn~f-sn7efWSA1Hs29H7xxJo4dhgLWtPkTMzmFinyyzBLSXTrOsBmvsCvoU13yBAxXqBhmrXE28ndI7oPC4RnK6clbKQV4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            />
            <div className={styles.profile}>
                <Avatar  src='https://avatars.githubusercontent.com/u/50412001?v=4'/>
                
                <strong>Marcos Vinicius</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}