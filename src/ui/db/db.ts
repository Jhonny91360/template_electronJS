import Dexie, { type EntityTable } from "dexie";
import { Product } from "./tables/Products/ProductsType";
import { Client } from "./tables/Clients/ClientsType";
import { Setting } from "./tables/Setting/SettingType";

const db = new Dexie("TeesaDatabase") as Dexie & {
  products: EntityTable<
    Product,
    "id" // primary key "id" (for the typings only)
  >;
  clients: EntityTable<
    Client,
    "id" // primary key "id" (for the typings only)
  >;
  settings: EntityTable<
    Setting,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  products: "++id, nombre, referencia, marca, valor_h, descripcion, foto", // primary key "id" (for the runtime!)
  clients:
    "++id, nit_cedula, nombre, direccion, ciudad, telefono, celular, correo, correo_opcional, fecha_registro, encargado, cargo, tipoPago",
  settings: "++id, consecutivo, contado, credito15, credito30, credito60",
});

export { db };

// import Dexie from "dexie";

// class ProductDatabase extends Dexie {
//   products: Dexie.Table<any, string>;

//   constructor() {
//     super("TeesaDatabase");
//     this.version(1).stores({
//       products: "++id", // Usamos 'id' como la clave primaria
//     });

//     this.products = this.table("products");
//   }
// }

// const db = new ProductDatabase();
// export default db;
