import React from 'react';
import PropTypes from 'prop-types';

const Section = ({
  children,
  title,
  subtitle,
  id,
  className = '',
  containerClass = '',
  titleClass = '',
  subtitleClass = '',
  ...props
}) => {
  return (
    <section 
      id={id} 
      className={`py-10 md:py-17 ${className}`}
      {...props}
    >
      <div className={`container mx-auto px-4 ${containerClass}`}>
        {(title || subtitle) && (
          <div className={`text-center mb-12 ${titleClass}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${subtitleClass}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  containerClass: PropTypes.string,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
};

export default Section;
