import React from 'react'

// const Collapse = (props) => {
//     return (
//         <div>
//             <a className="btn btn-primary  w-100" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
//                 Link with href
//             </a>
//             <div className="collapse show" id={props.href}>
//                 {props.children}
//             </div>
//         </div>
//     )
// }


class Collapse extends React.Component {


    state = { showContent: false }


    componentDidMount() {
        console.log("Component did mount")
    }

    componentDidUpdate() {
        console.log("Component did update")
    }

    showMore = () => {
        this.setState({ showContent: !this.state.showContent })
        console.log(this)
    }


    render() {

        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </button>
                {this.state.showContent ? (<div className="collapse show" >
                    {this.props.children}
                </div>) : null}
            </div>
        )
    }
}


export default Collapse
