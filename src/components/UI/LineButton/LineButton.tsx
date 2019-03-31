import React, { ReactNode } from 'react';

import buttonStyle from './LineButton.scss';

interface LineButtonProps {
    isVisible: boolean;
    color: string;
    toggle: () => void;
    children: ReactNode;
}

export const LineButton = (props: LineButtonProps) => {
    const elements = React.Children.toArray(props.children);
    const classList = [buttonStyle.button, buttonStyle.active].join(' ');
    
    
    let inlineStyle = {
        borderColor: props.color,
        background: 'none'
    };
    if (props.isVisible) {
        inlineStyle.background = props.color;
    }
    
    return (
        <button onClick={props.toggle} className={classList}>
            <span style={inlineStyle}/>
            {elements}
        </button>
    );
};

