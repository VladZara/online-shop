import "./descriptionBlock.css"
const DescriptionBlock = () => {
    return (
        <div className="container-descrip">
            <div className="card-image">
            <img className="descrip-image" src="./img/DescripBlock.png" alt=""/>
            </div>
                <div className="card-text">
                    <h2 className="descrip-title">Leading expert on the Russian market
                        of professional cosmetics from Korea - KKshop™</h2>
                    <p>We make the world of professional Korean cosmetics available
                        to every cosmetologist in Russia, providing an opportunity to work
                        with the best achievements of Korean scientists and specialists in
                        the field of health and skin care</p>
                    <a href="!#">More Info &rArr;</a>
                </div>
            <div className="descrip-card">
                <span className="descrip-cards">Perfect composition and efficiency</span>
                <span className="descrip-cards">Naturalness and environmental friendliness</span>
                <span className="descrip-cards">Cash and non-cash payment</span>
                <span className="descrip-cards">Delivery all around Russia</span>
            </div>
        </div>
    )
}
export default DescriptionBlock;
