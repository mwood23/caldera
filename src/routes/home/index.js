import { h, Component } from 'preact';
import style from './style';
import HeroSpace from '../../components/heroSpace';
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
				<Heading text={'What we do'}></Heading>
				<Section>Caldera is a full-service digital agency focused on delivering you bottom line performance gains using all things digital. This includes website design, application development, consutling, contracting, social media, automation, and full-service bounty marketing.</Section>
				<Heading text={'Who we\'ve worked with'}></Heading>
				<Section>
					<div>
						<Img img={'https://woodsproduce.com/assets/wplogo1.png'} />
					</div>
				</Section>
			</div>
		);
	}
}
