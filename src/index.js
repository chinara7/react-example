import React from 'react'
import ReactDom from 'react-dom'
import Card from './components/Card'
import Collapse from './components/Collapse'


function App() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='mx-auto text-success'>It was created to learn React </h1>
                <div className='card-group w-100'>

                    <div className="col">
                        <Collapse href="card1" >
                            <Card
                                cardImage="https://picsum.photos/id/0/200/300"
                                cardContent="1.Esse quis pariatur nisi adipisicing velit elit non ea minim."
                                cardUpdated="1 min ago"
                            />
                        </Collapse>

                    </div>

                    <div className="col">
                        <Collapse href="card2">
                            <Card
                                cardImage="https://picsum.photos/id/1/200/300"
                                cardContent="2.Esse quis pariatur nisi adipisicing velit elit non ea minim."
                                cardUpdated="2 min ago"
                                cardTitle="Card title -2" />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="card3">
                            <Card
                                cardImage="https://picsum.photos/id/2/200/300"
                                cardContent="3.Esse quis pariatur nisi adipisicing velit elit non ea minim."
                                cardUpdated="3 min ago"
                                cardTitle="Card title -3" />
                        </Collapse>
                    </div>

                </div>

            </div>

        </div>
    )
}



ReactDom.render(
    <App />,
    document.getElementById('root')
)