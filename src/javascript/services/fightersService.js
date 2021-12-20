import { callApi } from '../helpers/apiHelper';
import {fightersDetails} from "../helpers/mockData";

class FighterService {
  #endpoint = 'fighters.json';

  async getFighters() {
    try {

      const apiResult = await callApi(this.#endpoint);
      console.log(apiResult);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }
  async getFighterInfo(id){




  }
  async getFighterDetails(id) {
    return fightersDetails[id];
  }

  //   try {
  //     const apiResult = await callApi(this.#endpoint);
  //
  //
  //     return apiResult.filter(x => x._id ===id);
  //   } catch (error) {
  //     throw error;
  //   }
  //
  // }
}

export const fighterService = new FighterService();
