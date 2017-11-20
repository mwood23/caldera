import { h, Component } from 'preact';
import cx from 'classnames';
import style from './style';
import ReactModal from 'react-modal';
import Heading from '../heading';
import ModalContactItem from '../modalContactItem';
import scrollIntoView from 'scroll-into-view';

const scrollIntoViewOptionsResults = {
	time: 500,
	align: {
		topOffset: 75
	}
};

export default class Header extends Component {
	// This handles opening and closing the hamburger menu on mobile
	// Also controls whether a user has scrolled or not on the page
	state = {
		open: false,
		scrolled: false,
		showModal: false,
		emailCopied: false
	};

	_bindScroll = () => {
		// Use passive event listener if available
		let supportsPassive = false;
		try {
			const opts = Object.defineProperty({}, 'passive', {
				get: () => {
					supportsPassive = true;
				}
			});
			window.addEventListener('test', null, opts);
		} catch (e) {} // eslint-disable-line no-empty

		window.addEventListener(
			'scroll',
			this._handleScroll,
			supportsPassive ? { passive: true } : false
		);
	};

	_unbindScroll = () => {
		window.removeEventListener('scroll', this._handleScroll);
	};

	_handleScroll = () => {
		// Ugly cross-browser compatibility
		const top =
			document.documentElement.scrollTop ||
			document.body.parentNode.scrollTop ||
			document.body.scrollTop;
		// Test < 1 since Safari's rebound effect scrolls past the top
		if (top < 20) {
			this.setState({ scrolled: false });
		} else {
			this.setState({ scrolled: true });
		}
	};

	toggle = () => this.setState({ open: !this.state.open });
	// This handle changing the nav bar color on scroll

	handleOpenModal = () => this.setState({ showModal: true });

	handleCloseModal = () => {
		this.setState({ showModal: false, emailCopied: false });

		// This was getting called before the re-render which was causing the fadeOut class to be appeneded to the wrong element. Worst case if this doesn't work is that the modal closes with no fade out animation.
		setTimeout(() => {
			let modalOverlay = document.getElementsByClassName('ReactModal__Overlay');
			let modalBody = document.getElementsByClassName('ReactModal__Content');
			modalOverlay[0].classList.add(style.fadeOut);
			modalBody[0].classList.add(style.fadeOut);
		}, 0);
	};

	copyToClipboard = () => {
		// It looks like you can only copy to clipboard from inputs that are on the dom. This creates an element a user will not see with the email to place it on their clipboard.
		// https://stackoverflow.com/questions/31593297/using-execcommand-javascript-to-copy-hidden-text-to-clipboard
		let tempInput = document.createElement('input');
		tempInput.style = 'position: absolute; left: -1000px; top: -1000px;';
		tempInput.value = 'marcus@calderadigital.com';
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand('copy');
		document.body.removeChild(tempInput);

		this.setState({ emailCopied: true });
	};

	viewChange = (e, section) => {
		scrollIntoView(
			document.getElementById(section),
			scrollIntoViewOptionsResults
		);
	};

	componentDidMount() {
		this._bindScroll();
	}
	componentWillUnmount() {
		this._unbindScroll();
	}

	render({}, { open, scrolled, showModal, emailCopied }) {
		let copyEmail;
		const mq = window.matchMedia('(min-width: 500px)');
		if (mq.matches) {
			copyEmail = <span onClick={this.copyToClipboard}>COPY</span>;
			if (emailCopied) {
				copyEmail = (
					<object
						className={style.copyImage}
						data="../../assets/checkmark/checkmark.svg"
						type="image/svg+xml"
					/>
				);
			}
		}

		let logoSrc = !this.state.scrolled
			? '../../assets/calderaWhite.svg'
			: '../../assets/calderaGreen.svg';

		return (
			<header
				className={cx(
					style.header,
					open && style.open,
					scrolled && style.scrolled
				)}
			>
				<img src={logoSrc} alt="Caldera Logo" />
				<nav>
					<span onClick={e => this.viewChange(e, 'heroSpaceContainer')}>
						Home
					</span>
					<span onClick={e => this.viewChange(e, 'services')}>Services</span>
					<span onClick={e => this.viewChange(e, 'work')}>Work</span>
					<span onClick={e => this.viewChange(e, 'workWithUs')}>
						Work With Us
					</span>
					<button onClick={this.handleOpenModal}>Contact Us</button>
				</nav>
				<ReactModal
					isOpen={showModal}
					contentLabel="onRequestClose Example"
					overlayClassName={style.modalOverlay}
					className={style.modal}
					closeTimeoutMS={300}
					onRequestClose={this.handleCloseModal}
				>
					<Heading text="GIVE US A SHOUT" />
					<img
						className={style.close}
						onClick={this.handleCloseModal}
						src="../../assets/close.png"
					/>
					<div>
						<p className={style.copy}>
							{' '}
							We'd love to hear from you! <b>When calling, ask for Marcus.</b>
						</p>
						<ModalContactItem
							image={'../../assets/phone.png'}
							contactTitle={'Phone (Preferred)'}
							contactDetail={<a href="tel:+1-276-952-8365">276-952-8365</a>}
						/>
						<ModalContactItem
							image={'../../assets/mail.png'}
							contactTitle={'Email'}
							contactDetail={<p>marcus@calderadigital.com</p>}
							copyIcon={copyEmail}
						/>
					</div>
				</ReactModal>
				{/* <Hamburgler open={open} scrolled={scrolled} onClick={this.toggle} /> */}
			</header>
		);
	}
}

// hamburgler menu
// const Hamburgler = ({ open, scrolled, ...props }) => (
// 	<div
// 		class={cx(style.hamburgler, scrolled && style.scrolled)}
// 		open={open}
// 		{...props}
// 	>
// 		<div class={style.hb1} />
// 		<div class={style.hb2} />
// 		<div class={style.hb3} />
// 	</div>
// );
