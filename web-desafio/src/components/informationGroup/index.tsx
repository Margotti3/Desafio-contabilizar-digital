import React from 'react';
import './styles.css';

interface InformationProps {
    title1: string;
    information1: string;
    title2: string;
    information2: string;
}

const InformationGroup: React.FC<InformationProps> = (props) => {
    return(
        <div className="informationGroup">
            <div className="information"><b>{props.title1}:</b> {props.information1}</div>
            <div className="information"><b>{props.title2}:</b> {props.information2}</div>
        </div>
    );
};

export default InformationGroup;