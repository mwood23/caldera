import { h, Component } from 'preact';
import cx from 'classnames';
import { Link } from 'preact-router/match';
import style from './style';
import ReactModal from 'react-modal';
import Heading from '../heading';
import ModalContactItem from '../modalContactItem';

export default class Header extends Component {
	// This handles opening and closing the hamburger menu on mobile
	// Also controls whether a user has scrolled or not on the page
	state = { open:false, scrolled:false, showModal: false, emailCopied: false };

	// This handle changing the nav bar color on scroll
	componentDidMount() {
		this._bindScroll()
	}

	componentWillUnmount() {
		this._unbindScroll()
	}

	_bindScroll = () => {
		// Use passive event listener if available
		let supportsPassive = false
		try {
			const opts = Object.defineProperty({}, 'passive', {
				get: () => {
					supportsPassive = true
				}
			})
			window.addEventListener('test', null, opts)
		} catch (e) {} // eslint-disable-line no-empty

		window.addEventListener('scroll', this._handleScroll, supportsPassive
			? {
				passive: true
			}
			: false)
	}

	_unbindScroll = () => {
		window.removeEventListener('scroll', this._handleScroll)
	}

	_handleScroll = () => {
		// Ugly cross-browser compatibility
		const top = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
		// Test < 1 since Safari's rebound effect scrolls past the top
		if (top < 20) {
			this.setState({ scrolled: false });
		} else {
			this.setState({ scrolled: true });
		}
	}

	toggle = () => this.setState({ open: !this.state.open });

	handleOpenModal = () => this.setState({ showModal: true });

	handleCloseModal = (e) => {
		this.setState({ showModal: false, emailCopied: false });

		// This was getting called before the re-render which was causing the fadeOut class to be appeneded to the wrong element. Worst case if this doesn't work is that the modal closes with no fade out animation.
		setTimeout(() =>{
			let modalOverlay = document.getElementsByClassName('ReactModal__Overlay');
			let modalBody = document.getElementsByClassName('ReactModal__Content');
			modalOverlay[0].classList.add(style.fadeOut)
			modalBody[0].classList.add(style.fadeOut)
		 }, 0);
	}

	copyToClipboard = (e, value) => {

		// It looks like you can only copy to clipboard from inputs that are on the dom. This creates an element a user will not see with the email to place it on their clipboard.
		// https://stackoverflow.com/questions/31593297/using-execcommand-javascript-to-copy-hidden-text-to-clipboard
		var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px;";
		tempInput.value = '<email here>';
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

		this.setState({ emailCopied: true });
	}

	viewChange = (event) => {
		if (window.location.pathname !== event.target.pathname) {
			this.setState({ open:false, scrolled:false });
		}
	};

	render({ url }, { open, scrolled, showModal, emailCopied, ...props }) {

		let copyEmail
		const mq = window.matchMedia( "(min-width: 500px)" );
		let pageHero
		if (mq.matches) {
			copyEmail = <span onClick={(event) => {this.copyToClipboard(event, 'email')}}>COPY</span>
			if (emailCopied) {
				copyEmail = <object className={style.copyImage} data="../../assets/checkmark/checkmark.svg" type="image/svg+xml"></object>
			}
		}

		let logoSrc = !this.state.scrolled ? '../../assets/calderaWhite.svg' : '../../assets/calderaGreen.svg'

		return (
			<header className={cx(style.header, open && style.open, scrolled && style.scrolled)}>
					<img src={logoSrc} alt="Caldera Logo" />
				<nav>
					<Link onClick={this.viewChange} href="/">Home</Link>
					{/* <Link onClick={this.viewChange} href="/work">Work</Link>
					<Link onClick={this.viewChange} href="/careers">Careers</Link> */}
					{/* <Link onClick={this.viewChange} href="/ourStory">Our Story</Link> */}
					<button onClick={this.handleOpenModal}>Contact Us</button>
				</nav>
				<ReactModal
					isOpen={showModal}
					contentLabel="onRequestClose Example"
					overlayClassName={style.modalOverlay}
					className={style.modal}
					closeTimeoutMS={300}
					onRequestClose={this.handleCloseModal}>
					<Heading text="GIVE US A RING" />
					<img className={style.close} onClick={this.handleCloseModal} src="../../assets/close.svg" />
					<div>
						<p className={style.copy}>Ready to get started or have questions for us? We look forward to hearing from you! <b>When calling, ask for Marcus.</b></p>
						<ModalContactItem image={'../../assets/phone.svg'} contactTitle={'Phone (Preferred)'} contactDetail={<a href="tel:+1-888-888-8888">phone</a>} />
						<ModalContactItem image={'../../assets/mail.svg'} contactTitle={'Email'} contactDetail={<p>email here</p>} copyIcon={copyEmail} />
						<ModalContactItem image={'../../assets/fax.svg'} contactTitle={'Fax'} contactDetail={<p>phone</p>} />
					</div>
				</ReactModal>
				<Hamburgler open={open} scrolled={scrolled} onClick={this.toggle} />
			</header>
		);
	}
}

// hamburgler menu
const Hamburgler = ({ open, scrolled, ...props }) => (
	<div class={cx(style.hamburgler, scrolled && style.scrolled)} open={open} {...props}>
		<div class={style.hb1} />
		<div class={style.hb2} />
		<div class={style.hb3} />
	</div>
);
