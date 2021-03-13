export default class Idea {
  constructor(id = null, date = null, title, details, user) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.details = details;
    this.user = user;
  }
}
