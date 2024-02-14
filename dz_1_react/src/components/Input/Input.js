import  styles from "./Input.module.css"


const Input = ({placeHolder})=>{
    return <input className={styles.inp} type="text" placeholder={placeHolder} />

}

export  default Input