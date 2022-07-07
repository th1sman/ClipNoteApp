// Partes de codigo que solo tiene que ver con la interfaz grafica
// Events & those kind of things.
import { saveNote } from "./sockets";


export const onHandleSubmit = (e) => {
  e.preventDefault();
  saveNote(noteForm["title"].value, noteForm["description"].value);
}
