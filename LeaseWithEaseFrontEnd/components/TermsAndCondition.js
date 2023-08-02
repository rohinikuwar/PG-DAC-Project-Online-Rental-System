import "./TermsAndConditionStyle.css"
import Pdf from "./AgreemrntDocument/Rentomojo-furniture-appliance-fitnessequipment-qli51k.pdf"
import Pdf1 from "./AgreemrntDocument/Rentomojo-mobile-laptop-smartdevice-iv1c8d.pdf"
function TermsAndCondition() {
    return (
        <>
            <container>
                <div className="upper">
                    <h1>Terms & Conditions</h1>
                </div>

                <div className="PrivacyPolicy">
                    <p>LeaseWithEase Rental Agreement</p>

                    <p> For our <b>Furniture, Appliance & Fitness</b> device rental Terms & Conditions, please click on this <a href={Pdf} target="_blank">click
                        here</a></p>

                    <p>For our <b>SmartPhones, SmartDevices & Laptop</b> rental Terms & Conditions, please click on this <a href={Pdf1} target="_blank">click here</a></p>

                </div>

            </container>

        </>
    )


}
export default TermsAndCondition;