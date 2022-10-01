import React from "react"

const CalltoActionSection = () => {
    return (
        <div className="subscribe-section bg-white-black">
            <div className = " container ">
                <div className = "row">
                    <div className="col-xs-12">
                        <div className="subscribe-header">
                            <h2>Necesitas mas ayuda?</h2>
                            <p>Registrate para hacer tu primera compra</p>
                            <form className="form-section">
                                <input placeholder="Tu email..." name="email" type="email"/>
                                <input values="Si. quiero registrarme" name="subscribe" type="submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CalltoActionSection