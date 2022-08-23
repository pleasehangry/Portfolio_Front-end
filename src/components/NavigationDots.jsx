import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {['home', 'about', 'contact', 'work', 'skills', 'testimonial'].map((item, index) => (
                <a
                    onClick={() => {}}
                    key={item + index}
                    className="app__navigation-dot"
                    href={`#${item}`}
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    );
};

export default NavigationDots;
