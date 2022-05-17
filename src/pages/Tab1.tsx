import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonList,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonRadioGroup,
    IonListHeader,
    IonRadio,
} from "@ionic/react";
import PokeCard from "../components/PokeCard";
import "./Tab1.css";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Pokedex</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Pokedex</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonInput placeholder="Poke id" type="number"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput placeholder="Nombre"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Tipo</IonLabel>
                    <IonSelect>
                        <IonSelectOption value="brown">Agua</IonSelectOption>
                        <IonSelectOption value="blonde">Fuego</IonSelectOption>
                        <IonSelectOption value="black">Planta</IonSelectOption>
                        <IonSelectOption value="red">Electrico</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonRadioGroup>
                    <IonListHeader>
                        <IonLabel>Sexo:</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonLabel>Macho</IonLabel>
                        <IonRadio slot="start" value="biff" />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Hembra</IonLabel>
                        <IonRadio slot="start" value="griff" />
                    </IonItem>
                </IonRadioGroup>
                <IonItem>
                    <IonButton size="default">Agregar</IonButton>
                </IonItem>

                <IonList>
                    <PokeCard nombre="Squirtle" id="007" />
                    <PokeCard nombre="Squirtle" id="008" />
                    <PokeCard nombre="Squirtle" id="001" />
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
