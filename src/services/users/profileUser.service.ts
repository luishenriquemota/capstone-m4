import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const profileUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
    
  const user = await userRepository.findOneBy({id : id});

  if (!user) {
    throw new AppError(404, "User not found");
  }

  return {...user, password: undefined,transactions:user.transactions || []};
};
export default profileUserService;
