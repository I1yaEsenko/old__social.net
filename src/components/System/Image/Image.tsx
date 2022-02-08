import React from 'react';
import classNames from 'classnames'
import './Image.scss'

type ImageType = {
   src: string
   alt: string
   className: string
   width: number
   height: number
   circle?: boolean
} & typeof defaultProps;

const defaultProps = {
   src: 'https://via.placeholder.com/100x100',
   alt: 'image name',
   className: '',
   width: 100,
   height: 100,
   circle: false,
}

const Image = ({src, alt, className, width, height, circle, ...attrs}: ImageType) => {

   if (!src) {
      src = `https://via.placeholder.com/${width}x${height}`
   }

   const classes = classNames(
      className,
      {circle}
   )

   return (
      <img
         src={src}
         alt={alt}
         className={classes}
         width={width}
         height={height}
         {...attrs}
      />
   );
};


Image.defaultProps = defaultProps


export default Image;