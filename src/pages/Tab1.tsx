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
    IonTextarea,
} from "@ionic/react";
import { useState } from "react";
import PokeCard from "../components/PokeCard";
import "./Tab1.css";

const Tab1: React.FC = () => {
    const [nombre, setNombre] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [sexo, setSexo] = useState<string>("");
    const [tipo, setTipo] = useState<string>("");
    const [descripcion, setDescripcion] = useState<string>("");

    const agregarPokemon = () => {
        alert("es : " + sexo);
    };

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
                    <IonInput
                        placeholder="Poke id"
                        type="number"
                        value={id}
                        onIonChange={(e) => setId(e.detail.value!)}
                    />
                </IonItem>
                <IonItem>
                    <IonInput
                        placeholder="Nombre"
                        value={nombre}
                        onIonChange={(e) => setNombre(e.detail.value!)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel>Tipo</IonLabel>
                    <IonSelect onIonChange={(e) => setTipo(e.detail.value!)}>
                        <IonSelectOption value="Agua">Agua</IonSelectOption>
                        <IonSelectOption value="Fuego">Fuego</IonSelectOption>
                        <IonSelectOption value="Planta">Planta</IonSelectOption>
                        <IonSelectOption value="Electrico">
                            Electrico
                        </IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonRadioGroup onIonChange={(e) => setSexo(e.detail.value!)}>
                    <IonListHeader>
                        <IonLabel>Sexo:</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonLabel>Macho</IonLabel>
                        <IonRadio slot="start" value="Macho" />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Hembra</IonLabel>
                        <IonRadio slot="start" value="Hembra" />
                    </IonItem>
                </IonRadioGroup>
                <IonItem>
                    <IonLabel position="stacked">Descripcion</IonLabel>
                    <IonTextarea
                        onIonChange={(e) => setDescripcion(e.detail.value!)}
                    />
                </IonItem>
                <IonItem>
                    <IonButton size="default" onClick={agregarPokemon}>
                        Agregar
                    </IonButton>
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
