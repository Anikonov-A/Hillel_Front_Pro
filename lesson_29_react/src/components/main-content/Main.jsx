import styles from './Main.module.scss'
import CoverImage from "../cover-image/CoverImage";

export default function Main(){
    const imgArr =[
        '/img/and-justice-for-all.jpg',
        '/img/black-album.jpg',
        '/img/death-magnetic.jpg',
        '/img/garage_inc.jpg',
        '/img/hardwired.jpeg',
        '/img/kill-em-all.jpg',
        '/img/load.jpg',
        '/img/lulu.jpeg',
        '/img/master-of-puppets.jpg',
        '/img/reload.jpg',
        '/img/ride-the-lightning.jpg',
        '/img/seasons.jpg',
        '/img/sm_cover.jpg',
        '/img/st-anger.jpg',
    ]

    return(
        <div>
           <div className={styles.grid}>
               {
                   imgArr.map((item,index) =>(
                       <CoverImage key={index} src={item} alt='img' height="300px" width="300px" />
                   ))
               }
           </div>
        </div>
    )
}
