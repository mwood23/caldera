import { h, Component } from 'preact';
import style from './style';
import HeroSpace from '../../components/heroSpace';
import WhatWeDo from '../../components/whatWeDo';
import HowWeDoIt from '../../components/howWeDoIt';
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
        {/* <div className={style.logoSection}>
          <Img img={'https://woodsproduce.com/assets/wplogo1.png'} />
          <Img style={{filter: 'none'}} img={'https://i.vimeocdn.com/portrait/9885804_300x300'} />
        </div> */}
        <Section>
          <WhatWeDo></WhatWeDo>
        </Section>
        <Section>
          <HowWeDoIt></HowWeDoIt>
        </Section>
			</div>
		);
	}
}
