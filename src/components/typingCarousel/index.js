import { h, Component } from 'preact';
import style from './style';

export default class TypingCarousel extends Component {
	// Initialize
	// https://codepen.io/gschier/pen/jkivt
	componentDidMount() {
		console.log('componentDidMount');
		let TxtRotate = function(el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 10) || 2000;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};

		TxtRotate.prototype.tick = function() {
			let i = this.loopNum % this.toRotate.length;
			let fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

			let that = this;
			let delta = 300 - Math.random() * 100;

			if (this.isDeleting) {
				delta /= 2;
			}

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
			}

			setTimeout(() => {
				that.tick();
			}, delta);
		};

		// window.onload = function() {
		console.log('on load');
		let elements = document.getElementsByClassName('txt-rotate');
		for (let i = 0; i < elements.length; i++) {
			let toRotate = elements[i].getAttribute('data-rotate');
			let period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		let css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
		document.body.appendChild(css);
		// };
	}

	render() {
		return (
			<div className={style.typingCarousel}>
				<div>
					We increase your digital&nbsp;
					<span
						class="txt-rotate"
						data-period="2000"
						data-rotate="[ &quot;engagement.&quot;, &quot;influence.&quot;, &quot;presence.&quot;, &quot;followership.&quot; ]"
					/>
				</div>
			</div>
		);
	}
}
