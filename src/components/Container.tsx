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
        'w-full mx-auto px-6 sm:px-10 md:px-16 min-[900px]:max-w-[744px] min-[900px]:px-0 lg:max-w-[1050px]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
