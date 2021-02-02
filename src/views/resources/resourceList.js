const categoryLabels = {
    intl: 'International',
    usa: 'U.S.A.',
    nm: 'New Mexico',

    kids: `For Kids' Action`,
    grownups: `For Grownups Action`,
    learnMore: `For Learning More`,

    video: 'Videos',
    org: 'Organizations',
    article: 'Articles',
    pub: 'Publications',
    info: 'Information',
    people: 'People',
    bus: 'Businesses'
}

const resources = {
    intl:{
        resources: {
            kids: [
                {
                    name: 'Greta Thurnberg TED Talk',
                    link: 'https://www.youtube.com/embed/H2QxFM9y0tY',
                    embedLink: `https://www.youtube.com/embed/H2QxFM9y0tY`,
                    type: 'video'
                },
                {
                    name: 'Fridays For Future',
                    link: `https://fridaysforfuture.org/what-we-do/who-we-are/`,
                    type: 'org'
                },
                {
                    name: `Teen Vogue: 9 Climate Activists of Color You Should Know`,
                    link: `https://www.teenvogue.com/story/youth-climate-activists-of-color`,
                    type: 'article'
                },
                {
                    name: `Zero Hour`,
                    link: `http://thisiszerohour.org`,
                    type: `org`
                },
                {
                    name: `Guardians of the Forest`,
                    link: `https://vimeo.com/325011714`,
                    embedLink: `https://player.vimeo.com/video/325011714`,
                    type: `video`
                }
            ],
            grownups: [
                {
                    name: `350.org`,
                    link: `https://350.org/`,
                    type: 'org'
                },
                {
                    name: `Extinction Rebellion`,
                    link: `https://rebellion.global/`,
                    type: `org`
                },
                {
                    name: `Greenpeace International`,
                    link: `https://www.greenpeace.org/international/`,
                    type: "org",
                    noIframe: true
                }
            ],
            learnMore: [
                {
                    name: `IPCC Intergovernmental Panel on Climate Change`,
                    link: `https://www.ipcc.ch`,
                    type: 'info'
                },
                {
                    name: `350.org`,
                    link: `https://350.org/`,
                    type: 'org'
                },
                {
                    name: `United Nations Paris Climate Agreement`,
                    link: `https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement`,
                    type: `info`
                },
                {
                    name: `The Narwhal Publication Canada`,
                    link: `https://thenarwhal.ca`,
                    type: `pub`
                }
            ]
        }
    },
    usa: {
        resources:{
            kids: [
                {
                    name: 'The Sunrise Movement',
                    link: `https://www.sunrisemovement.org/?ms=SunriseMovement`,
                    type: 'org'
                },
                {
                    name: 'Earth Uprising',
                    link: 'https://earthuprising.org/',
                    type: 'org',
                    noIframe: true
                },
                {
                    name: `Our Children's Trust`,
                    link: `https://www.ourchildrenstrust.org/`,
                    type: 'org'
                },
                {
                    name: 'ACE - Alliance for Climate Education',
                    link: `https://acespace.org/`,
                    type: 'org'
                }
            ],
            grownups: [
                {
                    name: `350.org`,
                    link: `https://350.org/`,
                    type: 'org'
                },
                {
                    name: `Extinction Rebellion`,
                    link: `https://rebellion.global/`,
                    type: `org`
                },
                {
                    name: `Greenpeace International`,
                    link: `https://www.greenpeace.org/international/`,
                    type: "org",
                    noIframe: true
                },
                {
                    name: 'Sierra Club',
                    link: 'https://www.sierraclub.org',
                    type: 'org',
                    noIframe: true
                }
            ],
            learnMore: [
                {
                    name: 'CLEAN - Climate Literacy & Energy Awareness Network',
                    link: `https://cleanet.org/clean/community/index.html`,
                    type: 'org'
                },
                {
                    name: 'Climate Science, Awareness and Solutions - Earth Institute - Columbia University',
                    link: `https://csas.earth.columbia.edu/`,
                    type: 'org',
                    noIframe: true
                },
                {
                    name: `350.org`,
                    link: `https://350.org/`,
                    type: 'org'
                },
                {
                    name: 'Woodwell Climate Institute',
                    link: `https://www.woodwellclimate.org/`,
                    type: 'org'
                },
                {
                    name: 'Yale Climate Connections',
                    link: `https://yaleclimateconnections.org/`,
                    type: 'pub'
                },
                {
                    name: 'EcoWatch',
                    link: `https://www.ecowatch.com`,
                    type: 'pub',
                    noIframe: true
                },
                {
                    name: 'National Resources Defense Council',
                    link: `https://www.nrdcactionfund.org/`,
                    type: `org`
                },
                {
                    name: 'Climate Museum',
                    link: `https://climatemuseum.org`,
                    type: 'org'
                },
                {
                    name: 'Climate Generation',
                    link: `https://www.climategen.org/`,
                    type: 'org'
                },
                {
                    name: 'Project Drawdown',
                    link: `https://drawdown.org/`,
                    type: 'org',
                    noIframe: true
                },
                {
                    name: `CCL - Citizens' Climate Lobby`,
                    link: `https://citizensclimatelobby.org/`,
                    type: "org"
                },
                {
                    name: 'Bill McKibben (Author)',
                    link: `http://billmckibben.com/`,
                    type: 'people'
                },
                {
                    name: 'Climate Xchange',
                    link: `https://climate-xchange.org/`,
                    type: 'org'
                },
                {
                    name: `Moms Clean Air Force`,
                    link: `https://www.momscleanairforce.org/`,
                    type: 'org'
                },
                {
                    name: `Defenders of Wildlife`,
                    link: `https://defenders.org/wildlife`,
                    type: "org",
                    noIframe: true
                },
                {
                    name: `Council on the Uncertain Human Future`,
                    link: `https://councilontheuncertainhumanfuture.org`,
                    type: 'org'
                }
            ],
        },
        subregions: {
            nm:{
                resources: {
                    kids: [
                        {
                            name: 'The Global Warming Express',
                            link: 'https://theglobalwarmingexpress.org/',
                            type: 'org',
                            noIframe: true
                        },
                        {
                            name: 'YUCCA - Youth United for Climate Crisis Action',
                            link: 'https://www.yuccanm.org/',
                            type: 'org'
                        },
                        {
                            name: 'The Sunrise Movement',
                            link: 'https://www.sunrisemovement.org/?ms=SunriseMovement',
                            type: 'org'
                        }
                    ],
                    grownups: [
                        {
                            name: 'Sierra Club - Rio Grande Chapter',
                            link: 'https://www.riograndesierraclub.org/',
                            type: 'org'
                        },
                        {
                            name: `350.org`,
                            link: `https://350.org/`,
                            type: 'org'
                        },
                        {
                            name: `Extinction Rebellion`,
                            link: `https://rebellion.global/`,
                            type: `org`
                        },
                        {
                            name: `Greenpeace International`,
                            link: `https://www.greenpeace.org/international/`,
                            type: "org",
                            noIframe: true
                        },
                        {
                            name: `Moms Clean Air Force`,
                            link: `https://www.momscleanairforce.org/`,
                            type: 'org'
                        },
                        {
                            name: "Citizens' Climate Lobby NM",
                            link: 'https://citizensclimatelobby.org/chapters/',
                            type: "org"
                        },
                        {
                            name: `Defenders of Wildlife`,
                            link: `https://defenders.org/wildlife`,
                            type: "org",
                            noIframe: true
                        },
                        {
                            name: 'Wild Earth Guardians',
                            link: 'https://wildearthguardians.org/',
                            type: "org"
                        },
                        {
                            name: 'NM Interfaith Power and Light',
                            link: 'https://www.nm-ipl.org/',
                            type: 'org',
                        },
                        {
                            name: 'New Energy Economy',
                            link: 'https://www.cpsenergy.com/en/about-us/who-we-are/new-energy-economy.html',
                            type: "org"
                        }
                    ],
                    learnMore: [
                        {
                            name: 'Audubon NM',
                            link: 'https://nm.audubon.org/',
                            type: 'org',
                            noIframe: true
                        },
                        {
                            name: 'Asombro Institute',
                            link: 'https://asombro.org/',
                            type: 'org',
                            noIframe: true
                        },
                        {
                            name: 'Environmental Education of New Mexico',
                            link: 'https://eeanm.org/',
                            type: 'org'
                        },
                        {
                            name: 'Good Earth',
                            link: 'https://vimeo.com/showcase/goodearth',
                            type: "pub",
                            noIframe: true
                        },
                        {
                            name: 'Kiss The Ground',
                            link: 'https://kisstheground.com/',
                            type: 'org'
                        },
                        {
                            name: 'Western Landowners Alliance',
                            link: 'https://westernlandowners.org/films/',
                            type: 'org'
                        },
                        {
                            name: 'The RainCatcher, Inc.',
                            link: 'https://theraincatcherinc.com',
                            type: 'bus'
                        },
                        {
                            name: 'NM Healthy Soil Working Group',
                            link: 'https://www.nmhealthysoil.org/',
                            type: 'org',
                            noIframe: true
                        },
                        {
                            name: 'Santa Fe Watershed',
                            link: 'https://www.santafewatershed.org/',
                            type: 'org'
                        },
                        {
                            name: 'Climate Change Leadership Institute',
                            link: 'http://www.takeresponsibility.us/',
                            type: 'org'
                        },
                        {
                            name: 'Wild Earth Guardians',
                            link: 'https://wildearthguardians.org/',
                            type: "org"
                        },
                        {
                            name: 'Western Environmental Law Center',
                            link: 'https://westernlaw.org/',
                            type: 'org'
                        },
                        {
                            name: 'Green Fire Times',
                            link: 'https://greenfiretimes.com/',
                            type: 'pub'
                        },
                        {
                            name: 'NM Interfaith Power and Light',
                            link: 'https://www.nm-ipl.org/',
                            type: 'org',
                        },
                        {
                            name: 'New Energy Economy',
                            link: 'https://www.cpsenergy.com/en/about-us/who-we-are/new-energy-economy.html',
                            type: "org"
                        },
                        {
                            name: 'Reunity Resources',
                            link: 'https://www.reunityresources.com/',
                            type: 'org'
                        },
                        {
                            name: 'Elena Kayak (Sustainability Program Specialist)',
                            link: 'https://www.sfps.info/departments/operations_department/sfps_green_-_sustainability',
                            type: 'people'
                        },
                        {
                            name: 'NM Wilderness Alliance',
                            link: 'https://www.nmwild.org/',
                            type: 'org'
                        },
                        {
                            name: 'Great Old Broads for Wilderness Alliance',
                            link: 'https://www.greatoldbroads.org/our-staff/',
                            type: 'org'
                        },
                        {
                            name: 'Renewable Taos',
                            link: 'https://renewabletaos.org/',
                            type: 'org'
                        },
                        {
                            name: 'Juntos NM',
                            link: 'https://cvnmef.org/juntos/',
                            type: 'org'
                        },
                        {
                            name: 'TEWA Woman United',
                            link: 'https://tewawomenunited.org/',
                            type: 'org',
                            noIframe: true
                        }
                    ]
                }
            }
        }
    },
}

