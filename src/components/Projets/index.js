import Projet from "./Projet";
import data from "../../data/data.js";

const Projets = () => {
    //console.table(data);
    const dataTable = data.items;
    // console.table(dataTable);
    return (
        <>
            {dataTable.map((projet) => {
                return <Projet key={projet.id}
                    html_url={projet.html_url}
                    owner_avatar_url={projet.owner.avatar_url}
                    name={projet.name}
                    owner_login={projet.owner.login}
                    description={projet.description} />
            })}
        </>
    )
}

export default Projets;