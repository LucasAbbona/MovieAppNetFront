import { TailSpin } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="w-full flex justify-center">
            <TailSpin color="white" height={100} width={100} radius={1} visible={true} />
        </div>
    )
}

export default Loader