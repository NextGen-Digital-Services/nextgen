import { motion } from "framer-motion"

const Loader = () => {

return (

<div className="loader">

<motion.div
animate={{rotate:360}}
transition={{repeat:Infinity,duration:1}}
className="spinner"
/>

</div>

)

}

export default Loader