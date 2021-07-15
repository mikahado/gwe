const categoryLabels = {
  intl: "International",
  usa: "U.S.A.",
  nm: "New Mexico",

  kids: `For Kids' Action`,
  grownups: `For Grownups' Action`,
  learnMore: `For Learning More`,

  video: "Videos",
  org: "Organizations",
  article: "Articles",
  pub: "Publications",
  info: "Information",
  people: "People",
  bus: "Businesses",
};

const resources = [
  {
    name: "Greta Thunberg TED Talk",
    link: "https://www.youtube.com/embed/H2QxFM9y0tY",
    embedLink: `https://www.youtube.com/embed/H2QxFM9y0tY`,
    type: "video",
    kids: true,
    regions: ["intl"],
  },
  {
    name: "Fridays For Future",
    link: `https://fridaysforfuture.org/what-we-do/who-we-are/`,
    type: "org",
    kids: true,
    regions: ["intl"],
  },
  {
    name: `Teen Vogue: 9 Climate Activists of Color You Should Know`,
    link: `https://www.teenvogue.com/story/youth-climate-activists-of-color`,
    type: "article",
    kids: true,
    regions: ["intl"],
  },
  {
    name: `Zero Hour`,
    link: `http://thisiszerohour.org`,
    type: `org`,
    kids: true,
    regions: ["intl"],
  },
  {
    name: `Guardians of the Forest`,
    link: `https://vimeo.com/325011714`,
    embedLink: `https://player.vimeo.com/video/325011714`,
    type: `video`,
    kids: true,
    regions: ["intl"],
  },
  {
    name: `350.org`,
    link: `https://350.org/`,
    type: "org",
    regions: ["intl"],
  },
  {
    name: `Extinction Rebellion`,
    link: `https://rebellion.global/`,
    type: `org`,
    regions: ["intl"],
  },
  {
    name: `Greenpeace International`,
    link: `https://www.greenpeace.org/international/`,
    type: "org",
    noIframe: true,
    regions: ["intl"],
  },
  {
    name: `IPCC Intergovernmental Panel on Climate Change`,
    link: `https://www.ipcc.ch`,
    type: "info",
    regions: ["intl"],
  },
  {
    name: `350.org`,
    link: `https://350.org/`,
    type: "org",
    regions: ["intl"],
  },
  {
    name: `United Nations Paris Climate Agreement`,
    link: `https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement`,
    type: `info`,
    regions: ["intl"],
  },
  {
    name: `The Narwhal Publication Canada`,
    link: `https://thenarwhal.ca`,
    type: `pub`,
    regions: ["intl"],
  },
  {
    name: "The Sunrise Movement",
    link: `https://www.sunrisemovement.org/?ms=SunriseMovement`,
    type: "org",
    kids: true,
    regions: ["intl", "usa"],
  },
  {
    name: "Earth Uprising",
    link: "https://earthuprising.org/",
    type: "org",
    noIframe: true,
    kids: true,
    regions: ["intl", "usa"],
  },
  {
    name: `Our Children's Trust`,
    link: `https://www.ourchildrenstrust.org/`,
    type: "org",
    kids: true,
    regions: ["intl", "usa"],
  },
  {
    name: "ACE - Alliance for Climate Education",
    link: `https://acespace.org/`,
    type: "org",
    kids: true,
    regions: ["intl", "usa"],
  },
  {
    name: `350.org`,
    link: `https://350.org/`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: `Extinction Rebellion`,
    link: `https://rebellion.global/`,
    type: `org`,
    regions: ["intl", "usa"],
  },
  {
    name: `Greenpeace International`,
    link: `https://www.greenpeace.org/international/`,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa"],
  },
  {
    name: "Sierra Club",
    link: "https://www.sierraclub.org",
    type: "org",
    noIframe: true,
    regions: ["intl", "usa"],
  },
  {
    name: "CLEAN - Climate Literacy & Energy Awareness Network",
    link: `https://cleanet.org/clean/community/index.html`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: "Climate Science, Awareness and Solutions",
    link: `https://csas.earth.columbia.edu/`,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa"],
  },
  {
    name: `350.org`,
    link: `https://350.org/`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: "Woodwell Climate Institute",
    link: `https://www.woodwellclimate.org/`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: "Yale Climate Connections",
    link: `https://yaleclimateconnections.org/`,
    type: "pub",
    regions: ["intl", "usa"],
  },
  {
    name: "EcoWatch",
    link: `https://www.ecowatch.com`,
    type: "pub",
    noIframe: true,
    regions: ["intl", "usa"],
  },
  {
    name: "National Resources Defense Council",
    link: `https://www.nrdcactionfund.org/`,
    type: `org`,
    regions: ["intl", "usa"],
  },
  {
    name: "Climate Museum",
    link: `https://climatemuseum.org`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: "Climate Generation",
    link: `https://www.climategen.org/`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: "Project Drawdown",
    link: `https://drawdown.org/`,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa"],
  },
  {
    name: `CCL - Citizens' Climate Lobby`,
    link: `https://citizensclimatelobby.org/`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: "Bill McKibben (Author)",
    link: `http://billmckibben.com/`,
    type: "people",
    regions: ["intl", "usa"],
  },
  {
    name: "Climate Xchange",
    link: `https://climate-xchange.org/`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: `Moms Clean Air Force`,
    link: `https://www.momscleanairforce.org/`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: `Defenders of Wildlife`,
    link: `https://defenders.org/wildlife`,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa"],
  },
  {
    name: `Council on the Uncertain Human Future`,
    link: `https://councilontheuncertainhumanfuture.org`,
    type: "org",
    regions: ["intl", "usa"],
  },
  {
    name: "The Global Warming Express",
    link: "https://theglobalwarmingexpress.org/",
    type: "org",
    noIframe: true,
    kids: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "YUCCA - Youth United for Climate Crisis Action",
    link: "https://www.yuccanm.org/",
    type: "org",
    kids: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "The Sunrise Movement",
    link: "https://www.sunrisemovement.org/?ms=SunriseMovement",
    type: "org",
    kids: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Sierra Club - Rio Grande Chapter",
    link: "https://www.riograndesierraclub.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: `350.org`,
    link: `https://350.org/`,
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: `Extinction Rebellion`,
    link: `https://rebellion.global/`,
    type: `org`,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: `Greenpeace International`,
    link: `https://www.greenpeace.org/international/`,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: `Moms Clean Air Force`,
    link: `https://www.momscleanairforce.org/`,
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Citizens' Climate Lobby NM",
    link: "https://citizensclimatelobby.org/chapters/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: `Defenders of Wildlife`,
    link: `https://defenders.org/wildlife`,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Wild Earth Guardians",
    link: "https://wildearthguardians.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "NM Interfaith Power and Light",
    link: "https://www.nm-ipl.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "New Energy Economy",
    link: "https://www.cpsenergy.com/en/about-us/who-we-are/new-energy-economy.html",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Audubon NM",
    link: "https://nm.audubon.org/",
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Asombro Institute",
    link: "https://asombro.org/",
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Environmental Education of New Mexico",
    link: "https://eeanm.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Good Earth",
    link: "https://vimeo.com/showcase/goodearth",
    type: "pub",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Kiss The Ground",
    link: "https://kisstheground.com/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Western Landowners Alliance",
    link: "https://westernlandowners.org/films/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "The RainCatcher, Inc.",
    link: "https://theraincatcherinc.com",
    type: "bus",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "NM Healthy Soil Working Group",
    link: "https://www.nmhealthysoil.org/",
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Santa Fe Watershed",
    link: "https://www.santafewatershed.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Climate Change Leadership Institute",
    link: "http://www.takeresponsibility.us/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Wild Earth Guardians",
    link: "https://wildearthguardians.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Western Environmental Law Center",
    link: "https://westernlaw.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Green Fire Times",
    link: "https://greenfiretimes.com/",
    type: "pub",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "NM Interfaith Power and Light",
    link: "https://www.nm-ipl.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "New Energy Economy",
    link: "https://www.cpsenergy.com/en/about-us/who-we-are/new-energy-economy.html",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Reunity Resources",
    link: "https://www.reunityresources.com/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Lisa Randall (Santa Fe Public Schools Sustainability Program Coordinator)",
    link: 'mailto:lrandall@sfps.k12',
    type: "people",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "NM Wilderness Alliance",
    link: "https://www.nmwild.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Great Old Broads for Wilderness Alliance",
    link: "https://www.greatoldbroads.org/our-staff/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Renewable Taos",
    link: "https://renewabletaos.org/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Juntos NM",
    link: "https://cvnmef.org/juntos/",
    type: "org",
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "TEWA Woman United",
    link: "https://tewawomenunited.org/",
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Climate Action Academy",
    link: "https://www.climateactionacademy.org/",
    type: "org",
    noIframe: true,
    kids: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Climate Action Academy",
    link: "https://www.climateactionacademy.org/",
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Climate Reality NM",
    link: "https://www.climaterealitynnm.org/",
    kids: true,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Climate Reality NM",
    link: "https://www.climaterealitynnm.org/",
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "NM Climate Justice",
    link: "https://www.instagram.com/nmclimatejustice/?hl=en/",
    kids: true,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "NM Climate Justice",
    link: "https://www.instagram.com/nmclimatejustice/?hl=en/",
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Zero Waste NM",
    link: 'https://nmpirg.org/feature/nmp/zero-waste',
    kids: true,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Zero Waste NM",
    link: 'https://nmpirg.org/feature/nmp/zero-waste',
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Talons",
    link: 'https://www.talkingtalons.org',
    kids: true,
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: "Talons",
    link: 'https://www.talkingtalons.org',
    type: "org",
    noIframe: true,
    regions: ["intl", "usa", "nm"],
  },
  {
    name: `The Global Warming Express`,
    link: `https://vimeo.com/110723960`,
    embedLink: `https://player.vimeo.com/video/110723960`,
    type: `video`,
    kids: true,
    regions: ["nm"],
  },
  {
    name: `The Global Warming Express - Santa Fe, NM`,
    link: `https://vimeo.com/132480220`,
    embedLink: `https://player.vimeo.com/video/132480220`,
    type: `video`,
    kids: true,
    regions: ["nm"],
  },
  {
    name: `The Global Warming Express - Santa Fe, NM - Indiegogo Campaign`,
    link: `https://vimeo.com/136319729`,
    embedLink: `https://player.vimeo.com/video/136319729`,
    type: `video`,
    kids: true,
    regions: ["nm"],
  },
];

