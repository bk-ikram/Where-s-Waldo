export function SelectionMenu({characters}){
    return (
        <div>
            <ul>
                {characters.map( c => {
                    <li key = {c.id} className={styles.characterImg}>
                        <img src ={c.file} />
                    </li>
                })}
            </ul>
        </div>
    )
}