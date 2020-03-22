import React from "react";
import "../../assets/stylesheets/date-questionnare/basics.scss";
class Basics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: false,
            location: "",
            price: 0
        }

        this.handleAge = this.handleAge.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.continue = this.continue.bind(this);
    }

    handleAge(e) {
        this.setState({
            age: e.currentTarget.checked
        })
    }

    handlePrice(e) {

        let newPrice;
        switch (e.currentTarget.value) {
            case "1":
                newPrice = "1"
                break;
            case "2":
                newPrice = "1,2"
                break;
            case "3":
                newPrice = "1,2,3"
                break;
            case "4":
                newPrice = "1,2,3,4"
                break;
            default:
                return "1"
                break;
        }

        this.setState({
            price: newPrice
        })
    }

    handleLocation(e) {
        this.setState({
            location: e.currentTarget.value
        })
    }

    continue() {
        this.props.updateConditions(this.state);
        this.props.nextStep()
    }

    render() {
<<<<<<< Updated upstream

        const checkStatus = () => {
           return this.state.location !== "" && this.state.price !== 0
        }

        let nextButton = checkStatus() ? ( <button onClick={this.continue}>Next</button> ) : ( <button>Next</button> );

        return(
=======
        return (
          <div className="xop-section">
            <ul className="xop-grid">
              <li>
                <div className="xop-box xop-img-1">
                  <h3>The Basics</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm
                  </p>
                </div>
              </li>
              <li>
                <div className="xop-box xop-img-2">
                  <h3>Paint</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm
                  </p>
                </div>
              </li>
              <li>
                <div className="xop-box xop-img-3">
                  <h3>Paint</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm
                  </p>
                </div>
              </li>
              <li>
                <div className="xop-box xop-img-4">
                  <h3>Paint</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm
                  </p>
                </div>
              </li>
            </ul>
            <ul className="xop-grid">
              <li>
                <div className="xop-box xop-img-1">
                  <h3>Paint</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm
                  </p>
                </div>
              </li>
              <li>
                <div className="xop-box xop-img-2">
                  <h3>Paint</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm
                  </p>
                </div>
              </li>
              <li>
                <div className="xop-box xop-img-3">
                  <h3>Paint</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm
                  </p>
                </div>
              </li>
              <li>
                <div className="xop-box xop-img-4">
                  <h3>Paint</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm
                  </p>
                </div>
              </li>
            </ul>

>>>>>>> Stashed changes
            <form>
              <h2>This is the Basics Page</h2>

              <label>
                Location:
                <input onChange={this.handleLocation} type="text" />
              </label>

              <label>
                Are you and your date over the age of 21?
                <input onClick={this.handleAge} type="checkbox" />
              </label>

              <label>
                Price Range:
                <input
                  onClick={this.handlePrice}
                  name="priceRange"
                  type="radio"
                  value="1"
                />
                <input
                  onClick={this.handlePrice}
                  name="priceRange"
                  type="radio"
                  value="2"
                />
                <input
                  onClick={this.handlePrice}
                  name="priceRange"
                  type="radio"
                  value="3"
                />
                <input
                  onClick={this.handlePrice}
                  name="priceRange"
                  type="radio"
                  value="4"
                />
              </label>

<<<<<<< Updated upstream
                {nextButton}
=======
              <button onClick={this.continue}>Next</button>
>>>>>>> Stashed changes
            </form>
          </div>
        );
    }
}

export default Basics;

