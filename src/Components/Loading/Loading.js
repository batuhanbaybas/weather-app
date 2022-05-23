import Lottie from 'react-lottie';
import loading from "../../Assets/Loading/99844-loading.json"

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        width: "5px",
        height: "5px",
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div style={{width: "150px", height: "150px", textAlign: "center"}}>

            <Lottie options={defaultOptions}/>
        </div>
    )
}

export default Loading;