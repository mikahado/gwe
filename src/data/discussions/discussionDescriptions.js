import { MultiLingual } from "../model/multiLingual";

const discussionDescriptions = {
  greenhouseDiscuss: new MultiLingual(
    "Marina & Joanna explain greenhouse gases to the animals",
    'Marina y Joanna explican los gases de invernadero a los animales',
    `Joanna et Marina expliquent les gaz à effet de serre aux animaux`
  ),
  myLightDiscuss: new MultiLingual(
    `Marina & Joanna discuss the sun's energy with the animals.`,
    'Marina y Joanna hablan sobre la energía del sol con los animales',
    `Marina et Joanna discutent de l'énergie du soleil avec les animaux.`
),
  livingSunlightDiscuss: new MultiLingual(
    "Marina & Joanna discuss photosynthesis with the animals.",
    'Marina y Joanna hablan sobre la fotosíntesis con los animales',
    'Marina et Joanna discutent de la photosynthèse avec les animaux.'
),
  buriedSunlightDiscuss: new MultiLingual(
    "Marina & Joanna discuss fossil fuels with the animals.",
    'Marina y Joanna hablan sobre los combustibles fósiles con los animales',
    'Marina et Joanna discutent des combustibles fossiles avec les animaux.'
  ),
  riversOfSunlightDiscuss: new MultiLingual(
    `Marina, Joanna, and the animals discuss the importance of Earth's water.`,
    'Marina, Joanna, y los animales discuten la importancia del agua de la Tierra.',
    `Marina, Joanna et les animaux discutent de l'importance de l'eau de la Terre.`
  ),
  commonGroundDiscuss: new MultiLingual(
    "Marina, Joanna, and the animals discuss their role in saving the environment.",
    'Marina, Joanna, y los animales discuten su papel en la conservación del medio ambiente.',
    `Discussion de terrain d'entente`
  ),
};
export default discussionDescriptions;
