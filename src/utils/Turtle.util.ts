
const Turtle = async (ms?:number) => {
    await new Promise(resolve => setTimeout(resolve, ms || 1000))
}
export default Turtle;