function getRegionResources(region){

    const regionResources = resources[region].resources;

    const compiledResources = {resources:{}};

    //Copy resource categories
    Object.keys(regionResources).forEach( ageKey =>{
        compiledResources.resources[ageKey] = {label: categoryLabels[ageKey], list: {}, id: ageKey}
    });

    //Sort resources into categories by type
    Object.keys(regionResources).forEach( ageKey =>{

        regionResources[ageKey].forEach( resource =>{

            if(compiledResources.resources[ageKey].list[resource.type]){
                compiledResources.resources[ageKey].list[resource.type].list.push(resource);
            }
            else{
                compiledResources.resources[ageKey].list[resource.type] = { label: categoryLabels[resource.type], list: [resource], id: resource.type}
            }
        })
    });

    if(resources[region].subregions){

        compiledResources.subregions = {};
        const subregions = resources[region].subregions;

        Object.keys(subregions).forEach( subregion =>{

            compiledResources.subregions[subregion] = {label: categoryLabels[subregion], resources: {}}
            const subregionResources = resources[region].subregions[subregion].resources;

            //Copy resource categories
            Object.keys(subregionResources).forEach( ageKey =>{
                console.log(ageKey);
                compiledResources.subregions[subregion].resources[ageKey] = {label: categoryLabels[ageKey], list: {}}
            });

            console.log(compiledResources);

            //Sort resources into categories by type
            Object.keys(subregionResources).forEach( ageKey =>{

                subregionResources[ageKey].forEach( resource =>{

                    if(compiledResources.subregions[subregion].resources[ageKey].list[resource.type]){
                        compiledResources.subregions[subregion].resources[ageKey].list[resource.type].list.push(resource);
                    }
                    else{
                        compiledResources.subregions[subregion].resources[ageKey].list[resource.type] = { label: categoryLabels[resource.type], list: [resource]}
                    }
                })
            });
        })
    }


    const compiledObj = compiledResources;
    compiledObj.label = categoryLabels[region];
    compiledObj.id = region;
    return compiledObj;
}
function getAllResources(){

    const allResources = [];
    Object.keys(resources).forEach( region =>{
        allResources.push(getRegionResources(region));
    });

    return allResources;
}
export {resources, getRegionResources, getAllResources};