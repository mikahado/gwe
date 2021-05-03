import React from 'react';
import {ResourceCategory} from "../resources";
import {filterResources} from "../resourceData";

export function ResourceList(props){

    const filteredResources = filterResources(props.filters);

    return(

        <div className={'position-relative'}>
            <section className={'d-flex flex-column align-items-center '}>
                <h2>For Kid's Action</h2>

                {
                    filteredResources.kids.map( categoryObj =>{

                        return(
                            <ResourceCategory
                                heading={categoryObj.heading}
                                resourceList={categoryObj.list}
                                key={`Kids ${categoryObj.heading} Resource Category`}
                            />
                        )
                    })
                }
            </section>

            <section className={'d-flex flex-column align-items-center '}>
                <h2>To Learn More</h2>
                {
                    filteredResources.learnMore.map( categoryObj =>{

                        return(
                            <ResourceCategory
                                heading={categoryObj.heading}
                                resourceList={categoryObj.list}
                                key={`${categoryObj.heading} Resource Category`}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}