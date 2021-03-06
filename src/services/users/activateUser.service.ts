import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const activateUserService = async (authToken: string): Promise<void> => {

    const userRepository = AppDataSource.getRepository(User)

    const verify = authToken

    const user = await userRepository.findOne({
        where: {
            authToken: verify
        }
    })

    if(!user){
        throw new AppError(404,"User not found")
    }

    await userRepository.update({
        id: user.id
    },{
        isActive: true,
        authToken: ""
      }
    )
    
}

export default activateUserService