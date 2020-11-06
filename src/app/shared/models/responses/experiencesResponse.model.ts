import { IExperience } from './../experience.model';
import { IUser } from './../user.model';

export interface IExperiencesResponse {
    experiences: Array<IExperience>;
    top5:  Array<IExperience>;
    experience:  IExperience;
    response: IUser;

}