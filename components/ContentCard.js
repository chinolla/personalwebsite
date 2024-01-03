import styles from '../styles/ContentCard.module.css'
import React from 'react'


export default function ContentCard (props){
    return (
        <div className={styles.outer}>
            <div className={styles.header}>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.content}>
                    <div>{props.body}</div>
                </div>
        </div>
    )
}

export function InnerContent (props) {
    return (
        <div className={styles.innercontent}>
            <h3>{props.subheading}</h3>
            <p>{props.content}</p>
        </div>
        
    )
}