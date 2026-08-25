import {
  BarChart2,
  BarChart3,
  CalendarCheck,
  Command,
  Globe,
  Heart,
  List,
  Lock,
  MapPin,
  PenTool,
  Share2,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const iconMap = {
  'map-pin': MapPin,
  list: List,
  'calendar-check': CalendarCheck,
  target: Target,
  'trending-up': TrendingUp,
  users: Users,
  heart: Heart,
  zap: Zap,
  'bar-chart-3': BarChart3,
  'bar-chart-2': BarChart2,
  globe: Globe,
  lock: Lock,
  'pen-tool': PenTool,
  'share-2': Share2,
  command: Command,
  wallet: Wallet,
} as const;

export type IconName = keyof typeof iconMap;

type SiteIconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function SiteIcon({ name, className, size = 18 }: SiteIconProps) {
  const Icon: LucideIcon = iconMap[name];
  return <Icon className={className} size={size} strokeWidth={2} />;
}
