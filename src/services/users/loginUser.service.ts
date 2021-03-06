import { IUserLogin } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";

const loginUserService =async ({email,password} : IUserLogin) => {
    
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const account = users.find((user) => user.email === email);
    
      
    if (!account||!bcrypt.compareSync(password, account.password!)) {
      throw new AppError(403, "Wrong email/password")
    }

    const token = jwt.sign({ id: account.id }, String(process.env.SECRET_KEY), {
        expiresIn: "1d",
      });

    
    
    return token
}


export default loginUserService