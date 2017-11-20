import style from './style';

const Section = ({ id, children }) => (
	<section id={id} className={style.section}>
		{children}
	</section>
);

export default Section;
