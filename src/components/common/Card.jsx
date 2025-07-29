import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  title,
  description,
  image,
  imageAlt = '',
  className = '',
  onClick,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden ${
        hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  hoverEffect: PropTypes.bool,
};

export default Card;