export function getFilterState() {
  let filterState = {
    types: {},
    regions: {},
  };

  resources.forEach((resource) => {
    if (!filterState.types.hasOwnProperty(resource.type)) {
      filterState.types[resource.type] = true;
    }

    resource.regions.forEach((region) => {
      if (!filterState.regions.hasOwnProperty(region)) {
        filterState.regions[region] = true;
      }
    });
  });

  return filterState;
}
export function getResources() {
  const resourceResults = {
    kids: {},
    learnMore: {},
  };
  resources.forEach((resource) => {
    let age = resource.kids ? "kids" : "learnMore";

    if (!resourceResults[age][categoryLabels[resource.type]]) {
      resourceResults[age][categoryLabels[resource.type]] = [resource];
    } else {
      resourceResults[age][categoryLabels[resource.type]].push(resource);
    }
  });

  return resourceResults;

  /*

    const filteredResources = resourceResults.filter( resource =>{
        return (regionFilter() && typeFilter());
    })
    return filteredResources;

     */
}
export function filterResources(filtersObj) {
  function compileFilters(filterObj) {
    if (filterObj) {
      const filtersArray = [];

      Object.keys(filterObj).forEach((filterKey) => {
        if (filterObj[filterKey]) {
          filtersArray.push(filterKey);
        }
      });
      return filtersArray;
    }
  }
  function typeFilter(typeFilters, resourceType) {
    return typeFilters.includes(resourceType);
  }
  function regionFilter(filterRegions, resourceRegions) {
    let search = false;

    for (let i = 0; i <= resourceRegions.length; i++) {
      if (filterRegions.includes(resourceRegions[i])) {
        search = true;
      }
    }
    return search;
  }

  const compiledFilters = {
    types: compileFilters(filtersObj.types),
    regions: compileFilters(filtersObj.regions),
  };

  const resourceResults = {
    kids: {},
    learnMore: {},
  };
  resources.forEach((resource) => {
    if (
      typeFilter(compiledFilters.types, resource.type) &&
      regionFilter(compiledFilters.regions, resource.regions)
    ) {
      let age = resource.kids ? "kids" : "learnMore";

      if (
        typeFilter(compiledFilters.types, resource.type) &&
        !resourceResults[age][categoryLabels[resource.type]]
      ) {
        resourceResults[age][categoryLabels[resource.type]] = [resource];
      } else {
        function checkDuplicate(newEntry, existingArray) {
          let duplicate = false;

          existingArray.forEach((priorResult) => {
            if (priorResult.name === newEntry.name) {
              duplicate = true;
            }
          });

          return duplicate;
        }

        if (
          !checkDuplicate(
            resource,
            resourceResults[age][categoryLabels[resource.type]]
          )
        ) {
          resourceResults[age][categoryLabels[resource.type]].push(resource);
        }
      }
    }
  });

  const sortedResults = {};

  Object.keys(resourceResults).forEach((ageKey) => {
    sortedResults[ageKey] = [];

    Object.keys(resourceResults[ageKey]).forEach((resourceCategoryKey) => {
      sortedResults[ageKey].push({
        heading: resourceCategoryKey,
        list: resourceResults[ageKey][resourceCategoryKey],
      });
    });

    function compare(a, b) {
      const categoryPriority = [
        "Videos",
        "Articles",
        "Publications",
        "Information",
        "People",
        "Businesses",
      ];

      if (a.heading === "Organizations") {
        return 1;
      } else if (b.heading === "Organizations") {
        return -1;
      } else if (categoryPriority.indexOf(a.heading) < 0) {
        return 1;
      } else if (
        categoryPriority.indexOf(a.heading) <
        categoryPriority.indexOf(b.heading)
      ) {
        return -1;
      } else {
        return 1;
      }
    }

    sortedResults[ageKey].sort(compare);
  });

  return sortedResults;
}
export function compileFilters(filterObj) {
  if (filterObj) {
    const filtersArray = [];

    Object.keys(filterObj).forEach((filterKey) => {
      if (filterObj[filterKey]) {
        filtersArray.push(filterKey);
      }
    });
    return filtersArray;
  }
}

