import React from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import mypic_1 from '../images/mypic_1.JPG';
import mypic_2 from '../images/mypic_2.JPG';
import mypic_3 from '../images/mypic_3.JPG';

const EnhancedSwipeableViews = autoPlay(SwipeableViews);

const Photo = () => {
    return (
        <EnhancedSwipeableViews enableMouseEvents interval={10000}>
            <img src={mypic_1} alt="mypic_1" width="1000" height="682"/>
            <img src={mypic_2} alt="mypic_2" width="1000" height="682"/>
            <img src={mypic_3} alt="mypic_3" width="1000" height="682"/>
        </EnhancedSwipeableViews>
    );
}

export default Photo;