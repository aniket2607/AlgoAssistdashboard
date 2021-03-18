import logo from './developer.svg';

const SvgIcon = ({ src, width, height }) => (
  <img src={logo} alt={src} with={width} height={height} />
);

export default SvgIcon;
