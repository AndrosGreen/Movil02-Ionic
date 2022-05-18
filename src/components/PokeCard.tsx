import "./PokeCard.css";
import {
    IonItem,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonBadge,
} from "@ionic/react";

interface Props {
    nombre?: string;
    id?: string;
    tipo?: string;
    sexo?: string;
    descripcion?: string;
}

const PokeCard: React.FC<Props> = ({ nombre, id, tipo, sexo, descripcion }) => {

    var _tipo = "primary";
    if(tipo === "Fuego") _tipo = "danger";
    if(tipo === "Electrico") _tipo = "warning";
    if(tipo === "Planta") _tipo = "sucess";


    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

    return (
        <IonItem>
            <IonCard>
                <IonCardHeader>
                    <img
                        src={imageUrl}
                        style={{
                            width: "300px",
                            content: "center",
                        }}
                    />
                    <IonCardTitle>{nombre}</IonCardTitle>
                    <IonBadge color={_tipo} className="medalla">
                        {tipo}
                    </IonBadge>
                    <IonBadge color="tertiary">{sexo}</IonBadge>
                </IonCardHeader>

                <IonCardContent>
                    {descripcion}
                </IonCardContent>
            </IonCard>
        </IonItem>
    );
};

export default PokeCard;
