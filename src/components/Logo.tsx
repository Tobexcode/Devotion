import Image from 'next/image';
import React from 'react'
import  logo1  from "../../img/logo1.svg";

declare module '*.svg' {
    
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
   
  }

function Logo(props: any) {
    const { renderDefault, title } = props;

    return (
        <div className="flex items-center space-x-2">
            <Image
                className="rounded-full object-cover"
                height={50}
                width={50}
                src={logo1}
                alt='logo'
            />
            <>{renderDefault(props)}</>
        </div> 
    )
}

export default Logo