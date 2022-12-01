import React , { useState } from 'react';
import ReactDOM from 'react-dom/client';

interface ComponentProps {
    children?: any;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

const Example = ({children, className, onClick }: ComponentProps): JSX.Element => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count => count + 1);
  };

  const handledecrease = () => {
    setCount(count => count - 1);
  };

  return (
    <>
    {className}
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handledecrease}>-</button>
    </>
  );
};

export default Example;

if (document.getElementById('example')) {
    const element = document.getElementById('example')!;
    const className = element.getAttribute("className")!;
    ReactDOM.createRoot(element).render(<Example className={className}>{element.innerHTML}</Example>)
}

