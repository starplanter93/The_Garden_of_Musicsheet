import * as icons from './icons';

interface IconProps {
  icon: keyof typeof icons;
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  color?: 'black' | 'gray' | 'green' | 'lightgray' | 'red' | 'white';
}

const Icon = ({
  icon = 'FaGuitar',
  size = 'm',
  color = 'black',
}: IconProps) => {
  const SVG = icons[icon];

  return <SVG />;
};

export default Icon;
