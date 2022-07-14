import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  
  await userRepository.delete(account!.id)
  
  return account;
};

export default deleteUserService;