export function sortAllResources(){

  let grouped = {
    kids: {},
    other: {}
  };

  resources.forEach( resource => {
    if (resource.regions.includes('nm')){
      resource.region = 'nm';
    } else if (resource.regions.includes('usa')){
      resource.region = 'usa';
    } else {
      resource.region = 'intl';
    }
    if (!grouped[resource.kids ? 'kids' : 'other'].hasOwnProperty(resource.type)){
      grouped[resource.kids ? 'kids' : 'other'][resource.type] = {};
    }
    if (!grouped[resource.kids ? 'kids' : 'other'][resource.type].hasOwnProperty(resource.region)) {
      grouped[resource.kids ? 'kids' : 'other'][resource.type][resource.region] = [];
    }
    grouped[resource.kids ? 'kids' : 'other'][resource.type][resource.region].push(resource);
  });

  let sorted = {};
  Object.keys(grouped).forEach(ageKey=>{
    sorted[ageKey] = [];

    Object.keys(grouped[ageKey]).forEach(categoryKey =>{

        sorted[ageKey].push({
          heading: categoryKey,
          list: []
        });

      Object.keys(grouped[ageKey][categoryKey]).forEach(regionKey =>{

        sorted[ageKey].find( (catObj) => catObj.heading === categoryKey ).list.push({
          heading: categoryLabels[regionKey],
          list: grouped[ageKey][categoryKey][regionKey]
        })

      })
    })
  });

  function sortTypes(a, b) {
    const categoryPriority = [
      "video",
      "article",
      "pub",
      "info",
      "people",
      "bus",
    ];

    //(a);

    if (a.heading === "org") {
      return 1;
    } else if (b.heading === "org") {
      return -1;
    } else if (categoryPriority.indexOf(a.heading) < 0) {
      return 1;
    } else if (
      categoryPriority.indexOf(a.heading) <
      categoryPriority.indexOf(b.heading)
    ) {
      return -1;
    } else {
      return 1;
    }
  }
  function sortRegions(a, b) {

    const regionPriority = [
      'New Mexico',
      'U.S.A.',
      'International',
    ]
    if (regionPriority.indexOf(a.heading) < regionPriority.indexOf(b.heading)){
      return -1
    } else {
      return 1;
    }
  }
  function sortResources(a, b) {
    if (a.name < b.name) {
      return -1;
    }
  }

  Object.keys(sorted).forEach(ageKey =>{
    sorted[ageKey].sort(sortTypes);
    sorted[ageKey].forEach(type =>{
      type.list.sort(sortRegions);
      type.list.forEach(typeRegion =>{
        typeRegion.list.sort(sortResources)
      })
    })
  })

  let output = {};

  Object.keys(sorted).forEach(ageKey =>{
    output[ageKey] = [];
    sorted[ageKey].forEach(cat =>{
      cat.list.forEach(catRegion =>{
        output[ageKey].push({
          heading: `${categoryLabels[cat.heading]} - ${catRegion.heading}`,
          list: catRegion.list
        })
      })
    })
  })

  return output;

  //output.ageKey.sort(compare);
  //return
}

