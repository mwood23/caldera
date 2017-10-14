import {h, Component} from 'preact';
import style from './style';
import SectionPhoto from '../sectionPhoto';
import Heading from '../heading';

export default class HowWeDoIt extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className={style.howWeDoIt}>
        <Heading text={'HOW WE DO IT'}></Heading>
        <div>
          <div id="btns" className={style.btns}>
            <div class={style.btn} onclick="window.location='#'">
              <img className={style.icon} src="../../assets/meeting.png" />
              <h2>Meeting</h2>
              <p>The best product comes when there's familiarity with the industry and problem you're experiencing.</p>
            </div>
            <div class={style.btn} onclick="window.location='#'">
              <img className={style.icon} src="../../assets/content.png" />
              <h2>Content</h2>
              <p>We use drones and cameras to make sure we get all of the visual content necessary. Then we work with you to develop messaging.</p>
            </div>
            <div class={style.btn} onclick="window.location='#'">
              <img className={style.icon} src="../../assets/code.png" />
              <h2>Develop</h2>
              <p>Delivering a polished final product takes iteration. We aim to give demos every two weeks of our work to make sure it's fitting your needs perfectly.</p>
            </div>
            <div class={style.btn} onclick="window.location='#'">
              <img className={style.icon} src="../../assets/flag.png" />
              <h2>Delivery</h2>
              <p>Everything we create we'll send your way and we'll take care of the hosting on our end.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
