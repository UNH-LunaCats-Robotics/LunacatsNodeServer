import Pixy from '../components/Pixy'
import Lidar from '../components/Lidar'
import React from 'react'
export default class MainPage extends React.Component {
    render() {
        return (
            <body>
                <div>
                    <div className="pageHeader">•~•~•~•~•~•~•~•~•~ Lunacats ~•~•~•~•~•~•~•~•~•</div>
                </div>
                <p> </p>
                <Pixy />
                <p> </p>
                <Lidar />
                <style jsx>{`
                    body {
                        margin: 0;
                        width: 99.5%;
                        height: 100%;
                        padding-right: 4px;
                        padding-top: 2px;
                        padding-left: 2px;
                        overflow-x: hidden;
                        overflow-y: hidden;
                        background-color: rgb(236, 236, 236);
                    }
                    div {
                        height: 8%;
                        width: 100%;
                        background-image: linear-gradient(to left, rgba(71, 68, 68, 0), rgba(71, 68, 68, 1));
                        border-bottom: solid rgb(15, 15, 26) 1px;
                        box-shadow: 0px 0px 5px #8888888c;
                        text-align: center;
                    }
                    p {
                        background-color: white;
                        font-size: 8px;
                    }
                    .pageHeader {
                        color: black;
                        font-size: 250%;
                    }
                `}</style>
            </body>


        )
    }
}