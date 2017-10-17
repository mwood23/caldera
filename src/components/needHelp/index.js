import {h, Component} from 'preact';
import style from './style';
import SectionPhoto from '../sectionPhoto';
import Section from '../section';
import Heading from '../heading';

export default class NeedHelp extends Component {

  // Initialize
  // https://codepen.io/anon/pen/oGMjBR
  componentDidMount() {

  }

  render() {
    return (
      <div className={style.whatWeDo}>
        <Heading text={'NEED HELP?'}></Heading>
        <Section>
          <div>
            Need help on a project or have a problem? Let us help! Call <a href="tel:+1-276-952-8365">276-952-8365</a> and ask for Marcus.
          </div>
        </Section>
      </div>
    )
  }
};
