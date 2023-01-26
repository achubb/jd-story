import React, { FC } from 'react'
import Image from "next/image";
import * as Styled from "./NextImage.styles"

export interface NextImageProps extends React.ComponentPropsWithoutRef<'img'> {
    source?: string
    alt?: string
    width?: number
    height?: number
    fill?: boolean
    object?: string
}

const NextImage: FC<NextImageProps> = ({
    source = '/img/spot-background-demo.jpg',
    alt = 'Spot Background Demo',
    width,
    height,
    fill = false
}) : JSX.Element => {
    return (
        <Styled.Image>
            <Image 
                src={source} 
                alt={alt}
                width={width}
                height={height}
                fill={fill}
            ></Image>
        </Styled.Image>
    )
}

export default NextImage;