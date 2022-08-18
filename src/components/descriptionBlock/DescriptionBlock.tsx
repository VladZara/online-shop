import "./DescriptionBlock.css"
const DescriptionBlock = () => {
    return (
        <div className="container-descrip">
            <div className="card-image">
            <img className="descrip-image" src="./img/DescripBlock.png" alt=""/>
                <div className="card-text">
                    <h2 className="descrip-title">Leading expert on the Russian market
                        of professional cosmetics from Korea - KKshop™</h2>
                    <p>We make the world of professional Korean cosmetics available
                        to every cosmetologist in Russia, providing an opportunity to work
                        with the best achievements of Korean scientists and specialists in
                        the field of health and skin care</p>
                    <a href="!#">More Info &rArr;</a>
                </div>
            </div>

            <div className="descrip-card">
                <div className="descrip-cards"><h6>Perfect composition <br/>and efficiency</h6></div>
                <div className="descrip-cards"><h6>Naturalness and <br/> environmental friendliness</h6></div>
                <div className="descrip-cards"><h6>Cash and <br/>non-cash payment</h6></div>
                <div className="descrip-cards"><h6>Delivery <br/> all around Russia</h6></div>
            </div>
        </div>
    )
}
export default DescriptionBlock;
