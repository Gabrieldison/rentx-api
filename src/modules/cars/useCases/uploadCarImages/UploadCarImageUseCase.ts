import { inject, injectable } from "tsyringe";
import { ICarsImageRepository } from "../../repositories/ICarsImageRepository";

interface IRequest {
  car_id: string;
  name_image: string[];
}

@injectable()
class UploadCarsImageUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImageRepository
  ) {}

  async execute({ car_id, name_image }: IRequest): Promise<void> {
    name_image.map(async (image) => {
      await this.carsImagesRepository.create(car_id, image);
    });
  }
}

export { UploadCarsImageUseCase };
