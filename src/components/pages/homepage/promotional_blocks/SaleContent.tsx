import React from 'react';
// import any = jasmine.any;


const SaleContent = (props: any) => {
    const {title, description, url} = props
    return (
        <>
            <div className="row">
                <div className="size-card">
                    <div className="card">
                        <div className="card-image">
                            <img src={url} alt=""/>
                            <span className="black-text card-title">{title}</span>
                        </div>
                        <div className="card-content">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SaleContent;
