import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
