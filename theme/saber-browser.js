import Section from './components/Section'

export default ({
    setHead,
    component
}) => {
    setHead({
        script: [{
                src: '/__/firebase/6.6.1/firebase-app.js',
                body: true
            },
            {
                src: '/__/firebase/init.js',
                body: true
            }
        ]
    })
}