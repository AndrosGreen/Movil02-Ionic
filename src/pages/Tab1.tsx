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


interface Poke {
    nombre?: string;
    id?: string;
    sexo?: string;
    tipo?: string;
    descripcion?: string;
}

const pokesInicio: Poke[] = [
    {
        nombre : "Squirtle",
        id: "007",
        sexo: "Macho", 
        tipo: "Agua", 
        descripcion: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {
        nombre : "Pikachu",
        id: "025",
        sexo: "Hembra", 
        tipo: "Electrico", 
        descripcion: "Pokemon mas famoso de todos."
    }
];

const Tab1: React.FC = () => {
    const [nombre, setNombre] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [sexo, setSexo] = useState<string>("");
    const [tipo, setTipo] = useState<string>("");
    const [descripcion, setDescripcion] = useState<string>("");
    const [pokemon, setPokemon] = useState<Poke[]>(pokesInicio);

    const agregarPokemon = () => {
        const nuevo: Poke = {
            nombre : nombre,
            id: id,
            sexo: sexo,
            tipo: tipo,
            descripcion: descripcion
        }
        setPokemon([...pokemon, nuevo]);
    };
    
    const listaPokes = pokemon.map( poke => {
        return(
            <PokeCard 
                nombre={poke.nombre} 
                id={poke.id} 
                tipo={poke.tipo}
                sexo={poke.sexo}
                descripcion={poke.descripcion}
            />
        );
    } );

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
                    {listaPokes}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
