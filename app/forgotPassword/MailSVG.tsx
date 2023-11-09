import * as React from "react";
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#3B71FE"
      fillRule="evenodd"
      d="M3.652 2.667h9.697c1.004 0 1.818.819 1.818 1.83v6.71c0 1.01-.814 1.83-1.818 1.83H3.652a1.824 1.824 0 0 1-1.818-1.83V4.497c0-1.011.814-1.83 1.818-1.83Zm-.606 3.27v5.27c0 .337.271.61.606.61h9.697a.608.608 0 0 0 .606-.61v-5.27l-4.412 3.11a1.809 1.809 0 0 1-2.085 0l-4.412-3.11ZM13.953 4.45 8.848 8.047a.603.603 0 0 1-.695 0L3.047 4.45a.608.608 0 0 1 .605-.563h9.697c.319 0 .58.248.604.563Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
