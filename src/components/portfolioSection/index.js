import { h, Component } from 'preact';
import style from './style';
import MonitorFrame from '../../assets/monitorFrame.png';
import PhoneFrame from '../../assets/phoneFrame.png';
import Heading from '../heading';
import ReactPlayer from 'react-player';
import cx from 'classnames';

const DesktopFrame = props => (
	<div className={style.video}>
		<img src={MonitorFrame} />
		<div>
			<ReactPlayer url={props.url} playing width="93%" height="80%" />
		</div>
	</div>
);

const MobileFrame = props => (
	<div className={style.mobileVideo}>
		<img src={PhoneFrame} />
		<div>
			<ReactPlayer url={props.url} playing width="88%" height="80%" />
		</div>
	</div>
);

const PortfolioItem = props => (
	<div className={style.portfolioBody}>
		<div className={style.demoContainer}>
			{props.desktopVideo ? (
				<div>
					<DesktopFrame url={props.desktopVideo} />
				</div>
			) : null}

			{props.mobileVideo ? (
				<div
					className={cx(style.mobileVideoContainer, {
						[`${style.onlyMobile}`]: !props.desktopVideo
					})}
				>
					<MobileFrame url={props.mobileVideo} />
				</div>
			) : null}
		</div>
		<div className={style.body}>
			<h3>{props.name}</h3>
			<span>{props.about}</span>
			<p>
				<b>Project Overview:</b> {props.overview}
			</p>
			<p>
				<b>Tech Stack:</b> {props.techStack}
			</p>
		</div>
	</div>
);

export default class PortfolioSection extends Component {
	render() {
		return (
			<div className={style.portfolioSection}>
				<Heading text={'WORK'} />
				<PortfolioItem
					desktopVideo="https://streamable.com/gvbuu"
					mobileVideo="https://streamable.com/k40ln"
					name="Gamebyrd"
					about="On-demand video game delivery service"
					overview="POC for an on-demand video game delivery service focused on retro and new video games. The digital media revolution has upended the brick-and-mortar movie rental companies that also rented video games. This swift change left gamers with only subscription based services or a limited selection at small kiosks to rent from. Gamebyrd's delivery model bridges the gap by delivering game rentals to consumers within two hours or less."
					techStack="AngularJS, MongoDB, Node, Express, Digital Ocean, Materialize,
        Angular Material"
				/>
				<PortfolioItem
					mobileVideo="https://streamable.com/lf3s2"
					name="Friendzone"
					about="Event based dating for millenials"
					overview="Friendzone is a dating app that focuses on fostering in person meet ups through events. To start you must fill out a full profile and in order to be swiped on, create an event. After people have swiped on your event you are able to choose one person you would like to go out with. This opinionated design inihibits the paradox of choice experienced by other apps and encourages singles looking for a relationship to sign up."
					techStack="AngularJS, Ionic, Firebase, Node, Express, Nginx, Digital Ocean, Grunt, HockeyApp, Cordova, Facebook Auth API, Google Maps API"
				/>
				<PortfolioItem
					desktopVideo="https://streamable.com/qvntd"
					mobileVideo="https://streamable.com/a6pm4"
					name="Wood's Produce"
					about="Full-line perishable foods distributor in the Mid-Atlantic specializing in fresh fruits and vegetables"
					overview="Wood's Produce is one of the largest independent produce wholesalers in the state of Virginia. The new website's goal was to establish a larger digital presence and showcase the family atmosphere of the company. With those goals in mind, we determined a video was crucial that featured their employees, products, and facilities instead of leaning on stock photography. Used a drone to capture facility imagery and dedicated a week on site to learn the story and gather other assets for the site."
					techStack="Preact, Webpack, Firebase Hosting, Mapbox, Single Page App (SPA), Progressive Web App (PWA)"
				/>
			</div>
		);
	}
}