function getRegionResources(region) {
  const regionResources = resources[region].resources;

  const compiledResources = { resources: {} };

  //Copy resource categories
  Object.keys(regionResources).forEach((ageKey) => {
    compiledResources.resources[ageKey] = {
      label: categoryLabels[ageKey],
      list: {},
      id: ageKey,
    };
  });

  //Sort resources into categories by type
  Object.keys(regionResources).forEach((ageKey) => {
    regionResources[ageKey].forEach((resource) => {
      if (compiledResources.resources[ageKey].list[resource.type]) {
        compiledResources.resources[ageKey].list[resource.type].list.push(
          resource
        );
      } else {
        compiledResources.resources[ageKey].list[resource.type] = {
          label: categoryLabels[resource.type],
          list: [resource],
          id: resource.type,
        };
      }
    });
  });

  if (resources[region].subregions) {
    compiledResources.subregions = {};
    const subregions = resources[region].subregions;

    Object.keys(subregions).forEach((subregion) => {
      compiledResources.subregions[subregion] = {
        label: categoryLabels[subregion],
        resources: {},
      };
      const subregionResources =
        resources[region].subregions[subregion].resources;

      //Copy resource categories
      Object.keys(subregionResources).forEach((ageKey) => {
        compiledResources.subregions[subregion].resources[ageKey] = {
          label: categoryLabels[ageKey],
          list: {},
        };
      });

      //Sort resources into categories by type
      Object.keys(subregionResources).forEach((ageKey) => {
        subregionResources[ageKey].forEach((resource) => {
          if (
            compiledResources.subregions[subregion].resources[ageKey].list[
              resource.type
            ]
          ) {
            compiledResources.subregions[subregion].resources[ageKey].list[
              resource.type
            ].list.push(resource);
          } else {
            compiledResources.subregions[subregion].resources[ageKey].list[
              resource.type
            ] = { label: categoryLabels[resource.type], list: [resource] };
          }
        });
      });
    });
  }

  const compiledObj = compiledResources;
  compiledObj.label = categoryLabels[region];
  compiledObj.id = region;
  return compiledObj;
}
function getAllResources() {
  const allResources = [];
  Object.keys(resources).forEach((region) => {
    allResources.push(getRegionResources(region));
  });

  return allResources;
}

sortAllResources();

export { resources, categoryLabels, getRegionResources, getAllResources };

