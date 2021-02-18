import { Producto } from './producto';

export interface Categoria {
  id: number;
  name: string;
  image: string;
  color: string;

  products: Producto[];
}
