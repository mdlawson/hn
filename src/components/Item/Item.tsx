import { ItemQuery } from "./Item.data";

export interface ItemData {
  id: number;
  deleted: boolean;
  type: string;
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: number;
  kids: number[];
  url: string;
  score: number;
  title: string;
  descendants: number;
  collapsed: boolean;
}

export default ItemQuery;
