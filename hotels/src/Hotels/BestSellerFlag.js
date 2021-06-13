import React from 'react';

const BestSellerFlag = (props) => {
    if (props.isBestSeller) {
        return <span className="hotel__best-seller-flag">BestSeller</span>
    } else {
        return null;
    }
}

export default BestSellerFlag;