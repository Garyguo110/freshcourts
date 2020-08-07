class UserData {
  constructor(first_name, last_name, username, password, email, user_location) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.user_location = user_location;
  }
}

exports.init = function (
  first_name,
  last_name,
  username,
  password,
  email,
  user_location
) {
  return new UserData(
    first_name,
    last_name,
    username,
    password,
    email,
    user_location
  );
};
