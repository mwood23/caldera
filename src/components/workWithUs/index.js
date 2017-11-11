import { h, Component } from 'preact';
import style from './style';
// import SectionPhoto from '../sectionPhoto';
import Section from '../section';
import Heading from '../heading';

export default class WorkWithUs extends Component {
	// Initialize
	// https://codepen.io/anon/pen/oGMjBR
	componentDidMount() {}

	render() {
		return (
			<div className={style.whatWeDo}>
				<Heading text={'WORK WITH US'} />
				<Section>
					<div>
						Are you a freelance designer or programmer? We're always looking for
						talented folks to help out with our projects. Send an email to{' '}
						<b>marcus@calderadigital.com</b> and include an example of your work
						or link to your portfolio.
					</div>
				</Section>
			</div>
		);
	}
}
