export default class Idea {
  constructor(title, details, user, id, date) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.details = details;
    this.user = user;
  }
}
