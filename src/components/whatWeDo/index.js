import {h, Component} from 'preact';
import style from './style';
import SectionPhoto from '../sectionPhoto';
import Heading from '../heading';

export default class WhatWeDo extends Component {

  // Initialize
  // https://codepen.io/anon/pen/oGMjBR
  componentDidMount() {

  }

  render() {
    return (
      <div className={style.whatWeDo}>
        <Heading text={'SERVICES'}></Heading>
        <SectionPhoto image={<img src="../../assets/webDevelopment.svg"
          alt="Web Design/Development"
        />} rightAlignedPhoto>
        <h3>Web Design/Development</h3>
        <div>
          We specialize in web design and development utilizing the newest technologies such as Angular, React/Preact, Node/Express, and Firebase. In addition, we build mobile applications using Ionic and use the latest Web APIs to create Progressive Web Apps. By default, we always encrypt our websites with SSL/Https.
        </div>
        </SectionPhoto>
        <SectionPhoto image={<img src="../../assets/branding.svg"
          alt="Branding and Content Curation"
        />}>
        <h3>Branding and Content Curation</h3>
        <div>
          Not sure of the message you want to communicate to your audience or having a difficult time in conveying it? After learning more about your brand and market we can fill in those gaps with a holistic approach to bring consistency to your online message.
        </div>
        </SectionPhoto>
        <SectionPhoto image={<img src="../../assets/processAutomation.svg"
          alt="Process Automation"
        />} rightAlignedPhoto>
        <h3>Process Automation</h3>
        <div>
          Creating reports, sending files, and aggregating data takes time. We utilize all things digital to automate your processes and save you time.
        </div>
        </SectionPhoto>
      </div>
    )
  }
};
