import {action, computed, makeObservable, observable} from 'mobx';

class NotesStore {
  constructor() {
    makeObservable(this);
  }

  @observable notes = [];

  @observable id = -1;

  @action addNote(title, desc) {
    const id = this.notes.length + 1;
    return (this.notes = [...this.notes, {id, title, desc}]);
  }

  @action updateNote(id, title, desc) {
    const newNote = this.notes.map((item) =>
      item.id === id ? {id, title, desc} : item,
    );
    return (this.notes = newNote);
  }

  @action getNote(id) {
    return this.notes.find((item) => item.id === id);
  }

  @action removeNote(id) {
    return (this.notes = this.notes.filter((note) => note.id !== id));
  }

  @computed get getAllNotes() {
    return this.notes;
  }
}

export default new NotesStore();
