interface ISvg {
  color: string;
}

export const Resume: React.FC<ISvg> = ({color}) => {
  return (
    <svg width="96" height="97" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="96" height="96" rx="48" fill={color}/>
      <path d="M37.6381 65.7699L66.3839 50.8484C66.576 50.7477 66.7312 50.6196 66.8379 50.4736C66.9446 50.3277 67 50.1678 67 50.0057C67 49.8437 66.9446 49.6837 66.8379 49.5378C66.7312 49.3919 66.576 49.2638 66.3839 49.163L37.6381 34.232C36.5714 33.6797 35 34.1749 35 35.07V64.9224C35 65.8175 36.5714 66.3222 37.6381 65.7699Z" fill="#0F0F0F"/>
      <rect y="0.5" width="96" height="96" rx="48" stroke="#0F0F0F"/>
    </svg>
  )
}