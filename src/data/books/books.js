// Classes
import { Book } from "../model/book.js";
import { RunTime } from "../model/RunTime.js";
import { MultiLingual } from "../model/multiLingual.js";
import readers from "../readers/readers.js";

const books = {
  commonGround: new Book(
    "commonGround",
    new MultiLingual("Common Ground", "Terreno Común"),
    new MultiLingual(new RunTime(6), new RunTime(5)),
    18,
    new MultiLingual(true, true),
    new MultiLingual(readers.mollyBang, readers.marcelaSalmon),
    "Molly Bang"
  ),

  globalWarmingExpress: new Book(
    "globalWarmingExpress",
    new MultiLingual(
      "The Global Warming Express",
      "El Expreso del Calentamiento Global"
    ),
    null,
    126,
    new MultiLingual(true, false),
    new MultiLingual(readers.marinaWeber, false),
    "Marina Weber"
  ),

  myLight: new Book(
    "myLight",
    new MultiLingual("My Light", "Mi Luz"),
    new MultiLingual(new RunTime(5), new RunTime(5)),
    15,
    new MultiLingual(true, true),
    new MultiLingual(readers.sukiWampler, readers.marcelaSalmon),
    "Molly Bang"
  ),

  livingSunlight: new Book(
    "livingSunlight",
    new MultiLingual("Living Sunlight", "Luz Viviente"),
    new MultiLingual(new RunTime(6), new RunTime(6)),
    15,
    new MultiLingual(true, true),
    new MultiLingual(readers.sukiWampler, readers.marcelaSalmon),
    "Molly Bang & Penny Chisholm"
  ),

  buriedSunlight: new Book(
    "buriedSunlight",
    new MultiLingual("Buried Sunlight", "Luz Enterrada"),
    new MultiLingual(new RunTime(12), new RunTime(11)),
    18,
    new MultiLingual(true, true),
    new MultiLingual(readers.magsFarrell, readers.marcelaSalmon),
    "Molly Bang & Penny Chisholm"
  ),

  riversOfSunlight: new Book(
    "riversOfSunlight",
    new MultiLingual("Rivers Of Sunlight", "Ríos de Luz"),
    new MultiLingual(new RunTime(10), new RunTime(13)),
    18,
    new MultiLingual(true, true),
    new MultiLingual(readers.loriGleria, readers.marcelaSalmon),
    "Molly Bang & Penny Chisholm"
  ),
};

export default books;
