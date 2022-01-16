import React from "react";
import PropTypes from 'prop-types'

// const Card = (props) => {
//     return (
//         <div className="card w-100">
//             <img src={props.cardImage} className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">{props.cardTitle}</h5>
//                 <p className="card-text">{props.cardContent}</p>
//                 <p className="card-text"><small className="text-muted">{props.cardUpdated}</small></p>
//             </div>
//         </div>
//     )
// }

class Card extends React.Component {
    render(){
        return (
            <div className="w-100 card">
                <img src={this.props.cardImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardContent}</p>
                    <p className="card-text"><small className="text-muted">{this.props.cardUpdated}</small></p>
                </div>
            </div>
        )
    }
}
Card.propTypes = {
    cardContent: PropTypes.string
}

Card.defaultProps = {
    cardTitle: 'default card title'
}
export default Card