import classes from './loader.module.css'

const Loader = () => {
    return <div className='bg-black w-full h-[50rem] flex justify-center items-center ' > 
    <div className={classes.loader}> </div>
</div>
}

export default Loader;