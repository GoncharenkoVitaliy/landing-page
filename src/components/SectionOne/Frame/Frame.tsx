import ContentOne from '../ContentOne/ContentOne';
import styles from './Frame.module.css';

export default function Frame() {
  return (
    <div className={styles.video_container}>
        {/* <iframe
          className={styles.mbr_background_video}
          src="https://www.youtube.com/embed/meH3eZS8oV0?autoplay=1&amp;mute=0&amp;controls=0&amp;enablejsapi=1&amp;allowfullscreen=true&amp;iv_load_policy=3&amp;modestbranding=1&amp;origin=https%3A%2F%2Fai-builder.mobirise.com&amp;rel=0&amp;mode=transparent&amp;showinfo=0&amp;html5=1&amp;version=3&amp;playerapiid=iframe_YTP_1624972482514&amp;widgetid=1"
        ></iframe> */}
        <ContentOne />
      </div>
  )
}
