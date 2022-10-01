import React from "react"

const ContactInfo = () => {
    return(
        <div className="contacInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h5>Numero telefono</h5>
                        <p>9 9999 999</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h5>headquarter</h5>
                        <p>maikcacsakmcakmcskm</p>
                    </div>
                </div>
                <div className = "col-12 col-md-4 contact-Box">
                    <div className = "box-info">
                        <div className="info-image">
                            <i className = "fas fa-fax"></i>
                        </div>
                        <h5>Fax</h5>
                        <p>999 9 99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo