import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  innerClassName?: string;
}

const Container = ({
  children,
  className,
  as: Component = 'div',
  innerClassName,
  ...props
}: ContainerProps) => {
  return (
    <Component 
      className={cn(
        'w-full px-4 sm:px-6 lg:px-8 mx-auto',
        className
      )}
      {...props}
    >
      <div className={cn('max-w-7xl mx-auto w-full', innerClassName)}>
        {children}
      </div>
    </Component>
  );
};

export default Container;
