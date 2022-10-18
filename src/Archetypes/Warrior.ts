import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static numberOfInstances = 0;
  private _energyType: EnergyType;
  
  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior.numberOfInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this.numberOfInstances;
  }
}