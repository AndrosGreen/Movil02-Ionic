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
}

const PokeCard: React.FC<Props> = ({ nombre, id }) => {
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
                    <IonBadge color="primary" className="medalla">
                        Agua
                    </IonBadge>
                    <IonBadge color="tertiary">Macho</IonBadge>
                </IonCardHeader>

                <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                </IonCardContent>
            </IonCard>
        </IonItem>
    );
};

export default PokeCard;
