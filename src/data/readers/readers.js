// Class
import { Reader } from "../model/Reader.js";

// Images
import loriGleriaImg from "./photos/LoriGleria.png";
import magsFarrellImg from "./photos/MagsFarrell.png";
import marcelaSalmonImg from "./photos/MarcelaSalmon.jpg";
import mollyBangImg from "./photos/MollyBang.jpg";
import sukiWamplerImg from "./photos/SukiWampler.png";

const readers = {
  loriGleria: new Reader("Lori Gleria", loriGleriaImg),
  magsFarrell: new Reader("Mags Farrell", magsFarrellImg),
  sukiWampler: new Reader("Suki Wampler", sukiWamplerImg),
  marcelaSalmon: new Reader("Marcela Salmon", marcelaSalmonImg),
  mollyBang: new Reader("Molly Bang", mollyBangImg),
};

export default readers;
