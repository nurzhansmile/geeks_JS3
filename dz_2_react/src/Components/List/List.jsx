import  styles from "./List.module.css"

const List = ({tasks})=>{
    return(
        <ol>
            {tasks.map((item)=>(
                <li className={styles.listItem} key={item.id}>{item.id} {item.title}</li>
            ))}
        </ol>
    )
}

export  default  List