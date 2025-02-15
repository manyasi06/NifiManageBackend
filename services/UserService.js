// services/UserService.js
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async getUserById(id) {
    return this.userRepository.findById(id);
  }

  async createUser(user) {
    return this.userRepository.create(user);
  }

  async updateUser(id, user) {
    return this.userRepository.update(id, user);
  }

  async deleteUser(id) {
    return this.userRepository.delete(id);
  }
}

module.exports = UserService;