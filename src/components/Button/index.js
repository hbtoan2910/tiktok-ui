import handleAlert from '~/alert'

function Button() {
    return (
        <div>
            <button onClick={handleAlert}>Click me !</button>
        </div>
    )
}

export default Button