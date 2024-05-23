declare module 'react-world-flags' {
    import { FC, ComponentProps } from 'react';
  
    interface FlagProps extends ComponentProps<'img'> {
      code: string;
    }
  
    const Flag: FC<FlagProps>;
    export default Flag;
  }
  