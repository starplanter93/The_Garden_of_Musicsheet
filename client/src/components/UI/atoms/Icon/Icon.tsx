import * as icons from './icons';

interface IconProps {
  icon: keyof typeof icons;
}

const Icon = ({ icon }: IconProps) => {
  const SVG = icons[icon];

  return <SVG />;
};

export default Icon;
