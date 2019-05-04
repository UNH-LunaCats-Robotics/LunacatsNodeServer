//Begins by showing Lunacats image for 1.5 seconds, I hope at least #praying
/** Luna Image component. */
import React from 'react'
export default class MainImage extends React.Component {
    componentDidMount = () => {
        this.timeoutHandle = setTimeout(() => {
            window.location.href = '/MainPage';
        }, 1500);
    };
    componentWillUnmount = () => {
        clearTimeout(this.timeoutHandle);
    }
    render() {
        return (
            <html>
                <style jsx>{`
                    html {
                        margin: 0;
                        width: 100%;
                        height: 100%;
                        overflow-y: hidden;
                        background: url(../static/lunaBack.png)center center no-repeat,  url(../static/starSky.png);
                        background-size: 450px, cover;
                }
                `}</style>
            </html>
        )

    }

}