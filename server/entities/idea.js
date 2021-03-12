export default class Idea {
  constructor(title, details, user, date, id = null) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.user = user;
    this.date = date;
  }
}
