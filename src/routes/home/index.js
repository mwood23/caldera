import { h, Component } from 'preact';
import style from './style';
import HeroSpace from '../../components/heroSpace';
import WhatWeDo from '../../components/whatWeDo';
// import HowWeDoIt from '../../components/howWeDoIt';
import WorkWithUs from '../../components/workWithUs';
// import NeedHelp from '../../components/needHelp';
import Heading from '../../components/heading';
import Section from '../../components/section';


const Img = ({img}) => (
  <div className={style.companyLogoContainer}>
		<img  src={img} />
	</div>
);

export default class Home extends Component {
	render() {
		return (
			<div className={style.home}>
				<HeroSpace></HeroSpace>
        <Section>
          <Heading text={'WELCOME'} />
          <Section>
            <div>
              Caldera is a full-service digital agency that focuses on measurable bottom line impact for businesses. Whether it be contracting/consulting on a tough problem or designing a new experience for your customers we'd love to help!
            </div>
          </Section>
        </Section>
        {/* <div className={style.logoSection}>
          <Img img={'https://woodsproduce.com/assets/wplogo1.png'} />
          <Img style={{filter: 'none'}} img={'https://i.vimeocdn.com/portrait/9885804_300x300'} />
        </div> */}
        <Section>
          <WhatWeDo></WhatWeDo>
        </Section>
        {/* <Section>
          <HowWeDoIt></HowWeDoIt>
        </Section> */}
        {/* <Section>
          <NeedHelp></NeedHelp>
        </Section> */}
        <Section>
          <WorkWithUs></WorkWithUs>
        </Section>
			</div>
		);
	}
}
