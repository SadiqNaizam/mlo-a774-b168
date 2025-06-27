import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className }) => {
  console.log('BrandLogo loaded');

  return (
    <Link
      to="/"
      className={cn(
        'flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-gray-900 transition-colors',
        className
      )}
    >
      <Rocket className="h-6 w-6 text-indigo-600" />
      <span>SwiftLogin</span>
    </Link>
  );
};

export default BrandLogo;