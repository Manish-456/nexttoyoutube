import React from 'react'


 type LeftbarProps = {
  text : string,
  action : () => void,
  icon:  React.ReactNode;
  className : React.CSSProperties | string;
  
 }
const LeftbarItems = ({text, action, icon, className} : LeftbarProps)  => {

  return (
    <>
      <div className={`${className} flex gap-2 text-white text-sm h-10 items-center cursor-pointer px-3 mb-[1px rounded-lg hover:bg-white/[0.15]`} onClick={action}>
         
        <span className='text-xl mr-5'>{icon}</span>
        <span>{text}</span>

      </div>

    </>
  )
}

export default LeftbarItems
